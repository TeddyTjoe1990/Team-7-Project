// generateKeys.js

const fs = require('fs');
const crypto = require('crypto');

// Generate keys
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

// Store keys securely (e.g., in environment variables, files)
fs.writeFileSync('./keys/public.pem', publicKey);
fs.writeFileSync('./keys/private.pem', privateKey);
