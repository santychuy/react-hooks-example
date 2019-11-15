import React, { useState, useRef, useContext } from 'react';
import './App.css';
import { useForm } from './hooks/useForm';
import { useFetch } from './hooks/useFetch';

//Context
import { ExampleContext } from './hooks/context/example-context';

const App = () => {
  const [{ email, password, firstName }, handleChanges] = useForm({ email: '', password: '', firstName: '' });
  const [count, setCount] = useState(0);

  const {data} = useFetch(`http://numbersapi.com/${count}/trivia`);

  const msg = useContext(ExampleContext);

  //Hacer referencia a cualquier componente y tenerla en cualquier parte de la App
  const inputRef = useRef();

  /* //Component Did Mount
  useEffect(() => {
    console.log('Component Did Mount');

    return () => {
      console.log('Unmount');
    }
  }, []);

  //Cuando el valor cambio 'email', se ejecuta la función
  useEffect(() => {
    console.log('Email');
  }, [email]); */

  return (
    <ExampleContext.Provider value="Hola Loco">
      <div className="App">
        <div>{!data ? "Loading..." : data}</div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>

        <input ref={inputRef} name='email' value={email} onChange={handleChanges} placeholder='Email' />
        <input name='firstName' value={firstName} onChange={handleChanges} placeholder='First Name' />
        <input type='password' name='password' value={password} onChange={handleChanges} placeholder='Password' />

        <button onClick={() => {
          inputRef.current.focus();
        }}>Reference</button>

        <div>HABER: {msg}</div>
      </div>
    </ExampleContext.Provider>
  );
}

export default App;
