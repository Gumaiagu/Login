import './userHome.css';


function UserHome({user}: {user: string}) {
    return (
        <>
            <h1 id="welcome">Welcome {user}</h1>
            <p id="explanation">This is a test home, it won't have anything.</p>
        </>
    )
};

export default UserHome