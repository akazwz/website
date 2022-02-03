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
  useDisclosure, useColorMode,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Voice } from '@icon-park/react'
import { useMediaRecorder } from '../../../hooks/useMediaRecorder'
import { useUpload } from '../../../hooks/useUpload'

const VoiceRecognition: FC = () => {
  const router = useRouter()
  const fillColor = useColorModeValue('black', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMicReady, setIsMicReady] = useState(false)
  const [voiceWords, setVoiceWords] = useState<string>('')
  const fill = isMicReady ? 'white' : 'red'
  const circleBg = isMicReady ? 'red' : 'white'

  const { startRecording, stopRecording, blob, } = useMediaRecorder({})
  const [token, setToken] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [readyUpload, setReadyUpload] = useState<boolean>(false)
  const { start, state, completeInfo } = useUpload(file, token)

  const { toggleColorMode, colorMode } = useColorMode()

  useEffect(() => {
    if (!blob) {
      return
    }
    setFile(new File([blob], 'audio.wav', { type: 'audio/wav' }))
    setIsMicReady(false)
  }, [blob])

  useEffect(() => {
    const getQiniuUploadToken = async (): Promise<string> => {
      const res = await fetch('https://www.fhub.xyz/api/token/qiniu-upload-token', { method: 'GET' })
      if (res.status !== 200) {
        return ''
      }
      const { uploadToken } = await res.json()
      return uploadToken
    }
    getQiniuUploadToken().then((uploadToken) => {setToken(uploadToken)})
  }, [])

  useEffect(() => {
    if (file && token) {
      setReadyUpload(true)
    }
  }, [file, token, router.locale])

  useEffect(() => {
    if (readyUpload) {
      start()
    }
  }, [readyUpload, router.locale])

  useEffect(() => {
    setReadyUpload(false)
    if (!completeInfo) {
      return
    }
    const key = completeInfo.key
    fetch('/api/transcription?key=' + key + '&locale=' + router.locale, { method: 'GET' })
      .then((res) => {
        if (res.status !== 200) {
          alert('error')
          return
        }
        res.json().then((data) => {
          const { Result } = data.data
          setVoiceWords(Result)
        })
      })

  }, [completeInfo, router.locale])

  useEffect(() => {
    if (voiceWords === '') {
      return
    }
    switch (router.locale) {
      case 'en':
        enoOrders()
        break
      case 'zh':
        zhoOrders()
        break
      default:
    }
  }, [voiceWords])

  const zhoOrders = () => {
    switch (true) {
      case  voiceWords.indexOf('黑暗模式') !== -1 :
        if (colorMode === 'dark') {
          break
        }
        toggleColorMode()
        break
      case voiceWords.indexOf('明亮模式') !== -1:
        if (colorMode === 'light') {
          break
        }
        toggleColorMode()
        break
      case voiceWords.indexOf('主页') !== -1:
        router.push('/', '/', { locale: router.locale }).then()
        break
      case voiceWords.indexOf('项目') !== -1:
        router.push('/projects', '/projects', { locale: router.locale }).then()
        break
      case voiceWords.indexOf('关于') !== -1:
        router.push('/about', '/about', { locale: router.locale }).then()
        break
      case voiceWords.indexOf('中文') !== -1:
        router.push(router.asPath, router.asPath, { locale: 'zh' }).then()
        break
      case voiceWords.indexOf('英语') !== -1:
        router.push(router.asPath, router.asPath, { locale: 'en' }).then()
        break
      default:
    }
  }

  const enoOrders = () => {
    switch (true) {
      case  voiceWords.toLowerCase().indexOf('dark') !== -1 :
        if (colorMode === 'dark') {
          break
        }
        toggleColorMode()
        break
      case voiceWords.toLowerCase().indexOf('light') !== -1:
        if (colorMode === 'light') {
          break
        }
        toggleColorMode()
        break
      case voiceWords.toLowerCase().indexOf('homepage') !== -1:
        router.push('/', '/', { locale: router.locale }).then()
        break
      case voiceWords.toLowerCase().indexOf('projects') !== -1:
        router.push('/projects', '/projects', { locale: router.locale }).then()
        break
      case voiceWords.toLowerCase().indexOf('about') !== -1:
        router.push('/about', '/about', { locale: router.locale }).then()
        break
      case voiceWords.toLowerCase().indexOf('chinese') !== -1:
        router.push(router.asPath, router.asPath, { locale: 'zh' }).then()
        break
      case voiceWords.toLowerCase().indexOf('english') !== -1:
        router.push(router.asPath, router.asPath, { locale: 'en' }).then()
        break
      default:
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
          setVoiceWords('')
          setTimeout(() => {
            stopRecording()
          }, 5000)
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