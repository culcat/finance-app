import React from 'react';
import FormAuth from "./Components/FormAuth";
import {Route, Routes} from "react-router-dom";
import FormAuthDisplay from "./Components/FormAuthDisplay";
import Balance from "./Components/Balance";
import BalanceDisplay from "./Components/BalanceDisplay";
import Change from "./Components/Change";
import AddSpend from "./Components/AddSpend";
import Reminders from './Components/Reminders';
import RemindersDisplay from './Components/RemindersDisplay';

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<FormAuth/>}/>
            <Route path='account' element={<Balance/>}/>
            <Route path='account/balance' element={<BalanceDisplay/>}/>
            <Route path='account/balance/edit' element={<Change/>}/>
            <Route path='account/balance/add' element={<AddSpend/>}/>
            <Route path='account/balance/reminder' element={<RemindersDisplay/>} /> 
            <Route path='account/balance/reminder/add' element={<Reminders/>} />

        </Routes>
    </>
  );
}

export default App;
