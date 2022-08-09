import { Box, Stack, HStack, Text, ButtonGroup, IconButton, } from '@chakra-ui/react'
import { Github, Weibo, Dashboard } from '@icon-park/react'

import { LanguagesSwitch } from '../../LanguagesSwitch'
import { ColorModeToggle } from '../../ColorModeToggle'

import type { TextProps, ButtonGroupProps, } from '@chakra-ui/react'

const HomeFooter = () => {
	return (
		<Box
			as="footer"
			position="fixed"
			bottom={0}
			w="100%"
			backdropFilter={'blur(5px)'}
		>
			<Stack maxW={'2xl'} mx={'auto'} p={3}>
				<Stack
					direction={{ base: 'column-reverse', md: 'row' }}
					spacing="4"
					align="center"
					justifyContent="center"
					justify="space-between"
				>
					{/*<HStack>
						<Logo size="11px" />
						<Text color={'gray.500'}>
							Built with Next.js
						</Text>
					</HStack>*/}
					<HStack>
						<LanguagesSwitch />
						<ColorModeToggle />
						<SocialMediaLinks />
					</HStack>
				</Stack>
			</Stack>
		</Box>
	)
}

interface CopyrightProps extends TextProps{
	name: string
}

const Copyright = (props: CopyrightProps) => (
	<Text fontSize="sm" {...props}>
		&copy; {new Date().getFullYear()} {props.name}, Inc. All rights reserved.
	</Text>
)

const SocialMediaLinks = (props: ButtonGroupProps) => (
	<ButtonGroup variant="ghost" {...props}>
		<IconButton
			as="a"
			href="#"
			aria-label="Weibo"
			target="_blank"
			icon={<Weibo size="20px" />}
		/>
		<IconButton
			as="a"
			href="https://github.com/akazwz"
			aria-label="GitHub"
			target="_blank"
			icon={<Github size="20px" />}
		/>
		<IconButton
			as="a"
			href="/dashboard"
			aria-label="Twitter"
			target="_blank"
			icon={<Dashboard size="20px" />}
		/>
	</ButtonGroup>
)

export default HomeFooter