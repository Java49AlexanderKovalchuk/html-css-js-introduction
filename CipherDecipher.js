"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(leastAsciiCode, mostAsciiCode, amountSymbols, shift) {
        this.leastAsciiCode = leastAsciiCode;
        this.mostAsciiCode = mostAsciiCode;
        this.amountSymbols = amountSymbols;
        this.shift = shift;
    }
    cipher(str) {
        const arStr = str.split('');
        return arStr.map(symb => this.mapperCipher(symb)).join('');
    }
    decipher(str) {
        const arStr = str.split('');
        return arStr.map(symb => this.mapperDecipher(symb)).join('');
    }
    mapperCipher(symb) {
        const actualShift = (symb.charCodeAt(0) - this.leastAsciiCode + this.shift) % this.amountSymbols;
        return String.fromCharCode(actualShift + this.leastAsciiCode);
    }
    mapperDecipher(symb) {
        const actualShift = (this.mostAsciiCode - symb.charCodeAt(0) + this.shift) % this.amountSymbols;
        return String.fromCharCode(this.mostAsciiCode - actualShift);
    }
}
exports.CipherDecipher = CipherDecipher;
//# sourceMappingURL=CipherDecipher.js.map