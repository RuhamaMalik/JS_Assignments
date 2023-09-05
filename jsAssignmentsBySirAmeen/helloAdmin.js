//////// 30 Hello Admin

/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/

let userNames = ['Ruhama Gull', 'Shah Fahad', 'Irma Narmeen', 'Laiba Noor','admin', 'Rimsha meo', 'Nazia Shah'];

for( let i = 0; i < userNames.length; i++){
 
 if(userNames[i] === 'admin'){
   console.log('Hello admin, would you like to see a status report?');
 }else{
     console.log(`Hello ${userNames[i]}, thank you for logging in again!`);

 }
}

///////// 31 No users

/* 
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let user_names = [];

if(user_names.length !== 0){
for (let i = 0; i < user_names.length; i++) {

  if (user_names[i] === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${user_names[i]}, thank you for logging in again!`);

  }
}}else{
  console.log(`We need to find some users!`)
}



