import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Sun, Moon } from '@icon-park/react'
import useSound from 'use-sound'

export const ColorModeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [play] = useSound('/sounds/light_switch.mp3', {
		volume: 0.1,
		sprite: {
			on: [0, 300],
			off: [500, 300],
		}
	})
	const text = useColorModeValue('dark', 'light')
	const SwitchIcon = useColorModeValue(
		<Moon size="24" />,
		<Sun size="24" />
	)
	const handleToggleColorMode = () => {
		toggleColorMode()
		colorMode === 'dark' ? play({ id: 'on' }) : play({ id: 'off' })
	}

	return (
		<>
			<IconButton
				size="md"
				fontSize="lg"
				aria-label={`Switch to ${text} mode`}
				variant="ghost"
				color="current"
				onClick={handleToggleColorMode}
				icon={SwitchIcon}
			/>
		</>
	)
}

