const bcrypt = require("bcryptjs")
hashed_pass = "$2a$05$3pqF8gapjY82H.T4G7LNauba.lObTbsVWsBkAh2jEKl.9kK2l/cHq"

var fs = require('fs');
var text = fs.readFileSync("rockyou.txt", 'utf-8');
var textByLine = text.toString().split('\n')

console.log(textByLine)

for(let i = 0; i< 100000; i++){
    pass = textByLine[i];
    if(bcrypt.compareSync(pass, hashed_pass))
    {
        console.log("Password Found:")
        console.log(pass)
    }
}