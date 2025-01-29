import { useState, useEffect } from 'react';
import axiosInstance from '@/utils/axiosConfig';
import { useRouter } from 'next/router';
import PatchFullName from './components/PatchFullName';
import PatchEmail from './components/PatchEmail';
import PatchPassword from './components/PatchPassword';

export default function AdminSettingsPage() {

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <PatchFullName />
      <PatchEmail />
      <PatchPassword />
    </div>
  );
}
