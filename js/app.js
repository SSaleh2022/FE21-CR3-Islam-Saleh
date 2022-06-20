function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {

    var total = parseInt(starterPrice) + parseInt(maindishPrice) + parseInt(dessertPrice) + parseInt(beveragePrice);
    return total;
}


function getPrice(price, discount) {
    var numVal1 = price;
    var numVal2 = discount / 100;
    return numVal1 - (numVal1 * numVal2)
}


function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {

    var total = parseInt(getPrice(starterPrice + maindishPrice + dessertPrice, 10)) + beveragePrice;
    return total;
}



console.log(calculateInvoice(10, 10, 10, 10));

// // 3 invoices
console.log(calculateInvoice(1, 1, 1, 1));
console.log(calculateInvoice(2, 2, 2, 2));
console.log(calculateInvoice(3, 3, 3, 3));


// 3 students invoices
console.log(studentInvoice(10, 10, 10, 10));
console.log(studentInvoice(20, 20, 20, 20));
console.log(studentInvoice(30, 30, 30, 30));