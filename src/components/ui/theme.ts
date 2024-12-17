import { createSystem, defaultBaseConfig, defineConfig, defaultSystem, defaultConfig } from "@chakra-ui/react"
import { merge } from "ts-deepmerge";

const customConfig = defineConfig({
  theme: {
    tokens:{
        colors: {
            brand: {
                "500": { value: "tomato"},
            },
        },
    }
  },
})

export const system = createSystem(customConfig, defaultConfig)