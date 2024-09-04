import {
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Grid,
    Image,
    Stack,
    Text,
    useDisclosure,
    Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function PlayListSection() {
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const fetchVideos = (PlayListId) => {
        axios
            .post(
                "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
                {
                    Index: 1,
                    ContentType: [2],
                    IsTagged: false,
                    URL: "",
                },
                {
                    headers: {
                        "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
                        "X-Tenant-Key": "TYKE070323",
                    },
                }
            )
            .then((response) => {
                const { data } = response.data; 
                const feeds = data.Feeds; 
                console.log("feeds:", feeds);
                if (Array.isArray(feeds) && feeds.length > 0) {
                    setSelectedPlaylist(feeds); 
                } else {
                    console.error("No videos found in the selected playlist.");
                    setSelectedPlaylist([]);
                }
                onOpen(); 
            })
            .catch((error) => {
                console.error("Error fetching videos:", error);
            });
    };

    useEffect(() => {
        axios
            .post(
                "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList",
                { Content_Type: 2 },
                {
                    headers: {
                        "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
                        "X-Tenant-Key": "TYKE070323",
                    },
                }
            )
            .then((response) => {
                const { data } = response.data;
                console.log(response.data)

                if (Array.isArray(data) && data.length > 0) {
                    setPlaylists(data);
                } else {
                    console.error("Unexpected response data or empty array:", response.data);
                    setPlaylists([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching playlists:", error);
                setPlaylists([]);
            });
    }, []);

    return (


        <Box bg="gray.900" h="100vh" p={4}>
            <Navbar />
            <Heading as="h5" size="sm" color="white" p={4}>
                Product Playlists
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4} bg="gray.800">
                {Array.isArray(playlists) && playlists.length > 0 ? (
                    playlists.map((playlist, index) => (
                        <Box
                            key={index}
                            bg="gray.700"
                            color="white"
                            borderRadius="md"
                            textAlign="center"
                            p={4}
                            boxShadow="md"
                            onClick={() => fetchVideos(playlist.PlayListId)}
                        >
                            {/* <Image
                  borderRadius="md"
                  src={playlist.thumbnailUrl || "default-thumbnail-url.jpg"}
                  alt={playlist.Name}
                /> */}
                            <Stack mt={3}>
                                <Text fontSize="lg">{playlist.Name}</Text>
                                <Text fontSize="sm" color="gray.400">
                                    {playlist.Post_Ids.length} Videos
                                </Text>
                            </Stack>
                        </Box>
                    ))
                ) : (
                    <Text>No playlists found.</Text>
                )}
            </Grid>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
                <DrawerOverlay />
                <DrawerContent bg="gray.800" color="white">
                    <DrawerCloseButton />
                    <DrawerHeader>Playlist Videos</DrawerHeader>

                    <DrawerBody>
                        {selectedPlaylist.length > 0 ? (
                            selectedPlaylist.map((feed, index) => (
                                <Box key={index} p={4} bg="gray.700" borderRadius="md" mb={4}>
                                    <Text>{feed.NumberOfLikes}</Text>
                                </Box>
                            ))
                        ) : (
                            <Text>No videos found.</Text>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>

    );
}

export default PlayListSection;
