'use client'

import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react'

import { Checkbox } from "@/components/ui/checkbox"
import { Field } from "@/components/ui/field"
import { useColorModeValue } from '@/components/ui/color-mode'

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      >
      <Stack gap={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>登&nbsp;&nbsp;录</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>国轩工商储投资测算工具</Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack gap={4} >
            <Field id="mobile">
              <Text>用户名/手机号码</Text>
              <Input type="mobile" />
            </Field>
            <Field id="password">
              <Text>密码</Text>
              <Input type="password" />
            </Field>
            <Stack gap={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>记住我</Checkbox>
                <Text color={'blue.400'}>忘记密码?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                登录
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}