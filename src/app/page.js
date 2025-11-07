'use client';
// import Image from 'next/image';
import { Group, Button, Text, Title, Box, Stack, Center, Grid, Card, Image } from '@mantine/core';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Link from 'next/link';

const MotionBox = motion(Box)
const MotionCard = motion(Card)
const MotionStack = motion(Stack)
const MotionCenter = motion(Center)

import { useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

export default function Home() {
  const [startCount, setStartCount] = useState(false)

  return (
    <>
        <Group
          h={'100vh'}
          w={'100vw'}
          visibleFrom='sm'
        >
          <MotionBox component='div'
            px={80}
            w={'50%'}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title fz={45} order={1} >The Best {' '} <Text component='span' c={'blueCustom.9'} inherit>URL Shortener</Text> {' '} in the Market</Title>
            <Text style={{ color: '#595959' }}>We're the most straightforward URL shortener on the web. Unlike others, we prioritize your privacy by not tracking your activities or requiring login details.</Text>
            <TypeAnimation
              sequence={[
                'Fast and Reliable', // Types 'One'
                1500, // Waits 1s
                'Privacy-Focused', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                'Secure and Simple', ,
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={1}
              style={{ fontSize: '1.5em', display: 'inline-block', color: '#595959' }}
            />

            <Group pt={20}>
              <Link href={'/shorten'}><Button variant="filled" size='lg'>Try Now</Button></Link>
              <Button
                variant="outline"
                color="blueCustom.5"
                size='lg'
              >
                Github
              </Button>
            </Group>
          </MotionBox>
          <MotionBox
            component='div'
            w={'45%'}
            h={'100%'}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Center w={'80%'} h={'100%'}>
              <Image src={'/design2.png'}></Image>
            </Center>
          </MotionBox>
        </Group>

        {/* URL SHORTNER MOBILE */}
        <Stack
          h={'100vh'}
          w={'100vw'}
          hiddenFrom='sm'
        >
          <Center w={'100%'} h={'100%'} mb={10}>
            <MotionBox
              component='div'
              px={50}
              w={'100%'}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title order={1} >The Best {' '} <Text component='span' c={'blueCustom.9'} inherit>URL Shortener</Text> {' '} in the Market</Title>
              <Text style={{ color: '#595959' }}>We're the most straightforward URL shortener on the web. Unlike others, we prioritize your privacy by not tracking your activities or requiring login details.</Text>
              <TypeAnimation
                sequence={[
                  'Fast and Reliable', // Types 'One'
                  1500, // Waits 1s
                  'Privacy-Focused', // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  'Secure and Simple',
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={1}
                style={{ fontSize: '1.5em', display: 'inline-block', color: '#595959', padding: '20px 0px' }}
              />

              <Group py={20}>
                <Link href={'/shorten'}><Button variant="filled" size='md'>Try Now</Button></Link>
                <Link target='_blank' href={'https://github.com/tafseerali'}><Button
                  size='md'
                  variant="outline"
                  color="blueCustom.5"
                >
                  Github
                </Button>
                </Link>
              </Group>
            </MotionBox>
          </Center>
        </Stack>


        {/* Features section */}
        <Center
          w={'100vw'}
          align='center'
          visibleFrom='sm'
        >
          <Stack>
            <Title style={{ fontSize: '2em' }} order={2}>Everything you need to manage links</Title>
            <Text>Advanced link management tools that help you track performance and optimize campaigns</Text>
            <Grid
              h={'fit-content'}
            >
              <MotionCard
                mx={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder w={300}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Card.Section component="div">
                  <Image
                    src="/card1.png"
                    width={50}
                    height={200}
                    alt="Norway"
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Instant Links, Infinite Speed</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  Our infrastructure is engineered for zero-latency redirection. Create and share links instantly, ensuring your users get where they need to go faster than ever.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Performance & Reliability
                </Button>
              </MotionCard>

              <MotionCard
                mx={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                w={300}
              >
                <Card.Section component="div">
                  <Image
                    src="/card2.png"
                    width={50}
                    height={200}
                    alt="Norway"
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Clean Clicks, Clear Data</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  Get simple, non-invasive metrics like total click counts for your links. Focus only on performance, with no messy graphs or user tracking required.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Utility & Simplicity
                </Button>
              </MotionCard>

              <MotionCard
                mx={20}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                w={300}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Card.Section component="div">
                  <Image
                    src="/card3.png"
                    width={50}
                    height={200}
                    alt="Norway"
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Your Privacy, Our Priority</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  Unlike competitors, we commit to zero-tracking. We don't log user activity, collect personal data, or require any sign-up. Simple shortening, absolute privacy.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Security & Privacy
                </Button>
              </MotionCard>
            </Grid>
          </Stack>
        </Center>

        {/* Feature section for mobile */}
        <Center
          w={'100vw'}
          align='center'
          hiddenFrom='sm'
        >
          <Stack>
            <Title style={{ fontSize: '2em' }} order={2}>Everything you need to manage links</Title>
            <Text>Advanced link management tools that help you track performance and optimize campaigns</Text>
            <Grid
              h={'100%'}
              justify='center'
            >
              <MotionStack
                my={20}
                shadow="sm"
                padding="lg"
                radius="md"
                w={300}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Stack
                >
                  <Image
                    src="/card1.png"
                    width={50}
                    height={200}
                    alt="Norway"
                  />
                </Stack>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Instant Links, Infinite Speed</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  Our infrastructure is engineered for zero-latency redirection. Create and share links instantly, ensuring your users get where they need to go faster than ever.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Performance & Reliability
                </Button>
              </MotionStack>

              <MotionStack
                my={20}
                shadow="sm"
                padding="lg"
                radius="md"
                w={300}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Stack component="div">
                  <Image
                    src="/card2.png"
                    width={50}
                    height={200}
                    alt="Norway"
                  />
                </Stack>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Clean Clicks, Clear Data</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  Get simple, non-invasive metrics like total click counts for your links. Focus only on performance, with no messy graphs or user tracking required.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Utility & Simplicity
                </Button>
              </MotionStack>

              <MotionStack
                my={20}
                shadow="sm"
                padding="lg"
                radius="md"
                w={300}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Stack component="div">
                  <Image
                    src="/card3.png"
                    width={50}
                    height={200}
                    alt="Norway"
                  />
                </Stack>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>Your Privacy, Our Priority</Text>
                </Group>

                <Text size="sm" c="dimmed">
                  Unlike competitors, we commit to zero-tracking. We don't log user activity, collect personal data, or require any sign-up. Simple shortening, absolute privacy.
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Security & Privacy
                </Button>
              </MotionStack>
            </Grid>
          </Stack>
        </Center>



        {/* Count up cards */}
        <Stack>
        <MotionCenter
          h={'100vh'}
          p={20}
          onViewportEnter={() => setStartCount(true)}
          viewport={{ once: true, amount:0.5 }}
          visibleFrom='sm'
        >
          <Box
            style={{ border: '1px solid gray' }}
            py={30}
            px={50}
            bdrs={5}
            mx={10}
          >
            <Group fz={40}>
              {' '} <Text fz={50} w={80} c={'blueCustom.9'}> {startCount && <CountUp start={0} end={12} duration={4} />}+  </Text> {' '}
              Clients
            </Group>
          </Box>

          <Box
            style={{ border: '1px solid gray' }}
            py={30}
            px={50}
            bdrs={5}
            mx={10}
          >
            <Group fz={40}>
              {' '} <Text fz={50} w={120} c={'blueCustom.9'}> {startCount && <CountUp start={0} end={100} duration={4} />}+</Text> {' '}
              Score
            </Group>
          </Box>

          <Box
            style={{ border: '1px solid gray' }}
            py={30}
            px={50}
            bdrs={5}
            mx={10}
          >
            <Group fz={40}>
              {' '} <Text fz={50} w={135} c={'blueCustom.9'}> {startCount && <CountUp start={0} end={1500} duration={4} />}  </Text> {' '}
              Hours
            </Group>
          </Box>


        </MotionCenter>
        </Stack>


        {/* Count up cards for mobile */}
        <MotionStack
          p={20}
          onViewportEnter={() => setStartCount(true)}
          hiddenFrom='sm'
        >
          <Box
            style={{ border: '1px solid gray' }}
            py={20}
            px={20}
            bdrs={5}
            mx={10}
          >
            <Group fz={30}>
              {' '} <Text fz={35} w={65} c={'blueCustom.9'}> {startCount && <CountUp start={0} end={12} duration={4} />}+  </Text> {' '}
              Clients
            </Group>
          </Box>

          <Box
            style={{ border: '1px solid gray' }}
            py={20}
            px={20}
            bdrs={5}
            mx={10}
          >
            <Group fz={30}>
              {' '} <Text fz={35} w={80} c={'blueCustom.9'}> {startCount && <CountUp start={0} end={100} duration={4} />}+</Text> {' '}
              Score
            </Group>
          </Box>

          <Box
            style={{ border: '1px solid gray' }}
            py={20}
            px={20}
            bdrs={5}
            mx={10}
          >
            <Group fz={30}>
              {' '} <Text fz={35} w={95} c={'blueCustom.9'}> {startCount && <CountUp start={0} end={1500} duration={4} />}  </Text> {' '}
              Hours
            </Group>
          </Box>


        </MotionStack>



 
    </>
  );
}
