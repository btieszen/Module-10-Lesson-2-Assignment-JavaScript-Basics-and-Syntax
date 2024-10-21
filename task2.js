const deposit = 0;
const withdraw = 500;
const balance = 2000;

let x = deposit;
let y = withdraw;
let a = balance;

let sum =(x+a);
let difference=(a-y);
let account=(x+a-y)
console.log('')
console.log('Welcome to your banking')


if (deposit >0,withdraw <=0){
    console.log("Your deposit amount was:",x);
    console.log("Your balance is: ",sum);

}else
    if (withdraw >0,deposit<=0){
        console.log("Your withdraw amount was:",y);
        console.log("Your balance is: ",difference);
    
}else
        if (withdraw >0, deposit >0){
            console.log("You deposited and withdrew");
            console.log("Your balance is: ",account);
        
}else{

    console.log("Your balance is: ",account);
}

