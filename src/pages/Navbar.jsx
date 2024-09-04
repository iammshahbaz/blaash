import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  IconButton,
  Avatar,
} from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Box bg="gray.800" p={4} borderRadius="md">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Design Studio
        </Text>

        <Flex alignItems="center" gap={2}>
          <Button colorScheme="blue" variant="outline" leftIcon={<SearchIcon />}>
            Support Request
          </Button>
          <Button colorScheme="blue" variant="outline" leftIcon={<SearchIcon />}>
            Product Tour
          </Button>

          <Input
            placeholder="Search Project..."
            bg="gray.700"
            borderRadius="md"
            _placeholder={{ color: 'gray.400' }}
            style={{width :"200px"}}
          />
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            colorScheme="blue"
            variant="ghost"
          />
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            colorScheme="blue"
            variant="ghost"
          />
          <Avatar name="Leonardo" src="path_to_image" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
