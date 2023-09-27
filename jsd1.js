const account_id = 11223
let account_email = "mandilthapamagar@gmail.com"
var account_password = "123456"
account_city = "Koteshwor" // try not to do this
let account_state // value is undefined
// // account_id = 5  Error const cant be redefined

account_email = "Khushboothapa@gmail.com"
account_password = "454545"
account_city = "Baneshwor"

console.table([account_id,account_email,account_password,account_city,account_state])

/*
prefer not to use var because it has issue in block scope in functional block
*/