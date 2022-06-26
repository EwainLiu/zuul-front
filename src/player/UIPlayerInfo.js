import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";

class UIPlayerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: 'Anonymous',
            playerObjs: [
                {'id': 0, 'name': '背包物品0', 'weight': 1111, 'description': "这里用来预览详情..."},
                {'id': 1, 'name': '背包物品1', 'weight': 1111, 'description': "这里用来预览详情..."},
            ]
        }
    }

    render() {
        const {userName, userObjs} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`玩家信息 -- ${userName}`}
                    style={{height: "300px"}}
                    >
                    <p>
                        玩家信息...
                    </p>
                </Card>
            </Col>
        );
    }
}

export default UIPlayerInfo;