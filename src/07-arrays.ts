(()=>{
    let prices = [1,2,2,1,1,212,'',false];
    // prices.push('3')
    prices.push(3);
    console.log(prices);

    let products: (string|boolean|number)[] = ['hola',true];
    products.push(12);
    console.log(products);

    let numbers = [1,2,2,1,1,212];
    numbers.map(item => item * 2);
    console.log(numbers);

})();
