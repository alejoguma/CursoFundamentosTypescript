// var _ = require('lodash');
import _ from 'lodash';

const data = [
    {
        username: 'nico',
        role: 'admin'
    },
    {
        username: 'alejo',
        role: 'seller'
    },
    {
        username: 'Maria',
        role: 'seller'
    },
    {
        username: 'Santiago',
        role: 'customer'
    }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

const rta1 = 1 + '1';
