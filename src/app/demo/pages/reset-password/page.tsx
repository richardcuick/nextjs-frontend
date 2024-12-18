'use client'

import {
  Button,
  Flex,
  Box,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

import {useColorModeValue} from '@/components/ui/color-mode'
import {Field} from '@/components/ui/field'

export default function ResetPasswordForm() {
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
          输入新密码
        </Heading>
        <Field id="mobile" required>
          <Text>手机号码</Text>
          <Input
            placeholder="您的手机号码"
            _placeholder={{ color: 'gray.500' }}
            type="mobile"
          />
        </Field>
        <Field id="password" required>
          <Text>密码</Text>
          <Input type="password" />
        </Field>
        <Stack gap={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            提交
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}