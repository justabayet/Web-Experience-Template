import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ExampleProvider } from './provider/ExampleProvider'
import { Leva } from 'leva'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ExampleProvider>
            <App />
            <Leva />
        </ExampleProvider>
    </React.StrictMode>,
)