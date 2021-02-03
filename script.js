//checking
const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance = 0;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

//savings
const acctBalanceLbl2 = document.getElementById("acctBalanceLbl2");
const deposits2 = [];
const withdrawals2 = [];
let totalBalance2 = 0;
const userDeposit2 = document.getElementById("userDeposit2");
const btnDeposit2 = document.getElementById("btnDeposit2");
const userWithdraw2 = document.getElementById("userWithdraw2");
const btnWithdraw2 = document.getElementById("btnWithdraw2");

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

btnDeposit.addEventListener('click', () => {

    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {
    
        if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit.value = '';
        } else {
        
        deposits.push(Number(userDeposit.value));
        totalBalance += (Number(userDeposit.value));

        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});

btnWithdraw.addEventListener('click', () => {

    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

        if (userWithdraw.value > totalBalance - 5) {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw.value = '';
        } else {

        withdrawals.push(Number(userWithdraw.value));
        totalBalance -= (Number(userWithdraw.value));

        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

btnDeposit2.addEventListener('click', () => {

    if (isNaN(userDeposit2.value)) {
        alert("Please enter a number.");
        return userDeposit2.value = '';
    } else {
    
        if (userDeposit2.value < 0.01 || userDeposit2.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit2.value = '';
        } else {
        
        deposits2.push(Number(userDeposit2.value));
        totalBalance2 += (Number(userDeposit2.value));

        let totalBalanceFormatted2 = formatter.format(totalBalance2);
        document.getElementById("acctBalanceLbl2").innerHTML = totalBalanceFormatted2;

    console.log("$" + userDeposit2.value);
    return userDeposit2.value = '';
    }
}
    
});

btnWithdraw2.addEventListener('click', () => {

    if (isNaN(userWithdraw2.value)) {
        alert("Please enter a number.");
        return userWithdraw2.value = '';
    } else {

        if (userWithdraw2.value > totalBalance2 - 5) {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw2.value = '';
        } else {

        withdrawals2.push(Number(userWithdraw2.value));
        totalBalance2 -= (Number(userWithdraw2.value));

        let totalBalanceFormatted2 = formatter.format(totalBalance2);
        document.getElementById("acctBalanceLbl2").innerHTML = totalBalanceFormatted2;

    console.log("$" + userWithdraw2.value);
    return userWithdraw2.value = '';
    }
}
});

let totalBalanceFormatted2 = formatter.format(totalBalance2);
document.getElementById("acctBalanceLbl2").innerHTML = totalBalanceFormatted2;