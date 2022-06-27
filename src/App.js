import './App.css';
import {Component} from "react";
import Scene from "./scene/Scene";
import axios from "axios";

const api = axios.create({
    // baseURL: `http://localhost:3001/`
    baseURL: `https://07be00e9-6808-49f1-b493-9cc63986a6d4.mock.pstmn.io`
})

class App extends Component {

    state = {

    }

    constructor() {
        super();
        api.get('/address').then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <Scene />
        )
    }
}

export default App;
