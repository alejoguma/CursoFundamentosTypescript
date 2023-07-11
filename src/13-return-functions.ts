(()=>{
    const calcTotal = (prices: number[]): number => { //forzamos el tipo return
        // prices.reduce
        let total = 0;
        prices.forEach((item)=>{
            total += item;
        })
        return total;
    }

    // const rta = calcTotal([1,2,1,1,1]);
    // console.log(rta);

    const printTotal = (prices: number[]) : void => { //se puede poner :void para forzarlo
        console.log(`El total es`, calcTotal(prices));
    }
    printTotal([1,2,1,1,1]);
 })();
