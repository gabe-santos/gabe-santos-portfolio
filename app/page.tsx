'use client';

import Image from 'next/image';
import Page from '../components/Page';
import { name, avatar, about, bio } from '../lib/info';

export const revalidate = 60;

import React, { useState } from 'react';

export default function HomePage() {
  return (
    <Page title={name}>
      {about()}
      <Image
        alt={name}
        className='my-5 rounded-full grayscale'
        src={avatar}
        placeholder='blur'
        width={128}
        priority
      />
      {bio()}
    </Page>
  );
}
