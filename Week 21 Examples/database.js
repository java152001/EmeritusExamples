// Example 2 Basic DB

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ orders: [] }).write();

db.set('orders', [
    { 
        id: 1, 
        cost: 24.20, 
        discountCode: 'APEN23', 
        items: ['books', 'food', 'clothing'] 
    },
    { 
        id: 2, 
        cost: 475.20, 
        discountCode: 'QTZPE3', 
        items: ['TV']
    }, 
    { 
        id: 3, 
        cost: 4899.20, 
        discountCode: 'LMSOW1', 
        items: ['car'] 
    }
]).write();
