import Layout from '../src/components/layout'
import Image from 'next/image'
import {Heading, SimpleGrid, Center, Link} from '@chakra-ui/react'
import styles from '../styles/Projects.module.css'
import React from 'react'
import {useRouter} from 'next/router'

const Projects = () => {
    const router = useRouter()
    const projects = [
        {
            imageSrc: '/hot.png',
            projectName: "Q HotSearch Web"
        },
        {
            imageSrc: '/mini.jpg',
            projectName: 'Z HotSearch MiniProgram'
        },
    ]

    const ProjectCards = () => {
        const cards = projects.map((project, index) => {
            return (
                <>
                    <Center
                        key={index}
                        height="70vh"
                        flexDirection="column"
                        margin="2rem"
                        className={styles.card}
                    >
                        <Image
                            src={project.imageSrc}
                            height="600px"
                            width="300px"
                            layout="fixed"
                            alt="project image"
                        />
                        <Link style={{marginTop: '1rem'}}>
                            <Heading size="md">
                                {project.projectName}
                            </Heading>
                        </Link>
                    </Center>

                </>
            )
        })

        return <>{cards}</>
    }

    return (
        <>
            <Layout>
                <Heading size="xl" textAlign="center" mb="1rem">
                    Created Things
                </Heading>
                <SimpleGrid columns={[1, null, 2]}>
                    <ProjectCards/>
                </SimpleGrid>
            </Layout>
        </>
    )
}

export default Projects
