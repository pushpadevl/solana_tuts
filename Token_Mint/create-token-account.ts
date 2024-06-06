import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
);

// Subtitute in your token mint account from create-token-mint.ts
const tokenMintAccount = new PublicKey(
  "8Gvo2M8N1PpqySxD7i7dXHsaqPVkVy4fdEmUV8caFyrB"
);

// Here we are making an associated token account for our own address, but we can 
// make an ATA on any other wallet in devnet!
const recipient = new PublicKey("3SvJSq4GLJmFhjKo31cHS4TH7VQBGypU6K9mTies7bTZ");
//creating a token account for the above user using mint Solana TRAINING
//const recipient = user.publicKey;

const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  user,
  tokenMintAccount,
  recipient
);
//user and recipient are same

console.log(`Token Account: ${tokenAccount.address.toBase58()}`);

const link = getExplorerLink(
  "address",
  tokenAccount.address.toBase58(),
  "devnet"
);

console.log(`✅ Created token Account: ${link}`);