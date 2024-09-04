import { Box, Stack, Button,Image } from "@chakra-ui/react";
import { FaVideo, FaListAlt, FaCalendar, FaShoppingCart, FaImage, FaPager } from "react-icons/fa";

function LeftMenu() {
  return (
    <Box bg="#27272f" color="gray.800" w="250px" p={4} h="100vh">
        <Image p={4} src="../images/blash.png" alt ="img"/>
      <Stack spacing={4}>
        <Button leftIcon={<FaImage />} bg="none" color="gray.600"  justifyContent="flex-start">
          Shoppable Video
        </Button>
        <Button leftIcon={<FaImage />} bg="none" color="gray.600" justifyContent="flex-start">
          Story
        </Button>
        <Button leftIcon={<FaImage />} bg="none" color="gray.600" justifyContent="flex-start">
          Live Commerce
        </Button>
        <Button leftIcon={<FaImage />} bg="none" color="gray.600" justifyContent="flex-start">
          Playlist Manager
        </Button>
        <Button leftIcon={<FaPager />} bg="none" color="gray.600"  justifyContent="flex-start">
          One Click Post
        </Button>
        <Button leftIcon={<FaCalendar />} bg="none" color="gray.600"  justifyContent="flex-start">
          Calendar
        </Button>
        <Button leftIcon={<FaShoppingCart />} bg="none" color="gray.600" justifyContent="flex-start">
          Hire Influencer
        </Button>
      </Stack>
    </Box>
  );
}

export default LeftMenu;
