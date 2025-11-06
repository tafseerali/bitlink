"use client"
import React from 'react'
import { useState } from 'react';
import { Button, Stack, Center, Group, Text, Title, List } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import Link from 'next/link';


const Shorten = () => {
  const [Generated, setGenerated] = useState(false)

  const form = useForm({
    initialValues: {
      url: '',
      alias: '',
    },
    validate: {
      url: (value) => /^https?:\/\/.+/.test(value) ? null : 'Enter a valid URL',
      alias: (value) => value.trim().length === 0 ? 'Alias is required' : null
    },
  })

  const generate = async () => {
    const validation = form.validate();

    if (!validation.hasErrors) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        url: form.values.url,
        shorturl: form.values.alias,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.success) {
            setGenerated(`${process.env.NEXT_PUBLIC_HOST}${form.values.alias}`)
            showNotification({ title: 'Success', color: 'green', message: result.message })
          } else {
            showNotification({ title: 'Error', color: 'red', message: result.message })
          }
        })
        .catch((error) => console.error(error));
    } else {
      showNotification({
        title: "Error",
        color: "red",
        message: "Please fill all fields correctly.",
      });
    }
  };


  return (
    <>
      <Group w={'100vw'} visibleFrom='sm' >
        <Center h={'100vh'} w={'50%'} style={{ borderRight: '1px solid #636363' }}>
          
          <Stack h={'fit-content'} w={'90%'} p={40} bdrs={20} style={{ boxShadow: '0px 1px 10px #141414' }} >
            <TextInput {...form.getInputProps('url')} label="URL" placeholder="Enter your URL" mb="sm" size='17' styles={{ input: { height: 55 } }}/>
            <TextInput {...form.getInputProps('alias')} label="ALIAS" placeholder="Enter Alias" mb="sm" size='17' styles={{ input: { height: 55 } }} />
            <Button onClick={generate} style={{height: '50px', fontSize: '17px'}}>Generate Short Link</Button>
            {Generated && <Group><Text>Your URL is:</Text><Link target='_blank' href={`${Generated}`}>{Generated}</Link></Group>
            }
          </Stack>
        </Center>
        <Stack w={'45%'}>
          <Stack>
            <Title c={'blueCustom.9'} order={2}>Make your URL short</Title>
            <List>
              <List.Item>Tired of long, messy links?</List.Item>
              <List.Item>Paste your long URL and get a clean, shareable link instantly.</List.Item>
              <List.Item>Perfect for sharing on social media, emails, or anywhere space matters.</List.Item>
            </List>

            <Title c={'blueCustom.9'} order={2}>How it works</Title>
            <List>
              <List.Item>Enter your long URL and custom alias</List.Item>
              <List.Item>Click Generate Short Link.</List.Item>
              <List.Item>Get your unique short URL ready to share immediately.</List.Item>
            </List>
            <Text>Your links stay safe, private, and easily manageable.</Text>


            <Title c={'blueCustom.9'} order={2}>Why use BitLinks</Title>
            <List>
              <List.Item>Fast and reliable link shortening</List.Item>
              <List.Item>Custom aliases for branded links</List.Item>
              <List.Item>Easy to use, no signup required</List.Item>
              <List.Item>Works seamlessly on any device</List.Item>
            </List>

            <Title c={'blueCustom.9'} order={2}>Share smarter</Title>
            <Text>Turn long, confusing URLs into simple links that look great and build trust.</Text>
          </Stack>
        </Stack>
      </Group>




      {/* For mobile */}
<Center h={'fit-content'} mb={50}>
      <Stack w={'fit-content'} hiddenFrom='sm'>
        <Center w={'100%'} my={50}>
          <Stack h={'fit-content'} w={'90%'} p={20} bdrs={20} style={{ boxShadow: '0px 1px 10px #141414' }} >
            <TextInput {...form.getInputProps('url')} label="URL" placeholder="Enter your URL" mb="sm" size='17' styles={{ input: { height: 55 } }} />
            <TextInput {...form.getInputProps('alias')} label="ALIAS" placeholder="Enter Alias" mb="sm" size='17' styles={{ input: { height: 55 } }} />
            <Button onClick={generate} style={{height: '50px', fontSize: '17px'}}>Generate Short Link</Button>
            {Generated && <Group><Text>Your URL is:</Text><Link target='_blank' href={`${Generated}`}>{Generated}</Link></Group>
            }
          </Stack>
        </Center>
        <Stack w={'100%'}>
          <Stack px={20}>
            <Title c={'blueCustom.9'} order={2}>Make your URL short</Title>
            <List>
              <List.Item>Tired of long, messy links?</List.Item>
              <List.Item>Paste your long URL and get a clean, shareable link instantly.</List.Item>
              <List.Item>Perfect for sharing on social media, emails, or anywhere space matters.</List.Item>
            </List>

            <Title c={'blueCustom.9'} order={2}>How it works</Title>
            <List>
              <List.Item>Enter your long URL and custom alias</List.Item>
              <List.Item>Click Generate Short Link.</List.Item>
              <List.Item>Get your unique short URL ready to share immediately.</List.Item>
            </List>
            <Text>Your links stay safe, private, and easily manageable.</Text>


            <Title c={'blueCustom.9'} order={2}>Why use BitLinks</Title>
            <List>
              <List.Item>Fast and reliable link shortening</List.Item>
              <List.Item>Custom aliases for branded links</List.Item>
              <List.Item>Easy to use, no signup required</List.Item>
              <List.Item>Works seamlessly on any device</List.Item>
            </List>

            <Title c={'blueCustom.9'} order={2}>Share smarter</Title>
            <Text>Turn long, confusing URLs into simple links that look great and build trust.</Text>
          </Stack>
        </Stack>
      </Stack>
      </Center>

    </>
  )
}

export default Shorten