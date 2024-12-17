"use client"

import { ChakraProvider, defaultSystem, createSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

import { system } from "./theme"

import { useState, useEffect } from 'react';
import { ThemeProvider } from "next-themes";

export function Provider(props: ColorModeProviderProps) {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
       // this forces a rerender
      setHydrated(true)
  }, [])

  if (!hydrated) {
      // this returns null on first render, so the client and server match
      return null
  } 

  return (
    <ChakraProvider value={system}>
      
      <ThemeProvider attribute="class" disableTransitionOnChange>
      <ColorModeProvider >
        {props.children}
        </ColorModeProvider>
      </ThemeProvider>
     
    </ChakraProvider>
  )
}
