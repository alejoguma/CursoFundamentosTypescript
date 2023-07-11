(()=>{

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const products: any[] = [];

    const login = (data: {email: string, password: number}) => {
        console.log(data);
        console.log(data.email);
        console.log(data.password);
    }
    // login('alejo@alejo.co', '1234');
    login({
        email:'alejo@alejo.co',
        password:1234
    })

    const addProduct = (data: {
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes //tambien pueden ser opcionales los atributos del objeto
    }) => {
        products.push(data);
    }

    addProduct({
        title: 'P1',
        createAt: new Date(1994,1,1),
        stock: 12
    })

    addProduct({
        title: 'P2',
        createAt: new Date(1993,1,2),
        stock: 10,
        size:'L'
    })

    console.log(products);
 })();
