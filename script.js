/*jshint esversion: 6 */
// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt('Во сколько обойдется', '');
//     console.log('done');
//     appData.expenses[a] = b;
//     i++;
// }
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt('Во сколько обойдется', '');
//     console.log('done');
//     appData.expenses[a] = b;
//     i++;
// }
// while(i < 2)


let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

const appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt('Во сколько обойдется', '');

            if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }

        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        return alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let optExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i+1] = optExpenses;                   //i+1 for start counting from 1 and not from 0
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        for(let i = 0; i < 1; i++){
            let items = prompt('Что принесет дорольнительный доход?(Перечислите через зяпятую)', '');
            if (typeof(items) === 'string' && typeof(items) != null && items != '') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
                appData.income.forEach((item, index) => {
                    return console.log("Способы доп. заработка: " + (index + 1) + ': ' + item);
                });
            } else {
                i = i - 1;
            }
        }
    }
};
for(let key in appData){
    console.log("Наша программа включает в себя данные: " + key);
}