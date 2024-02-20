import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import React, { useEffect } from "react";

import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Homepage = () => {
  const navigate = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      navigate.push("/chats");
    }
  }, [navigate]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={2}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Mern Secure Chat App
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={3}
        borderRadius="lg"
        color="black"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Log-in</Tab>
            <Tab width="50%">Sign-up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
