import bcrytp from "bcrypt";

const saltRounds = 12;
const plainTextPassword = "Napster";
const incorrectPassword = "superSecretPassword";
const hashedPassword = ""; // insert a hashed pw.


/* signup, login, logout */

bcrytp.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});

// false value
bcrytp.compare(incorrectPassword, hashedPassword, (err, result) => {
    console.log("Is the password correct?", result);
});

// true => since the hashed password is going to be hashed with the hashedpassword
bcrytp.compare(plainTextPassword, hashedPassword, (err, result) => {
    console.log("Is the password correct?", result);
});

export default {}