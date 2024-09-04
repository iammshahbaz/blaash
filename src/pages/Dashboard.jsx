import { Box, Flex } from "@chakra-ui/react";
import LeftMenu from "./LeftMenu";
import PlayListSection from "./PlayListSection";

function Dashboard() {
  return (
    <Flex>
      <LeftMenu />
      <Box flex="1">
        <PlayListSection />
      </Box>
    </Flex>
  );
}

export default Dashboard;
