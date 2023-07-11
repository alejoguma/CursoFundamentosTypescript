import { createProduct, calcStock, products } from './product.service';

createProduct({
    title: 'P1',
    createAt: new Date(1993,1,2),
    stock: 5,
    size:'S'
});
createProduct({
    title: 'P2',
    createAt: new Date(1993,1,2),
    stock: 10,
    size:'L'
});
console.log(products);
const total = calcStock();
console.log(total);
