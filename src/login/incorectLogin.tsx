import './Login.css';


function WrongLogin({activated}: {activated: boolean}) {
    if (activated) {
        return(<p id="wrongLogin">Login errado, tente novamente para logar</p>)
    }
    else {
        return(<div/>)
    }
};

export default WrongLogin