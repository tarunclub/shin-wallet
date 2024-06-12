'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const CreateAccount = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
      <p className="mb-8">Let's get started.</p>
      <input
        type="text"
        placeholder="Enter your username"
        className="bg-gray-800 text-white px-6 py-3 rounded-full mb-4 hover:bg-gray-700"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="bg-gray-800 text-white px-6 py-3 rounded-full mb-4 hover:bg-gray-700"
      />

      <button
        className="bg-white text-black px-6 py-3 rounded-full mb-4 hover:bg-gray-200"
        onClick={() => router.push('/onboarding/eth/secret-recovery-phrase')}
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount;
