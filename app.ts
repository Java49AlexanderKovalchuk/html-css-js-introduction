import { CipherDecipher } from "./CipherDecipher";
const minCode: number = ' '.charCodeAt(0);
const maxCode: number = '~'.charCodeAt(0);
const SHIFT: number = 3;

const cipDecip = new CipherDecipher(minCode, maxCode, maxCode - minCode + 1, SHIFT);

type TestObj = {
    str: string
}

function testCipherDecipher(data: Array<TestObj>, testName: string): void {
    console.log(`${'*'.repeat(10)}${testName}${'*'.repeat(10)}`);
    if(testName === "cipherTest") {
        data.forEach(obj => console.log(`str = ${obj.str} --> ${cipDecip.cipher(obj.str)}`));
    }
    else {
        data.forEach(obj => console.log(`str = ${obj.str} --> ${cipDecip.decipher(obj.str)}`));
    }
}

const dataForTestCipher: Array<TestObj> = [{str: "abc"}, {str: "def"}];
testCipherDecipher(dataForTestCipher, "cipherTest");
const dataForTestDecipher: Array<TestObj> = [{str: "def"}, {str: "ghi"}];
testCipherDecipher(dataForTestDecipher, "decipherTest");
