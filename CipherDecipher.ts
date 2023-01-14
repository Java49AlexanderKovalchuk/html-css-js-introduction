export class CipherDecipher {
    
    private amountSymbols: number;
    
    constructor(private leastAsciiCode: number, private mostAsciiCode: number,
        private shift: number) {
        this.amountSymbols = this.mostAsciiCode - this.leastAsciiCode + 1;
    }

    cipher(str: string): string {
        const arStr: Array<string> = str.split('');
        return arStr.map(symb => this.mapperCipher(symb)).join('');
    }
    decipher(str: string): string {
        const arStr: Array<string> = str.split('');
        return arStr.map(symb => this.mapperDecipher(symb)).join('');
    }
    
    mapperCipher(symb: string): string {
        const actualShift: number = (symb.charCodeAt(0) - this.leastAsciiCode + this.shift) % this.amountSymbols;
        return String.fromCharCode(actualShift + this.leastAsciiCode);
    }
    mapperDecipher(symb: string): string {
        const actualShift: number = (this.mostAsciiCode - symb.charCodeAt(0) + this.shift) % this.amountSymbols;
        return String.fromCharCode(this.mostAsciiCode - actualShift);
    }
}

