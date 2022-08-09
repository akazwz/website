import { StyleConfig } from '@chakra-ui/react'

const Button: StyleConfig = {
	baseStyle: {
		':focus:not(:focus-visible)': {
			boxShadow: 'none',
		},
	},
}

export default Button