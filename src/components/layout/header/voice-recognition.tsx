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
import { useReactMediaRecorder } from 'react-media-recorder'

const VoiceRecognition: FC = () => {
  const router = useRouter()
  const fillColor = useColorModeValue('black', 'white')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMicReady, setIsMicReady] = useState(false)
  const fill = isMicReady ? 'white' : 'red'
  const circleBg = isMicReady ? 'red' : 'white'
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
  } = useReactMediaRecorder({
    audio: true,
    blobPropertyBag: {
      type: 'audio/wav'
    },
  })

  const blobToBase64 = (blob: Blob, callback: any) => {
    const reader = new FileReader()
    reader.readAsDataURL(blob)
    reader.onload = () => {
      if (reader.result) {
        if (typeof reader.result === 'string') {
          callback(reader.result)
          return
        }
        callback('')
        return
      }
      callback('')
    }
  }

  const sendBase64ToServer = (base64Audio: string, dataLen: number, locale: string) => {
    let postRequest = new Request('/api/transcription/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;'
      },
      body: JSON.stringify({
        base64Audio,
        dataLen,
        locale,
      })
    })
    fetch(postRequest).then((res) => {
      console.log(res)
    })
  }

  const sendFileToServer = (file: File, dataLen: number, locale: string) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('dataLen', dataLen.toString())
    formData.append('locale', locale)
    let postRequest = new Request('/api/transcription/', {
      method: 'POST',
      body: formData
    })
    fetch(postRequest).then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    switch (status) {
      case 'recording':
        setIsMicReady(true)
        return
      case 'stopped':
        if (!mediaBlobUrl) {
          return
        }
        fetch(mediaBlobUrl).then((res) => {
          res.blob().then((blob) => {
            const audioFile = new File([blob], 'audio.wav', { type: 'audio/wav' })
            console.log(audioFile)
            sendFileToServer(audioFile, audioFile.size, router.locale ?? 'en')
            /*blobToBase64(blob, (base64Audio: string) => {
              /!*base64 data-size locale*!/
              console.log(base64Audio)
              sendBase64ToServer(base64Audio, blob.size, router.locale ?? 'en')
            })*/
          })
        })
        return
    }
    setIsMicReady(false)
  }, [mediaBlobUrl, router.locale, status])

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
          clearBlobUrl()
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
                    switch (status) {
                      case 'recording':
                        stopRecording()
                        return
                      case 'stopped':
                        clearBlobUrl()
                        startRecording()
                        return
                    }
                  }}
                >
                  <Voice theme="filled" size="48px" fill={fill}/>
                </Circle>
              </Circle>
            </Center>
          </DrawerHeader>
          <DrawerBody>
            <Box height="5vh" minHeight="50px">
              <Text>
                {status}
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default VoiceRecognition