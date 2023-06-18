import React from 'react';


import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
// import {store} from "./redux"
import { store } from './redux';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/step1' element = {<Step1/>}/>
          <Route path='/step2' element = {<Step2/>}/>
          <Route path='/step3' element = {<Step3/>}/>
        </Routes>

      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
