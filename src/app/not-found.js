import Link from 'next/link'
import { Stack, Title, Text } from '@mantine/core'
 
export default function NotFound() {
  return (
    <Stack p={10}>
      <Title order={1} fz={30}>Not Found</Title>
      <Text>Could not find requested resource</Text>
      <Link href="/">Return Home</Link>
    </Stack>
  )
}