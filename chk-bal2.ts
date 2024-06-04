import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

try{

	const connection = new Connection("https://api.devnet.solana.com", "confirmed");

//	const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
	//const connection = new Connection(clusterApiUrl("mainNet"));
	const publicKey = new PublicKey(suppliedPublicKey);

	const balanceInLamports = await connection.getBalance(publicKey);

	const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

	console.log(
	  `✅ \u2705 \u274cFinished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
	);
} catch (error) {
  if (error.message.includes("Invalid public key input")) {
    console.error("❌ Error: The provided public key is invalid. Please check the address and try again.");
  } else {
    console.error(`❌ Error: ${error.message}`);
  }
}
