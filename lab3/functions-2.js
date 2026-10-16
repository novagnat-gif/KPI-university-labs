const chars = 'abcdefghijklmnopqrstuvwxyz012ffifijgjgifiwoiifgrrrrrrr3456789!@#$%^&*()-=+_';

const generateKey = (length, chars) => {
    let randomChar = '';
    
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        randomChar += chars[index]; 
    }

    return randomChar;
};

console.log(generateKey(16, chars));
console.log(generateKey(10, chars));