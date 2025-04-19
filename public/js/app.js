function choose() {
    let action = prompt("Choose an action: sign up, log in, or change password").toLowerCase().trim();
    while (action !== "exit") {
        if (action === 'sign up') {
            signUp();
        } else if (action === "log in") {
            logIn();
        } else if (action === "change password") {
            changPass();
        } else {
            alert("action not found. Retry again.");
            action = prompt("Choose an action: sign up, log in, or change password").toLowerCase().trim()
        }
    }
    exit(choose())
}


// ~ classes 
// ^ userClass
class User {
    static allUsers = []
    constructor(fullName, email, age, pass, money, history,) {
        this.fullName = fullName
        this.email = email
        this.age = age
        this.pass = pass
        this.money = 1000
        this.history = []

        User.allUsers.push(this)
    }
}


// ~ functions
// ^ exit function
function exit(param) {
    if (param == "exit") {
        alert("good bye!")
        choose()
    }
}
// ^ capitalize function
function capitalize(str) {
    return str.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ");
}
// ^ signUp function 
function signUp() {
    let fullName = prompt("Enter your full name").trim()
    //* nameChecker function
    function nameChecker() {
        exit(fullName)
        let regex = /[0-9\-#\)@!$%^&*()_+=\[\]{};:'",<>\./?\\|`~]/
        while (fullName.split(" ").join("").length < 5 || regex.test(fullName)) {
            fullName = prompt("Please provide a valid name with a minimum of 5 characters without special characters")
        }
        return capitalize(fullName)
    }
    fullName = nameChecker();

    let email = prompt("Enter your email").trim().toLowerCase()
    // * emailChecker function 
    function emailChecker() {
        exit(email)

        while (/\s/.test(email) || email.length < 10 || !/@/.test(email) || email.split('@').length !== 2 || User.allUsers.some(e => e.email == email)) {
            exit(email)
            email = prompt("Enter a valid email").trim().toLowerCase()
        }
        return email
    }
    email = emailChecker();
    let age = parseInt(prompt("Enter your age").trim())
    // * ageChecker function
    function ageChecker() {
        exit(age)
        while (isNaN(age) || age < 10 || age > 99) {
            age = parseInt(prompt("Enter a valid age!"))
        }
        return age
    }
    age = ageChecker();
    let pass = prompt("Choose password")
    // * passwordchecker
    function passwordchecker() {
        let regex = /[0-9\-#\)@!$%^&*()_+=\[\]{};:'",<>\./?\\|`~]/
        while (/\s/.test(pass) || !regex.test(pass) || pass.length < 7) {
            while (/\s/.test(pass) || !regex.test(pass)) {
                exit(pass)
                pass = prompt("Oops! The password shouldn't contain spaces and must include at least one special character.")
                    ;
            }
            while (pass.length < 7) {
                exit(pass)
                pass = prompt("Oops! Invalid password. It needs to be at least 7 characters .");
            }
        }

        let confirmationPass = prompt("Confirm your password")
        if (pass !== confirmationPass) {
            exit(confirmationPass)
            confirmationPass = prompt("Oops! the passwords do not match, confirm your password again ")
            if(pass !== confirmationPass){
                alert("Good luck in the next time")
                choose()
            }else{"welcome"}
            choose()
        } else {
            alert("Account created successfully")  
        }  
        return pass
    }

    pass = passwordchecker()
        let user = new User(fullName, email, age, pass);
       User.allUsers.push(user);
      console.table(User.allUsers);
  
logIn()

 
  
}

// ^logIn function
function logIn() {
let email = prompt("Enter you email").trim().toLocaleLowerCase()
exit(email)
let existmail = User.allUsers.find(e=> e.email == email)
 while(!existmail){
    alert("Email not found")
    choose()
 }

 let password = prompt("Enter your password")
 while(password !== existmail.pass){
    alert("The password doesn't match the email . Try again" )
    choose()
 }
alert(`welcome ${existmail.fullName} you have ${existmail.money} in your bank account`)


menu(existmail)

}
// ^ withdraw function
function withdraw (user){
    let withdraw = parseInt(prompt("How much you want withdraw?"))
    if (withdraw <= user.money) {
       user.money -= withdraw
       let date = new Date().toLocaleDateString()
       console.log(`Your withdrawal of ${withdraw}$ is complete. You still have ${user.money} dirhams left.`);
       user.history.push(`${user.fullname} withdrew ${withdraw}$ on ${date}`);
   } else {
       alert(`You have only ${user.money}`);

   }
   }


   
// ^ menu function
function menu(user){
    if(true){
       let menu = ("Choose action : log out, withdraw, deposit, credit, invest, history")
       if (menu == "log out") {
           alert("You have been logged out.");
           choose()
           console.log("User logged out.");
           return;
       } else if (menu == "withdraw") {
           withdraw(user);
       } else if (menu == "deposit") {
           deposit(user);
       } else if (menu == "credit") {
           credit(user);
       } else if (menu === "invest") {
           invest(user);
       } else if (menu == "history") {
           history(user);
       } else {
           alert("Action not found. Retry again.");
           menu()
       }
    }
   }
   
   
   


// ^changing password function
function changPass() {

}




choose()
signUp()
console.log(allUsers);

