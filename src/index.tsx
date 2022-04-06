//import { createRoot } from 'react-dom'
import { createServer } from 'miragejs';
import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: '1',
                    title: 'transactions 1',
                    amount: 400,
                    type: 'deposit',
                    category: 'food',
                    createAt: new Date(),
                },
            ];
        });
    },
});

//const container = document.getElementById('app');
//const root = createRoot(container);
//root.render(<App />); 


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
