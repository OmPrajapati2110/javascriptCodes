const accountId = 123456
let accountEmail = "omprajapati2108@gmail.com"
var pasword = "21102002"
accountCity = "Mumbai"
let accountState;

/*
Never use Var keyword becuase of issues in Block Scope and Functional Scope and avoid defining a variable without a keyword
*/

// accountId = 22550
accountEmail = "op@op.com"
pasword = "212121"
accountCity = "Bengaluru"

// console.log(accountId);
console.log(accountEmail);
console.log(pasword);
console.log(accountCity);

// OR

console.table([accountEmail, accountId, accountCity, pasword, accountState])