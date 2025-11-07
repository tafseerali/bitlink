"use client";
import { Container, Title, Text, Card, Stack, Group, Button, Image } from "@mantine/core";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {

    useEffect(() => {
    // 🧠 Set dynamic metadata for the About page
    document.title = "About | BitLink";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Learn more about BitLink — a fast, reliable, and simple URL shortener designed to make your links cleaner and smarter."
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
    <Container size="md" py="xl">
      <Stack gap="lg" align="center" ta="center">
        <Image src="/logo.png" alt="BitLink Logo" w={80} />

        <Title order={2}>About BitLink</Title>
        <Text size="md" c="dimmed" maw={600}>
          BitLink is a simple and efficient URL shortener designed to make sharing links
          faster, cleaner, and smarter. Whether you're sharing on social media, marketing
          campaigns, or personal use — BitLink helps you manage and track your links easily.
        </Text>

        <Card withBorder shadow="sm" radius="md" p="lg" w="100%" maw={700}>
          <Title order={3} mb="sm">How It Works</Title>
          <Text>
            1️⃣ Enter your long URL in the input box.  
            <br />
            2️⃣ Choose a short alias or let BitLink create one for you.  
            <br />
            3️⃣ Click <strong>“Generate Short Link”</strong>.  
            <br />
            4️⃣ Instantly get a short, shareable link ready to use anywhere.
          </Text>
        </Card>

        <Card withBorder shadow="sm" radius="md" p="lg" w="100%" maw={700}>
          <Title order={3} mb="sm">Why Choose BitLink?</Title>
          <Text>
            ⚡ Fast and Reliable  
            🔒 Secure and Private  
            💡 Custom short links  
            📊 Future-ready for analytics and link tracking
          </Text>
        </Card>

        <Group mt="xl">
          <Link href="/shorten" style={{ textDecoration: "none" }}>
            <Button size="md">Try Now</Button>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="md">Back to Home</Button>
          </Link>
        </Group>
      </Stack>
    </Container>
  );
}
