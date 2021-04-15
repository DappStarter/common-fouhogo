require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rebel saddle public hunt derive slot general'; 
let testAccounts = [
"0x42b399793357e9c490d7cb9f3166ced90d4cd32ed93c8e0bd913653fd29ec830",
"0xfa13549a420ce82b0f7bc2df1b0a8834596a950303a09a34a278214bf10f5290",
"0x185e7eefab5590876a884da1eb8a53fbf21dcaa5073f51f408c8018e7225ef02",
"0xd989cb25409585016759ea7a29e90642fbd35d5c84092146d49117b3fe421e66",
"0x1a5fcc660aee340ed4c3b3f55bb9133aab191c35094560c494de674e90ed9e80",
"0x6b1a4c1280d7257f6ca659a4db3e8a54abed6cd6e9c0c6a90774de755871ff2f",
"0xa3343c769967da0e0bcf571343dffa80a56f48679fcaf46c84e1436ece9a9af5",
"0x0cf819ea4de85678cfb5b4fb22b5787f9644cf2886435ba7462069b811657820",
"0xbd1d38a395b011aef9cd7430c061ce9098a8e4404dc4d8e3b864e6242835cfd5",
"0xcfcac16f1f554f05eb1649d08e5e6c53126e4693a17fea5c4761be79e125155d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
