'use client'
import React from 'react'
import '@mantine/core/styles.css';
import { FooterCentered } from './Footer';
import Link from 'next/link';
import { AppShell, Group, Image, Text, Button, Burger, Drawer, Box, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

import NextTopLoader from 'nextjs-toploader'

const LayoutWrapper = ({ children }) => {

  const [opened, { toggle, close }] = useDisclosure(false);

  const { toggleColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const isDark = computedColorScheme === 'dark';

  return (<>
    <NextTopLoader color="#4f46e5" height={4} showSpinner={false} />


    <AppShell header={{ height: 60 }} style={{ overflow: 'hidden' }}>

      <AppShell.Header>
        <Group justify="space-between" align="center" h="100%" px="md">
          <Group position="center" gap='6'>
            <Image w={27} alt='BitLink URL Shortner' src={'/logo.png'}></Image>
            <Text fw={600}>BitLink</Text>
          </Group>


          {/* hide these two button */}
          <Group gap='sm' hiddenFrom='sm'>
            <Link href={'/shorten'}><Button variant="filled" >Try Now</Button></Link>
            <Link target='_blank' href={'https://github.com/tafseerali'}><Button variant="filled">Github</Button></Link>
          </Group>

          {/* desktop links */}
          <Group gap="sm" visibleFrom="sm">
            <Link href={'/'}><Button variant="transparent" color='blueCustom.9'>Home</Button></Link>
            <Link href={'/about'}><Button variant="transparent" color='blueCustom.9'>About</Button></Link>
            <Link href={'/shorten'}><Button variant="transparent" color='blueCustom.9'>Shorten</Button></Link>
            <Link href={'/contact'}><Button variant="transparent" color='blueCustom.9'>Contact</Button></Link>
            <Link href={'/shorten'}><Button variant="filled" >Try Now</Button></Link>
            <Link target='_blank' href={'https://github.com/tafseerali'}><Button variant="filled">Github</Button></Link>
          </Group>
          {/* Burger */}
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />

        </Group>
      </AppShell.Header>

      {/* mobile drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        size="70%"
        position="right"
        title="Menu"
      >
        <Link style={{ textDecoration: 'none' }} href={'/'}><Button variant="filled" color='blueCustom.9' fullWidth mb="sm" onClick={close}>Home</Button></Link>
        <Link style={{ textDecoration: 'none' }} href={'/about'}><Button variant="filled" color='blueCustom.9' fullWidth mb="sm" onClick={close}>About</Button></Link>
        <Link style={{ textDecoration: 'none' }} href={'/shorten'}><Button variant="filled" color='blueCustom.9' fullWidth mb="sm" onClick={close}>Shorten</Button></Link>
        <Link style={{ textDecoration: 'none' }} href={'/contact'}><Button variant="filled" color='blueCustom.9' fullWidth mb="sm" onClick={close}>Contact</Button></Link>
      </Drawer>

      {/* Main content */}
      <AppShell.Main>

        {children}



        {/* Light and dark mode section */}
        <Box
          pos={'absolute'}
          bottom={20}
          right={20}
          style={{zIndex: '999'}}
        >
          <ActionIcon
            pos={'fixed'}
            bottom={20}
            right={20}
            onClick={toggleColorScheme}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {/* Show Moon if light mode, or Sun if dark mode */}
            {isDark ? (
              <IoSunnyOutline size={20} style={{ color: 'var(--mantine-color-yellow-5)' }} />
            ) : (
              <IoMoonOutline size={20} style={{ color: 'var(--mantine-color-blue-6)' }} />
            )}
          </ActionIcon>
        </Box>
      </AppShell.Main>
    </AppShell>
    <FooterCentered />
  </>
  )
}

export default LayoutWrapper