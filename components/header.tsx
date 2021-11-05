import React from 'react'
import {
  Box,
  IconButton,
  Spacer,
  Flex,
  Progress,
  Heading,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useRouter } from "next/router";

type Props = {
  loading?: boolean
}

const Header = ({ loading }: Props) => {
  const router = useRouter()
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <>
      <Flex mb="5px">
        <Box p="2">
          <Heading size="md" onClick={() => router.push("/")}>Chakra App</Heading>
        </Box>
        <Spacer />
        <Box>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            ml={{ base: "0", md: "3" }}
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
        </Box>
      </Flex>
      {loading ? <Progress isIndeterminate /> : null}
    </>
  )
}

export default Header
