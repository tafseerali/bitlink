'use client'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandWebflow, IconBrandWeibo, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import classes from '../FooterCentered.module.css';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/contact', label: 'Contact' },
  { link: '/about', label: 'About' },
  { link: '/shorten', label: 'Shorten' },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div style={{border: 'lightgray 1px solid'}} className={classes.footer}>
      <div className={classes.inner}>
        <Image width={30} height={30} alt='Url shortner' src={'/logo.png'} size={28} />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <Link target='_blank' href={'https://www.facebook.com/profile.php?id=61571870342328'}><IconBrandFacebook size={18} stroke={1.5} /></Link>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Link target='_blank' href={'https://www.youtube.com/@MindfulExplainer'}><IconBrandYoutube size={18} stroke={1.5} /></Link>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Link target='_blank' href={'https://www.linkedin.com/in/tafseerali/'}><IconBrandLinkedin size={18} stroke={1.5} /></Link>
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}