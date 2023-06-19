/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');


const privateKey = '';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},
      nautilusTestnet: {
         url: 'https://triton.api.nautchain.xyz',
         accounts: [privateKey],
         chainId: 91002,
         network_id: '91002',
      },
      ThunderCoreTestnet: {
         url: 'https://testnet-rpc.thundercore.com',
         accounts: [privateKey],
         chainId: 18,
         network_id: '18',
      }
   },
   solidity: {
      compilers: [
         {
            version: '0.8.18',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
