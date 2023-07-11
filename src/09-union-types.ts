(()=>{
    let userId: string | number;
    userId = 1212;
    userId = "adsasd";

    function greeting(myText: string | number) {
        if(typeof myText === 'string'){
            console.log(`string ${ myText.toUpperCase()}`);
        } else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('asa');
    greeting(1212);
 })();
