import { FC, useEffect, useState } from 'react'
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import {Voice} from '@icon-park/react'
import { Circle } from '@chakra-ui/layout'

const VoiceRecognition:FC = () => {
  const fillColor = useColorModeValue('black', 'white')
  const {isOpen, onOpen, onClose} =  useDisclosure()
  const [isMicReady, setIsMicReady] = useState(false)
  const fill = isMicReady ? 'white' : 'red'
  const circleBg = isMicReady ? 'red' : 'white'

  useEffect(()=>{
    let t = setTimeout(()=>{
      setIsMicReady(true)
    }, 3000)
    return function clean() {

    }
  })

  return (
    <>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`voice`}
        variant="ghost"
        color="current"
        icon={<Voice theme="outline" size="24" fill={fillColor}/>}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>
            <Center h='15vh' minHeight='150px'>
              <Circle bg={'transparent'} size='130px' alignContent='center' alignItems='center'>
                <Circle bg={circleBg} size='78px' alignContent='center' alignItems='center'>
                  <Voice theme="filled" size="48px" fill={fill}/>
                </Circle>
              </Circle>
            </Center>
          </DrawerHeader>
          <DrawerBody>
            <Box height='5vh' minHeight='50px'>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default VoiceRecognition