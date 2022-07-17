import { Badge, Box, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { NextChakraLink } from '../components/NextChakraLink'

const About = () => {
	return (
		<VStack align={'start'}>
			<Text>
				I am Zhao Wenzhuo, living in Chengdu China now. I love code and open source
				projects. My github name is {' '}
				<NextChakraLink href={'https://github.com/akazwz'} color={'blue.500'}>
					akazwz
				</NextChakraLink>,
				I like to code and browser something in github,
				you can find some if them in {' '}
				<NextChakraLink href={'/projects'} color={'blue.500'}>
					Projects
				</NextChakraLink>,
				or just browser my github profile.
			</Text>
			<Divider />
			{/*<Text>
				I born in 1998 and graduated from ZaoZhuang University at 2020.
				At 4th year at college, I am a Java developer trainee. and my
				Graduation Design is a bbs about a11y build with Java and Vue.
				When I graduated,
				I go to Shenzhen and work for a year with PHP and laravel.
				Cause of some personal stuff, i quit the job and go home.
				At home I learned go and react until now.
			</Text>
			<Divider />*/}
			<Text>
				Programing languages
			</Text>
			<Box>
				<Badge fontSize={'lg'} ml={3}>PHP</Badge>
				<Badge fontSize={'lg'} ml={3}>Javascript</Badge>
				<Badge fontSize={'lg'} ml={3}>Typescript</Badge>
				<Badge fontSize={'lg'} ml={3}>Go</Badge>
			</Box>
			<Divider />
			<Text>
				Lib and frameworks
			</Text>
			<Box>
				<Badge fontSize={'lg'} ml={3}>Laravel</Badge>
				<Badge fontSize={'lg'} ml={3}>React</Badge>
				<Badge fontSize={'lg'} ml={3}>Next.js</Badge>
				<Badge fontSize={'lg'} ml={3}>Chakra UI</Badge>
				<Badge fontSize={'lg'} ml={3}>Prisma</Badge>
				<Badge fontSize={'lg'} ml={3}>Express</Badge>
				<Badge fontSize={'lg'} ml={3}>Gin</Badge>
				<Badge fontSize={'lg'} ml={3}>Gorm</Badge>
				<Badge fontSize={'lg'} ml={3}>GRPC</Badge>
			</Box>
			<Text>
				Databases and devops
			</Text>
			<Box>
				<Badge fontSize={'lg'} ml={3}>Mysql</Badge>
				<Badge fontSize={'lg'} ml={3}>Postgres</Badge>
				<Badge fontSize={'lg'} ml={3}>Redis</Badge>
				<Badge fontSize={'lg'} ml={3}>Chakra UI</Badge>
				<Badge fontSize={'lg'} ml={3}>Docker</Badge>
				<Badge fontSize={'lg'} ml={3}>Linux</Badge>
				<Badge fontSize={'lg'} ml={3}>Git</Badge>
			</Box>
			<Divider />
			<Text>
				Tools
			</Text>
			<Box>
				<Badge fontSize={'lg'} ml={3}>Phpstorm</Badge>
				<Badge fontSize={'lg'} ml={3}>Webstorm</Badge>
				<Badge fontSize={'lg'} ml={3}>Idea</Badge>
				<Badge fontSize={'lg'} ml={3}>Goland</Badge>
				<Badge fontSize={'lg'} ml={3}>Docker Desktop</Badge>
				<Badge fontSize={'lg'} ml={3}>Postman</Badge>
				<Badge fontSize={'lg'} ml={3}>XShell</Badge>
				<Badge fontSize={'lg'} ml={3}>BloomRPC</Badge>
			</Box>
			<Divider />
		</VStack>
	)
}

export default About