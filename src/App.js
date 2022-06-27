import './App.css';
import {Component} from "react";
import Scene from "./scene/Scene";
import axios from "axios";
import api from "./util/config";
import {Routes, Route} from "react-router-dom"
import Home from "./Home";
class App extends Component {

    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/scene' element={<Scene />}></Route>
                </Routes>
            </div>
        )
    }
}

export default App;
