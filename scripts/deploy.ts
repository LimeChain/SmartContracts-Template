import hardhat, {ethers} from 'hardhat';

async function deploy() {
	await hardhat.run('compile');

	/**
	 * Deploying Greeter
	 */
	const Greeter = await ethers.getContractFactory("Greeter");
	const greeter = await Greeter.deploy("Hello, Hardhat!");
	await greeter.deployed();

	console.log("Greeter deployed to:", greeter.address);

	/**
	 * Verifying Contracts
	 */
	// console.log('Verifying Greeter on Etherscan...');
	// await hardhat.run('verify:verify', {
	// 	address: greeter.address,
	// 	constructorArguments: []
	// });
}

module.exports = deploy;
