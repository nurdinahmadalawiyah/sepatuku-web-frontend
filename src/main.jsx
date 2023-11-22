import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './styles/index.css'
import {Navbar} from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NextUIProvider>
            <Navbar/>
            <App/>
        </NextUIProvider>
    </React.StrictMode>,
)