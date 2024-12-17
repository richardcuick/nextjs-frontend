"use client"

import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"

export default function Demo() {
  return (
    <div>
        <HStack>
        <Button  colorPalette="blue" size="xs">Click me</Button>
        <Button colorPalette="teal" variant="solid">Click me</Button>
        <Button color="brand.500">ddd</Button>
        <ColorModeButton />
        </HStack>
    </div>
  )
}