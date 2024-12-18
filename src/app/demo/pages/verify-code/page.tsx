'use client'

import { Center, Heading } from '@chakra-ui/react'
import {
  Button,
  Box,
  Flex,
  Input,
  Stack,
  HStack,
} from '@chakra-ui/react'

import {useColorModeValue} from '@/components/ui/color-mode'
import {PinInput} from '@/components/ui/pin-input'

export default function VerifyEmailForm() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      >
      <Stack
        gap={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            验证手机号码
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}
          >
          发送代码短信到手机
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}
          >
          15640888106
        </Center>
        <Box>
          <Center>
            <HStack>
              <PinInput>
              </PinInput>
            </HStack>
          </Center>
        </Box>
        <Stack gap={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            验证
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}