import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const conn = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('3SvJSq4GLJmFhjKo31cHS4TH7VQBGypU6K9mTies7bTZ');
const balance = await conn.getBalance(address);

console.log(`balance at ${address} is ${balance} lamports`);
console.log(`:;`);
