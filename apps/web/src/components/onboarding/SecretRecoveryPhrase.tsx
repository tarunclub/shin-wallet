'use client';

import { useMnemonic } from '@/lib/hooks/eth/useMnemonic';

const SecretRecoveryPhrase = () => {
  const { mnemonic } = useMnemonic();

  const words = mnemonic.split(' ');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Secret Recovery Phrase</h1>
      <p className="mb-2">Save these words in a safe place.</p>
      <a href="#" className="text-blue-500 mb-4">
        Read the warnings again
      </a>
      <div className="grid grid-cols-3 gap-4 bg-gray-800 p-4 rounded-lg mb-4">
        {words.map((word, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-700 p-2 rounded-md"
          >
            <span className="mr-2 font-semibold">{index + 1}</span> {word}
          </div>
        ))}
      </div>
      <button
        className="mb-4 px-4 py-2 border-2 border-gray-700 rounded-lg hover:bg-gray-700"
        onClick={() => navigator.clipboard.writeText(words.join(' '))}
      >
        Copy to clipboard
      </button>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="save-phrase" className="mr-2" />
        <label htmlFor="save-phrase" className="select-none">
          I saved my secret recovery phrase
        </label>
      </div>
      <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
        Next
      </button>
    </div>
  );
};

export default SecretRecoveryPhrase;
