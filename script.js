document.addEventListener("DOMContentLoaded", main);

function main () {
    let month = 24
    let bet = 20
    let creditValue = 5000000

    let monthlyPayments = annuityPayments(month, bet, creditValue)
    printResult(month, bet, creditValue, monthlyPayments)
}

//Расчет аннуитетных платежей
function annuityPayments(month, bet, creditValue) {
    let monthlyPayments = [];                                                       //Массив объектов для хранения графика платежей
    let monthBet = bet / 12 / 100                                                   //Расчет месячной ставки (МС)
    let payment = (creditValue * (monthBet / ( 1 - ((1 + monthBet) ** -month ))))   //Расчет ежемесячного платежа (П)
    let principal = 0                                                               //переменная для основного долга
    let interest = 0                                                                //переменная для працентов

    for (let i = 0; i < month; i++) {
        principal = payment - (creditValue * monthBet)                              //Расчет основного платежа
        interest = creditValue * monthBet                                           //Расчет процентов
        creditValue -= principal                                                    //Расчет суммы остатка кредита

        //Заполнение массива
        monthlyPayments[i] = {
            month: (i+1).toString(),
            payment: payment.toFixed(2).toString(),
            principal: principal.toFixed(2).toString(),
            interest: interest.toFixed(2).toString(),
            balance: creditValue.toFixed(2).toString(),
        };
    }

    console.log(monthlyPayments)
    return monthlyPayments;
}

//Вывод графика платежей в консоль
function printResult(month, bet, creditValue, monthlyPayments) {
    console.log("Сумма кредита:", creditValue)
    console.log("Ставка:", bet)
    console.log("Срок:", month)
    console.log("| Месяц | Ежемесячный платеж | Основной долг | Долг по процентам | Остаток осн. долга |")


    for (let i = 0; i < monthlyPayments.length; i++){
        console.log("|  ",monthlyPayments[i].month,"  |     ",monthlyPayments[i].payment,"      |   ",monthlyPayments[i].principal,
            "   |     ",monthlyPayments[i].interest,"      |     ",monthlyPayments[i].balance,"     |")
    }
}