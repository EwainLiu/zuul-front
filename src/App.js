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
    }

    render() {
        return (
            <Scene />
        )
    }
}

export default App;
