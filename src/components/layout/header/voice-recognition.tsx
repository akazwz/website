import { FC, useEffect, useState } from 'react'
import {
  Box,
  Center,
  Drawer,
  Circle,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Voice } from '@icon-park/react'
import { useMediaRecorder } from '../../../hooks/useMediaRecorder'

const VoiceRecognition: FC = () => {
  const router = useRouter()
  const fillColor = useColorModeValue('black', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMicReady, setIsMicReady] = useState(false)
  const [voiceWords, setVoiceWords] = useState<string>('')
  const fill = isMicReady ? 'white' : 'red'
  const circleBg = isMicReady ? 'red' : 'white'

  const { startRecording, stopRecording, blob, } = useMediaRecorder({})

  const blobToBase64 = (blob: Blob) => {
    return new Promise(((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(blob)
      fileReader.onload = (e) => {
        if (typeof e!.target!.result === 'string') {
          const value = e!.target!.result
          resolve(value)
        }
      }
      fileReader.onerror = () => {
        reject(new Error('blob to base64 error'))
      }
    }))
  }

  const sendBase64ToServer = (base64Audio: string, dataLen: number, locale: string) => {
    fetch('/api/transcription/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;'
      },
      body: JSON.stringify({
        base64Audio,
        dataLen,
        locale,
      })
    }).then((res) => {
      res.json().then((res) => {
        const { data } = res
        const { Result } = data
        setVoiceWords(Result)
      })
    })
  }

  useEffect(() => {
    if (!blob) {
      return
    }
    const getAliASR = async (blob: Blob) => {
      const URL = 'https://nls-gateway.cn-shanghai.aliyuncs.com/stream/v1/asr'
      const appkey = ''
      const format = ''
      const sample_rate = ''
      const enable_punctuation_prediction = true
      const requestUrl = URL + '?appkey=' + appkey + '&format=' + format
        + '&sample_rate=' + sample_rate + '&enable_punctuation_prediction=' + enable_punctuation_prediction

      const headers = new Headers()
      const token = await getAliToken()
      headers.append('X-NLS-Token', token)
      headers.append('Content-type', 'application/octet-stream')
      headers.append('Content-Length', String(blob.size))
      headers.append('Host', 'nls-gateway.cn-shanghai.aliyuncs.com')
      headers.append('origin', 'https://zhaowenzhuo.me')

      fetch(requestUrl, {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        /*body: blob,*/
      })
        .then((res) => {
          console.log(res.json())
        })
        .catch((e) => {
          console.log(e)
        })
    }

    getAliASR(blob).then()
    /*blobToBase64(blob).then((base64) => {
      console.log(base64)
      if (typeof base64 !== 'string') {
        return
      }
      sendBase64ToServer(base64, blob.size, 'zh')
    })*/
    setIsMicReady(false)
  }, [blob, router.locale])


  const getAliToken = async (): Promise<string> => {
    try {
      const res = await fetch('/api/token', { method: 'GET' })
      if (res.status !== 200) {
        return ''
      }
      const { token, expire } = await res.json()
      return token
    } catch (e) {
      console.log(e)
      return ''
    }
  }

  return (
    <>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`voice`}
        variant="ghost"
        color="current"
        icon={<Voice theme="outline" size="24" fill={fillColor}/>}
        onClick={() => {
          onOpen()
          startRecording()
        }}
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={() => {
          onClose()
          stopRecording()
        }}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>
            <Center h="15vh" minHeight="150px">
              <Circle bg={'transparent'} size="130px" alignContent="center" alignItems="center">
                <Circle
                  bg={circleBg}
                  size="78px"
                  alignContent="center"
                  alignItems="center"
                  onClick={() => {
                    stopRecording()
                  }}
                >
                  <Voice theme="filled" size="48px" fill={fill}/>
                </Circle>
              </Circle>
            </Center>
          </DrawerHeader>
          <DrawerBody>
            <Box height="5vh" minHeight="50px" textAlign="center">
              <Text>
                {voiceWords}
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default VoiceRecognition