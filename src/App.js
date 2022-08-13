import {CardSection, Header, Hero, Form} from './components/index'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then(({data}) => setPositions(data.positions))

    }, []);

    return (
        <div>
            <Header/>
            <Hero/>
            <CardSection/>
            <Form positions={positions}/>
        </div>
    );
}

export default App;
