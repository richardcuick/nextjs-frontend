'use client'

import {
  Button,
  Box,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

import {useColorModeValue} from '@/components/ui/color-mode'

type ForgotPasswordFormInputs = {
  email: string
}

export default function ForgotPasswordForm() {
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
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          忘记密码?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}
          >
          获取密码重置链接短信
        </Text>
        <Box id="mobile">
          <Input
            placeholder="手机号码"
            _placeholder={{ color: 'gray.500' }}
            type="mobile"
          />
        </Box>
        <Stack gap={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            请求重置
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}