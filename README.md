<div align="center">

# Project Name

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![UnitTests](https://github.com/LimeChain/SmartContracts-Template/actions/workflows/unit-tests.yaml/badge.svg?branch=main)](https://github.com/LimeChain/SmartContracts-Template/actions/workflows/unit-tests.yaml)

</div>

This project is a template project consisting of:
- Hardhat setup + usage of hardhat `tasks`
- Typescript support
- GitHub actions for running compilation and tests 
- npm scripts for `compilation`, `tests`, `gas reporting` and `coverage`
- Running `slither` static analyser

## Setup

1. Create repository from this template
2. `git clone`
3. `cp config.sample.ts config.ts`
4. `npm install`
5. After the first GitHub Actions run, update the Unit Tests badge (currently points to the Template repository)

**Note**

Sensitive information such as deployment PKs are part of the `config.ts` file which is git ignored. 

## Scripts

**Compiling**

`npx hardhat compile`

**Running Unit Tests**

`npm run test` or `npx hardhat test`

By default `gas reporter` is turned on. You will see summary of the `min`, `max` and `avg` gas consumptions.

**Running Tests with Coverage**

`npm run coverage` or `npx hardhat coverage --solcoverjs .solcover.ts`

**Running Slither**

`npm run slither` or `slither .`

You must have slither installed. You can do that by executing `pip3 install slither-analyzer`

**Deployment**

`npx hardhat deploy`