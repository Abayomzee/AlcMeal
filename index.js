import express from 'express';
import bodyParser from 'body-parser';
import router from './api/routes/meal.routes';
import menusRouter from './api/routes/menu.route';
import OrderRouter from './api/routes/order.routes';

const app = express();

const port = 9001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.send('App is now working fine');
});

app.use('/api/v1/meals', router);
app.use('/api/v1/menus', menusRouter)
app.use('/api/v1/orders', OrderRouter);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})

module.exports = app;
