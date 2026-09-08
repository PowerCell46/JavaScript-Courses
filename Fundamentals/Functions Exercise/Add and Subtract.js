function addAndSubstract(num1, num2, num3) {
    
    function sum(num1, num2) {
    let sumOfTheFirstTwo = num1 + num2;
    return sumOfTheFirstTwo;
    } 

    function substract(summ, num3) {
    let substractionOfTheNums = summ - num3;
    return substractionOfTheNums;
    }

    let summ = sum(num1, num2);
    let substractt = substract(summ, num3);
    console.log(substractt);
    }
