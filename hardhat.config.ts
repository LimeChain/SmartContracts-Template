import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-abi-exporter';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import * as config from './config';
import {task} from "hardhat/config";

task('deploy', 'Deploys the Greeter contract')
    .setAction(async () => {
      const deployment = require('./scripts/deploy');
      await deployment();
    });

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.11"
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: config.networks,
  etherscan: config.etherscan,
  abiExporter: {
    only: [],
    except: ['.*Mock$'],
    clear: true,
    flat: true,
  },
  gasReporter: {
    enabled: true,
  }
};