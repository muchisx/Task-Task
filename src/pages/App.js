import '../assets/App.css';
import React from 'react'
import AppUi from './AppUI';
import { TodoProvider } from '../context/TodoContext';

function App() {

    return (

        <TodoProvider>

            <AppUi/>

        </TodoProvider>

    );
}

export default App;
