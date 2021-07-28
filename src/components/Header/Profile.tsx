import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
           { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Inathan Moreira</Text>
                <Text color="gray.300" fontSize="small">
                    inathan.moreira.10@gmail.com
                </Text>
            </Box>
           )}

            <Avatar size="md" name="inathan Moreira" src="https://github.com/Inathan7.png" />
        </Flex>
    );
}