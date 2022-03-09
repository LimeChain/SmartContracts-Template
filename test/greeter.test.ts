import {ethers} from 'hardhat';
import {expect} from 'chai';
import {Contract} from "ethers";

describe("Greeter", function () {
	let snapshotId: any;
	let greeter: Contract

	before (async () => {
		const Greeter = await ethers.getContractFactory("Greeter");
		greeter = await Greeter.deploy("Hello, world!");
		await greeter.deployed();
	})

	beforeEach(async function () {
		snapshotId = await ethers.provider.send('evm_snapshot', []);
	});

	afterEach(async function () {
		await ethers.provider.send('evm_revert', [snapshotId]);
	});

	it("Should return the new greeting once it's changed", async function () {
		expect(await greeter.greet()).to.equal("Hello, world!");

		const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

		// wait until the transaction is mined
		await setGreetingTx.wait();

		expect(await greeter.greet()).to.equal("Hola, mundo!");
	});

});
