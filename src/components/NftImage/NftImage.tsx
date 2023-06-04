import { AspectRatio, Flex, Spinner, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type Props = {
  alt?: string
  imageUri?: string
  name?: string
}

export const NftImage: React.FC<Props> = ({ alt, imageUri, name }) => {
  return imageUri ? (
    <AspectRatio
      maxW="400px"
      ratio={1}
      backgroundColor="gray.50"
      position="relative"
    >
      <>
        <Flex
          position="absolute"
          left={0}
          right={0}
          w="100%"
          height="100%"
          alignItems="center"
          justifyItems="center"
        >
          <Spinner size="md" color="gray.300" />
        </Flex>
        <Image alt={alt ?? ''} src={imageUri} width={400} height={400} />
      </>
    </AspectRatio>
  ) : (
    <AspectRatio maxW="400px" ratio={1} backgroundColor="gray.50">
      <Text fontSize="xs" color="gray.300">
        noImage
      </Text>
    </AspectRatio>
  )
}
