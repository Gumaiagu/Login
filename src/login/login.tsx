import './Login.css';
import WrongLogin  from './incorectLogin';
import { useState } from 'react';

const corectLogins = ['joao', 'maria', 'jose', 'hallen']


function click(changeUser: CallableFunction, changePage: CallableFunction, changeHLValue: CallableFunction, inputValue: string) {
    if (corectLogins.indexOf(inputValue) != -1) {
        changeUser(inputValue)
        changePage('userHome')
    }
    else {
      changeHLValue(true)
    };
  }


function Login({changePage, changeUser}: {changePage: CallableFunction, changeUser: CallableFunction}) {
    const [inputValue, changeInputValue] = useState<string>('');
    const [howISLogin, changeHLValue] = useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeInputValue(event.target.value);
    };

    return (
        <>
          <header>
            <h1 id="corporationName">Randomporation</h1>
          </header>
          <div id="login">
            <input 
              id="loginName"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder={"Login"}/>
            <button id="sendButton" onClick={function() {click(changeUser, changePage, changeHLValue, inputValue)}}>Send</button>
          </div>
          <WrongLogin activated={howISLogin}/>
        </>
      );
}

export default Login