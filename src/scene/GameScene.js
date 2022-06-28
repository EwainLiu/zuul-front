import React, {Component} from "react";
import Scene from "./Scene";
import {Alert, Spin} from "antd";

class GameScene extends Component {

    render() {
        return (
            <Scene>
                <div>
                    <Spin/>
                </div>
            </Scene>
        )
    }
}

export default GameScene;