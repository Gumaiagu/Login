import "./home.css"


function Home({changePage}: {changePage: CallableFunction}) {
    return (
        <div id="home-menu">
            <h1 id="title">Randomporation</h1>
            <button id="start-logation" onClick={function () {changePage('login')}}>Logar</button>
        </div>
    )
};

export default Home