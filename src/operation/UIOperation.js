import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";
import UIObjectBar from "../util/UIObjectBar";
import DirectionBar from "../room/DirectionBar";

class UIOperation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomName: '图书馆',
            roomObjs: [
                {'id': 0, 'name': '物品1', 'weight': 1111, 'description': "这里用来预览详情..."},
                {'id': 1, 'name': '物品2', 'weight': 4444, 'description': "..."}
            ],
            directions: ["前", "后", "右",]
        }
    }

    /* 将物品放入背包 */
    handlePick = () => {
        console.log("handlePick");
    }

    render() {
        const {roomObjs, roomName, directions} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`操作`}
                    style={{height: "300px"}}
                    >
                    <DirectionBar   // 方向控制组件
                        directions={directions}
                        handleMove={this.handleMove}
                        />
                    <br/>
                    <UIObjectBar
                        objects={roomObjs}
                        status="room"
                        handlePick={this.handlePick}
                        />
                </Card>
            </Col>
        )
    }
}

export default UIOperation;