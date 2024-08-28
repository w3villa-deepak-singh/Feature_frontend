'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import UserProfileForm from '../component/UserProfileForm';

export default function User() {

  

  return (
    //   <h1>user</h1>
    <UserProfileForm />
  );
}
