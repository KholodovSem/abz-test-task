import {CardSection, Header, Hero, Form} from './components/index'
import {useEffect, useState, useRef} from "react";
import axios from "axios";

function App() {
    const [positions, setPositions] = useState([]);
    const [newUser, setNewUser] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then(({data}) => setPositions(data.positions))

    }, []);

    const newUserFunc = () => {
        setPage(1);
        setNewUser(true);
    }


    const handleClick = () => {
        setPage((prevState) => prevState + 1)
    }

    return (
        <div>
            <Header/>
            <Hero/>
            <CardSection newUser={newUser} page={page} handleClick={handleClick}/>
            <Form positions={positions} newUser={newUserFunc} formStatus={newUser}/>
        </div>
    );
}

export default App;
