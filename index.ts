import  inquirer from "inquirer";

interface  Bankaccount {
    Firstname : string;
    Lastname : string;
    Age : number;
    Gender : string;
    Phone : number;
    Deposit : number;
    Account : number;

}

class Bankaccount implements  Bankaccount {
     Firstname : string;
    Lastname : string;
    Age : number;
    Gender : string;
    Phone : number;
    Deposit : number;
    Account : number;

    constructor( Firstname : string,
    Lastname : string,
    Age : number,
    Gender : string,
    Phone : number, Deposit : number,Account : number,) {
        this.Firstname = Firstname
        this.Lastname = Lastname
        this.Age = Age
        this.Gender = Gender
        this.Phone = Phone
        this.Deposit = Deposit
        this.Account = Account


    }
    Check_Balance () {
        console.log (`Your current Balance is $${this.Deposit}`)
    }

    Deposit_Amount(amount : number) { if ( amount >= 100){
        this.Deposit -= 1
        this.Deposit += amount
        console.log (`Your Remaining Balance is $${this.Deposit}`)
    }
    }
    Withdraw(amount : number) { if (amount < this.Deposit) {
        this.Deposit -= amount
         console.log (`Your Remaining Balance is $${this.Deposit}`)
    }else {
        console.log (" Insufficent  Balance")
    }}
}
let customers : Bankaccount[] = []
     let accountnumber = 1100




async  function service () {
    do {
    let userInput = await  inquirer.prompt(
    [{
        name: "createA",
        type: "list",
        message: " Please Select option",
        choices: ["Create a new Account", "You have already an account","Exit"]
    }])
    if (userInput.createA == "Create a new Account") {
        let newAccount = await inquirer.prompt([{
            name: "Firstname",
            type: "string",
            message: "Enter your Firstname"
        }, {
            name: "Lastname",
            type: "string",
            message: "Enter your lastname"
        }, {
            name: "Age",
            type: "number",
            message: "Enter your Age"
        }, {
            name: "Gender",
            type: "string",
            message: "You are Male/Female"
        }, {
            name: "Phone",
            type: "number",
            message: "Enter your phone number"
        }, {
            name: "Deposit",
            type: "number",
            message: "Deposit money"
        }])


         accountnumber += 1

        let transform = customers.push(new Bankaccount(newAccount.Firstname,newAccount.Lastname,newAccount.Age,newAccount.Gender,newAccount.Phone,newAccount.Deposit,accountnumber))
        let Accountt = customers.find(cust => cust.Account == cust.Account)
        if (Accountt){
        console.log(`Mr.${newAccount.Firstname}.${newAccount.Lastname}, your Account number is  ${accountnumber}`)
        }

          let userano = await inquirer.prompt({
            name : "useraccount",
            type : "number",
            message : "Enter Your Account number",
        })


        let cus = customers.find(cus => cus.Account == userano.useraccount)

        if ( cus){
            console.log (`Wellcome Mr.${cus.Firstname},${cus.Lastname}`)
            let user = await inquirer.prompt({
                name : "usermind",
                type : "list",
                message : "Would you like",
                choices : ["Deposit","Withdraw","Check Balance","Check My Account","Exit"]
            })
            if (user.usermind == "Deposit" ) {
                           let depositamount = await inquirer.prompt ({
        name: "amount",
        type: "number",
        message: "Enter the amount to deposit"
    })

               cus.Deposit_Amount(depositamount.amount)

            }
            else if (user.usermind == "Withdraw" ) {
                            let withdrawamount = await inquirer.prompt ({
                                name: "amount",
                                type: "number",
                                message: "Enter the amount to Withdraw"
                            })

                cus.Withdraw(withdrawamount.amount)

            }
            else if (user.usermind == "Check Balance"){

                    cus.Check_Balance()

            }else if (user.usermind === "Check My Account"){
                console.log(`Name , ${cus.Firstname}. ${cus.Lastname} \n Age , ${cus.Age}\n Gender , ${cus.Gender} \n Phone Number , ${cus.Phone}\n  Balance , ${cus.Deposit}`)
            }
            else {
                console.log(` Thank you for using our Bank Service`)
                return
            }
        }else {
            console.log(" Please enter valid Account number")
             let userano = await inquirer.prompt({
            name : "useraccount",
            type : "number",
            message : "Enter Your Account number",
        })

        let cus = customers.find(cus => cus.Account == userano.useraccount)
        if (cus){
            console.log (`Wellcome Mr.${cus.Firstname},${cus.Lastname}`)
            let user = await inquirer.prompt({
                name : "usermind",
                type : "list",
                message : "Would you like",
                choices : ["Deposit","Withdraw","Check Balance","Check My Account","Exit"]
            })
            if (user.usermind == "Deposit" ) {
                           let depositamount = await inquirer.prompt ({
        name: "amount",
        type: "number",
        message: "Enter the amount to deposit"
    })

               cus.Deposit_Amount(depositamount.amount)

            }
            else if (user.usermind == "Withdraw" ) {
                            let withdrawamount = await inquirer.prompt ({
                                name: "amount",
                                type: "number",
                                message: "Enter the amount to Withdraw"
                            })

                cus.Withdraw(withdrawamount.amount)

            }
            else if (user.usermind == "Check Balance"){

                    cus.Check_Balance()

                 }else if (user.usermind === "Check My Account"){
                console.log(`Name , ${cus.Firstname}. ${cus.Lastname} \n Age , ${cus.Age}\n Gender , ${cus.Gender} \n Phone Number , ${cus.Phone}\n  Balance , ${cus.Deposit}`)

            }else {
                console.log(` Thank you for using our Bank Service`)
                return
            }



        }}

            }else  if(userInput.createA === "You have already an account" ){
            let Accountnumber = await inquirer.prompt({
                name : "account",
                type : "number",
                message : "Enter your account number :"
            })
        let cus = customers.find(cus => cus.Account == Accountnumber.account)
        if  (cus){
                console.log (`Wellcome Mr.${cus.Firstname},${cus.Lastname}`)
                 let user = await inquirer.prompt({
                name : "usermind",
                type : "list",
                message : "Would you like",
                choices : ["Deposit","Withdraw","Check Balance","Check My Account","Exit"]
            })
            if (user.usermind == "Deposit" ) {
                           let depositamount = await inquirer.prompt ({
              name: "amount",
              type: "number",
               message: "Enter the amount to deposit"
             })

                cus.Deposit_Amount(depositamount.amount)
            }
            else if (user.usermind == "Withdraw" ) {
                            let withdrawamount = await inquirer.prompt ({
                                name: "amount",
                                type: "number",
                                message: "Enter the amount to Withdraw"
                            })

                cus.Withdraw(withdrawamount.amount)

            }
            else if (user.usermind == "Check Balance"){

                    cus.Check_Balance()
}else if (user.usermind === "Check My Account"){
                console.log(`Name , ${cus.Firstname}. ${cus.Lastname} \n Age , ${cus.Age}\n Gender , ${cus.Gender} \n Phone Number , ${cus.Phone}\n  Balance , ${cus.Deposit}`)

            }else {
                console.log (` Thank you for using our Bank Service`)
                return
            }
        }else {
                   console.log(" Please enter valid Account number")
             let userano = await inquirer.prompt({
            name : "useraccount",
            type : "number",
            message : "Enter Your Account number",
            })

        let cus = customers.find(cus => cus.Account == userano.useraccount)
        if (cus) {
            console.log (`Wellcome Mr.${cus.Firstname},${cus.Lastname}`)
            let user = await inquirer.prompt ({
                name: "usermind",
                type: "list",
                message: "Would you like",
                choices: ["Deposit", "Withdraw", "Check Balance", "Check My Account", "Exit"]
            })
            if (user.usermind == "Deposit") {
                let depositamount = await inquirer.prompt ({
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to deposit"
                })

                cus.Deposit_Amount (depositamount.amount)

            } else if (user.usermind == "Withdraw") {
                let withdrawamount = await inquirer.prompt ({
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to Withdraw"
                })

                cus.Withdraw (withdrawamount.amount)

            } else if (user.usermind == "Check Balance") {

                cus.Check_Balance ()

            } else if (user.usermind === "Check My Account") {
                console.log (`Name , ${cus.Firstname}. ${cus.Lastname} \n Age , ${cus.Age}\n Gender , ${cus.Gender} \n Phone Number , ${cus.Phone}\n  Balance , ${cus.Deposit}`)

            } else {
                console.log (` Thank you for using our Bank Service`)
                return
            }

        }}

            }else {
        console.log(" Thank You for Using Our bank Service")
        return
    }


} while (true)
}
service()