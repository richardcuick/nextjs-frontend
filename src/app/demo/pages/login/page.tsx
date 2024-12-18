'use client'

import {
  Flex,
  Box,
  //FormControl,
  //FormLabel,
  Input,
  //Checkbox,
  Stack,
  VStack,
  HStack,
  Button,
  Heading,
  Text,
  //useColorModeValue,
} from '@chakra-ui/react'

import { Checkbox } from "@/components/ui/checkbox"

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    //   bg={useColorModeValue('gray.50', 'gray.800')}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <VStack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </VStack>
        <Box
          rounded={'lg'}
        //   bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <VStack spacing={4} >
            {/* <FormControl id="email"> */}
            <Box id="email">
              {/* <FormLabel>Email address</FormLabel> */}
              <Text>Email address</Text>
              <Input type="email" />
            {/* </FormControl> */}
            </Box>
            {/* <FormControl id="password"> */}
            <Box id="password">
              {/* <FormLabel>Password</FormLabel> */}
              <Text>Password</Text>
              <Input type="password" />
            {/* </FormControl> */}
            </Box>
            <Stack padding="4" margin="4" >
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </VStack>
        </Box>
      </Stack>
    </Flex>
  )
}