import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import { EventBind } from './components/EventBind';
// import { ParentComponent } from './components/ParentComponent';
//import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <LifecycleA />
      {/*<Form />*/}
    {/*<ParentComponent/>*/}
    {/*<FunctionClick/>
    <ClassClick/>*/}
    {/*<EventBind/>*/}
    {/*<Counter />*/}
    {/*<Greet name="Laasyavi" heroName="Tanvish" />*/}
    {/*<Welcome name="Praven" heroName="Purna"/>*/}
    {/*<Message />*/}
      {/*<Greet name="Praven" heroName="Purna" >
        <p>This is children prop</p>
      </Greet>
      <Greet name="Purna" heroName="Praveen" >
        <button>Action</button>
      </Greet>
      <Greet name="Laasyavi" heroName="Tanvish" />
      <Welcome name="Praven" heroName="Purna"/>
  <Welcome name="Purna" heroName="Praveen"/>*/}
    </div>
  );
}

export default App;
