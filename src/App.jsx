import './index.css'
import { Box, Card, CardHeader, CardBody, CardFooter, Image, UnorderedList, List, ListItem, Flex, Text } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"100vh"}>
        <Card boxShadow={"lg"} maxW={"64"} borderRadius={"2xl"} maxH={"md"}>
          <CardHeader p={"3 "} alignContent={"center"} justifyContent={"center"}>
            <Box>
              <img className='qr_image' src="/image-qr-code.png" alt="image_description" width="image_width" height="image_height" />
            </Box>
          </CardHeader>
          <CardBody p={"3"}>
            <Box className='qr_content_heading'>
              <Text fontSize={"large"} textAlign={"center"}>
                Improve your front-end skills by building projects
              </Text>
            </Box>
            <Box m={"2"} className='qr_content'>
              <Text textColor={"gray.500"} textAlign={"center"} fontSize={"smaller"}>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
              </Text>
            </Box>
          </CardBody>
        </Card>
      </Box>
    </div>
  )
}

export default App
