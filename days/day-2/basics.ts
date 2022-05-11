function types(num: number, str: string, bool: boolean) {
    console.log(`${num} is a ${typeof num}, ${str} is a ${typeof str} and ${bool} is a ${typeof bool}`);
    
}

const number = 4;
const string = 'a';
const boolean = true;

types(number, string, boolean);