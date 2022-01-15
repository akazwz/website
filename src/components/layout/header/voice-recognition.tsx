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
import { Voice } from '@icon-park/react'
import { useReactMediaRecorder } from 'react-media-recorder'

const VoiceRecognition: FC = () => {
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
      callback(reader.result)
    }
  }

  const sendBase64ToServer = (base64Audio: string) => {
    let postRequest = new Request('/transcription/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8;'
      },
      body: JSON.stringify({ base64: base64Audio })
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
            blobToBase64(blob, (base64Audio: string) => {
              console.log(base64Audio)
              sendBase64ToServer(base64Audio)
            })
          })
        })
        return
    }
    setIsMicReady(false)
  }, [mediaBlobUrl, status])

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