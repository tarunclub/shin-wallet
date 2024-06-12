import crypto from 'crypto';

export function encryptPrivateKey(privateKey: string, password: string) {
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(password, 'salt', 32);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

  let encrypted = cipher.update(privateKey, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const tag = cipher.getAuthTag().toString('hex');

  return {
    iv: iv.toString('hex'),
    encrypted,
    tag,
  };
}
