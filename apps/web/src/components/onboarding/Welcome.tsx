'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* <div className="mb-6">
        <img
          src="/path/to/backpack-icon.png" // replace with the actual path to your icon
          alt="Backpack Icon"
          className="h-20 w-20"
        />
      </div> */}
      <h1 className="text-3xl font-bold mb-2">Welcome to ShinWallet</h1>
      <p className="mb-8">Let's get started.</p>
      <button
        className="bg-white text-black px-6 py-3 rounded-full mb-4 hover:bg-gray-200"
        onClick={() => router.push('/onboarding/eth/create-account')}
      >
        Create a new wallet
      </button>
      <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600">
        Import Wallet
      </button>
    </div>
  );
};

export default WelcomeScreen;
