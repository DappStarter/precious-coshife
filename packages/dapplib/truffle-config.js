require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain hospital inflict drive flower skirt'; 
let testAccounts = [
"0x0c0b208399b8c88ed4351a556331d4e08a60513b1b2e06e05fcbf93cd8ff73bc",
"0x1f4985f9060847e64d97ff0e0b33e55451712210cebc8f469cbc15402ebbb80f",
"0xdc59532ae82225c751b03d4c362dded697012a8069d381d330df26f1f1281f1a",
"0xc8be44712d36bcc74a47c935ce8c14243948fe97662b8ea0f81148a8e41aa8b9",
"0xa1b5b79dc6738328942d96cafcacf2cf1ebafa21feb2a64a08200de4724af683",
"0xf20ce253940633768086ef57938789b90274f27447c918d97aa4276f744a19cf",
"0x4facb0b537a0227ac43fcad8dedada9c1f85bf664ad0d17b304d05106c85fd48",
"0x1ebe657d72346bd782601d7e078028dd6708ad938e4aebbcfcf6d6cbdcd5333f",
"0xa9597be56f896bbaa9489f8311ebe529b9bfe149200d0612c86055c73ef91038",
"0x8143c24e54d54d80ca1d38a1d9bbfc7d6b46b49138f2f6ea1de0efb747c85e66"
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
