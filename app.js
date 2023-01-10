"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherDecipher_1 = require("./CipherDecipher");
const minCode = ' '.charCodeAt(0);
const maxCode = '~'.charCodeAt(0);
const SHIFT = 3;
const cipDecip = new CipherDecipher_1.CipherDecipher(minCode, maxCode, maxCode - minCode + 1, SHIFT);
function testCipherDecipher(data, testName) {
    console.log(`${'*'.repeat(10)}${testName}${'*'.repeat(10)}`);
    if (testName === "cipherTest") {
        data.forEach(obj => console.log(`str = ${obj.str} --> ${cipDecip.cipher(obj.str)}`));
    }
    else {
        data.forEach(obj => console.log(`str = ${obj.str} --> ${cipDecip.decipher(obj.str)}`));
    }
}
const dataForTestCipher = [{ str: "abc" }, { str: "def" }];
testCipherDecipher(dataForTestCipher, "cipherTest");
const dataForTestDecipher = [{ str: "def" }, { str: "ghi" }];
testCipherDecipher(dataForTestDecipher, "decipherTest");
//# sourceMappingURL=app.js.map