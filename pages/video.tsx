import { Box, AspectRatio } from '@chakra-ui/react'

const VideoPage = () => {
  return (
    <Box>
      <AspectRatio maxH="50vh" ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  )
}

export default VideoPage
