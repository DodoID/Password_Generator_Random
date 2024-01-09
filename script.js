// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options and return an array of selected characters

function getPasswordOptions() {
  var length = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));


// Check if the input is a valid number between 8 and 128 characters
if (isNaN(length) || length < 8 || length > 128) {
  alert("Wrong answer, enter a valid length between 8 and 128 characters.");
  
  // Exit the function if the input is invalid or outside the range

  return null; 
}
// Options for  password length and character types and confirmation prompt for each option
var includeSpecialChars = confirm("Do you want special characters?");
var includeNumbers = confirm("Do you want numbers?");
var includeLowercase = confirm("Do you want lowercase letters?");
var includeUppercase = confirm("Do you want uppercase letters?");

// Check if at least one character type is selected 
if (!includeSpecialChars && !includeNumbers && !includeLowercase && !includeUppercase) {
  alert("Need to select at least one character type please.");


  // Exit the function if no character type is selected 
  return null; 
}

// Create an object to store user options and return it
var passwordOptions = {
  length: length,
  specialChars: includeSpecialChars,
  numbers: includeNumbers,
  lowercase: includeLowercase,
  uppercase: includeUppercase
};

return passwordOptions;
}

// Function for getting a random element from an array  and return it
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];
}


// Function to generate password with user input and return it
function generatePassword() {
var options = getPasswordOptions();

// Return an empty string if no options are selected or if the user inputs an invalid number

if (!options) return ""; 


// Initialize an empty array to store possible characters to be included in the password
var possibleChars = [];

// Add selected character types to the possible characters array based on user input and return it
if (options.specialChars) possibleChars = possibleChars.concat(specialCharacters);
if (options.numbers) possibleChars = possibleChars.concat(numericCharacters);
if (options.lowercase) possibleChars = possibleChars.concat(lowerCasedCharacters);
if (options.uppercase) possibleChars = possibleChars.concat(upperCasedCharacters);

// Initialize an empty password string to store the generated password and return it
var password = "";

// Generate the password based on user-specified length and character types and return it
for (var i = 0; i < options.length; i++) {
  var randomChar = getRandom(possibleChars);
  password += randomChar;
}

return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);

// Write password to the #password input  
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);