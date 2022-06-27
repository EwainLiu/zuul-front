import './App.css';
import {Component} from "react";
import Scene from "./scene/Scene";
import axios from "axios";
import api from "./util/config";

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
