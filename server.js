const BillRouter = require('./routes/BillRouter');
const CashierRouter = require('./routes/CashierRouter');
const CheffRouter = require('./routes/CheffRouter');
const CustomerRouter = require('./routes/CustomerRouter');
const ItemRouter = require('./routes/ItemRouter');
const ManagerRouter = require('./routes/ManagerRouter');
const OrderRouter = require('./routes/OrderRouter');
const RestaurantRouter = require('./routes/RestaurantRouter');
const WaiterRouter = require('./routes/WaiterRouter');
const express = require('express');
const app = express();
const connect = require('./DB/connection');
const Port = process.env.PORT || 3000;


    app.use(express.json());
    app.use(express.urlencoded({
        extended:true
    }));

app.use('/api',BillRouter);
app.use('/api',CashierRouter);
app.use('/api',CheffRouter);
app.use('/api',CustomerRouter);
app.use('/api',ItemRouter);
app.use('/api',ManagerRouter);
app.use('/api',OrderRouter);
app.use('/api',RestaurantRouter);
app.use('/api',WaiterRouter);
    

    connect();
    app.listen(Port,()=>{
        console.log('server start');
    })