(()=>{

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createAt: Date,
        stock: number,
        size?: Sizes
    };

    const products: Product[] = [];

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

    const addProduct = (data: Product) => {
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

    products.push({
        title: 'P3',
        createAt: new Date(1995,1,2),
        stock: 9,
        size:'XL'
    });
    console.log(products);
 })();
