//random password generator

const passwordLength = 16;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharacters = "0123456789";
    const symbolCharacters = "!@#$%&*";

    let allowedCharacters = "";
    let password = "";

    allowedCharacters += includeLowercase ? lowercaseCharacters : "";
    allowedCharacters += includeUppercase ? uppercaseCharacters : "";
    allowedCharacters += includeNumbers ? numberCharacters : "";
    allowedCharacters += includeSymbols ? symbolCharacters : "";

    if (length <= 0) {
        return `Password length must be at least 1`;
    }
    if (allowedCharacters.length === 0) {
        return `At least 1 set of characters need to be selected`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);

        password += allowedCharacters[randomIndex];
    }

    return password;

};

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);