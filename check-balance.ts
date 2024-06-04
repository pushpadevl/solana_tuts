import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const conn = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');
const balance = await conn.getBalance(address);

console.log(`balance at ${address} is ${balance} lamports`);
console.log(`:;`);
