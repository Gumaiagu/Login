import Login  from '../login/login.tsx';
import UserHome from '../userHome/userHome.tsx';
import Home from '../home/home.tsx';
import { useState } from 'react';


function App() {
  const [page, changePage] = useState<string>("home")
  const [user, changeUser] = useState<string>("")

  if (page === "home") {
    return (
      <Home changePage={changePage}/>
    )
  }
  else if (page === "login") {
    return (
      <>
        <Login changeUser={changeUser} changePage={changePage}/>
      </>
    );
  }
  else {
    return (
      <>
        <UserHome user={user}/>
      </>
    );
  }
};

export default App
