import { utils, Wallet } from 'ethers';

export const useMnemonic = () => {
  const wallet = Wallet.fromMnemonic(
    utils.entropyToMnemonic(utils.randomBytes(16))
  );

  const address = wallet.address;
  const mnemonic = wallet.mnemonic.phrase;
  const privateKey = wallet.privateKey;

  return { address, mnemonic, privateKey };
};
