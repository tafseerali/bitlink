"use client";
import { Container, Title, Text, Card, Stack, Group, Button, Anchor, Image } from "@mantine/core";
import Link from "next/link";
import { IconMail, IconWorld, IconBrandGithub } from "@tabler/icons-react";
import { useEffect } from "react";



export default function Contact() {

    useEffect(() => {
    // 🧠 Set dynamic page title
    document.title = "Contact | BitLink";

    // 🧠 Set meta description
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Get in touch with BitLink for support, feedback, or collaboration. We're here to help you with all your URL shortening needs."
      );

    // 🧠 Set favicon dynamically
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = "/logo.ico";
    document.head.appendChild(link);
  }, []);


  return (
    <Container size="sm" py="xl">
      <Stack align="center" gap="lg" ta="center">
        <Image src="/logo.png" alt="BitLink Logo" w={70} />

        <Title order={2}>Contact Us</Title>
        <Text size="md" c="dimmed" maw={600}>
          We’d love to hear from you! Whether you have questions, feedback, or ideas to improve BitLink,
          feel free to reach out anytime.  
        </Text>

        <Card withBorder shadow="sm" radius="md" p="lg" w="100%" maw={500}>
          <Stack gap="sm" align="center">
            <Group>
              <IconMail size={20} />
              <Text fw={500}>Email:</Text>
              <Anchor href="mailto:rajatafseerali@gmail.com" target="_blank" underline="never">
                rajatafseerali@gmail.com
              </Anchor>
            </Group>

            <Group>
              <IconWorld size={20} />
              <Text fw={500}>Website:</Text>
              <Anchor href="https://bitlink.vercel.app" target="_blank" underline="never">
                {process.env.NEXT_PUBLIC_HOST}
              </Anchor>
            </Group>

            <Group>
              <IconBrandGithub size={20} />
              <Text fw={500}>GitHub:</Text>
              <Anchor href="https://github.com/tafseerali" target="_blank" underline="never">
                github.com/
              </Anchor>
            </Group>
          </Stack>
        </Card>

        <Text maw={600} c="dimmed" mt="md">
          Our team usually replies within 24 hours. Thank you for supporting BitLink 💜
        </Text>

        <Group mt="xl">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link href="/shorten" style={{ textDecoration: "none" }}>
            <Button>Try BitLink</Button>
          </Link>
        </Group>
      </Stack>
    </Container>
  );
}
