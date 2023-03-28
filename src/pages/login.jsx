import React from 'react';
import { accessUrl } from '../config';

export default function login() {
  return (
    <div className='py-10 text-center'>
      <h1 className='mb-1 text-4xl font-bold'>
        Welcome to Vixi's Spotify clone!
      </h1>
      <p className='mb-10 text-text-dimmed'>Sign in to start using the app</p>
      <a
        href={accessUrl}
        className='rounded-md bg-primary py-1 px-5 text-lg font-semibold'
      >
        Sign in
      </a>
    </div>
  );
}
