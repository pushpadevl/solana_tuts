import { mintTo } from "@solana/spl-token";
import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

// Our token has two decimal places
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const user = getKeypairFromEnvironment("SECRET_KEY");

// Subtitute in your token mint account from create-token-mint.ts
const tokenMintAccount = new PublicKey(
  "8Gvo2M8N1PpqySxD7i7dXHsaqPVkVy4fdEmUV8caFyrB"
);

// Substitute in your own, or a friend's token account address, based on the previous step.
const recipientAssociatedTokenAccount = new PublicKey(
  "3Br9kztMTZrwerjtA5GiPFbAUz6UXBSWswD4pnLNjG6s"
); // no need to remember this, the create token account will always give the same ATA

const transactionSignature = await mintTo(
  connection,
  user,
  tokenMintAccount,
  recipientAssociatedTokenAccount,
  user,
  7 * MINOR_UNITS_PER_MAJOR_UNITS
);

const link = getExplorerLink("transaction", transactionSignature, "devnet");

console.log(`✅ Success! Mint Token Transaction: ${link}`);