import React from "react"
import { MdSave } from "react-icons/md"
import { Container, Button, HStack, VStack, IconButton } from "@chakra-ui/react"

export default {
  title: "Theme/Button",
  decorators: [(story: Function) => <Container>{story()}</Container>],
}

const variants = ["solid", "outline", "ghost", "link"]
const colors = ["blue", "yellow", "red"]

export const button = () => (
  <VStack w="full" spacing={4} justify="center">
    {colors.map((c) => (
      <HStack w="full" spacing={2} justify="space-between" key={c}>
        {variants.map((v) => (
          <Button colorScheme={c} variant={v} key={`${c}-${v}`}>
            Simpan
          </Button>
        ))}
      </HStack>
    ))}
    {colors.map((c) => (
      <HStack w="full" spacing={2} justify="space-between" key={c}>
        {variants.map((v) => (
          <Button colorScheme={c} variant={v} key={`${c}-${v}`} isLoading>
            Simpan
          </Button>
        ))}
      </HStack>
    ))}

    {colors.map((c) => (
      <HStack w="full" spacing={2} justify="space-between" key={c}>
        {variants.map((v) => (
          <Button
            colorScheme={c}
            variant={v}
            key={`${c}-${v}`}
            leftIcon={<MdSave />}
          >
            Simpan
          </Button>
        ))}
      </HStack>
    ))}

    {colors.map((c) => (
      <HStack w="full" spacing={2} justify="space-between" key={c}>
        {variants.map((v) => (
          <IconButton
            colorScheme={c}
            variant={v}
            key={`${c}-${v}`}
            icon={<MdSave />}
            aria-label="Simpan"
          />
        ))}
      </HStack>
    ))}
  </VStack>
)
