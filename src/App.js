import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, setMemory } from './actions';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch ] = useReducer(reducer, initialState);

  // const handleAddOneClick = () => {
  //   dispatch(addOne(1));
  // }

  const handleAddNumberClick = (number) => {
    dispatch(applyNumber(number));
  }

  const handleChangeOperatorClick = (operator) => {
    dispatch(changeOperation(operator));
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleSetMemoryClick = (input) => {
    dispatch(setMemory(input));
  }
  //console.log(state);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => {handleSetMemoryClick()}} value= {"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleAddNumberClick(1)}} value={1}/>
              <CalcButton onClick={() => {handleAddNumberClick(2)}} value={2}/>
              <CalcButton onClick={() => {handleAddNumberClick(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleAddNumberClick(4)}} value={4}/>
              <CalcButton onClick={() => {handleAddNumberClick(5)}} value={5}/>
              <CalcButton onClick={() => {handleAddNumberClick(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleAddNumberClick(7)}} value={7}/>
              <CalcButton onClick={() => {handleAddNumberClick(8)}} value={8}/>
              <CalcButton onClick={() => {handleAddNumberClick(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleChangeOperatorClick("+")}} value={"+"}/>
              <CalcButton onClick={() => {handleChangeOperatorClick("*")}} value={"*"}/>
              <CalcButton onClick={() => {handleChangeOperatorClick("-")}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => {handleClearClick(0)}} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
