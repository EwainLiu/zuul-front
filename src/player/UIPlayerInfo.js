import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";
import UIObjectBar from "../util/UIObjectBar";

class UIPlayerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: 'Anonymous',
            playerObjs: [
                {'id': 0, 'name': '背包物品0', 'weight': 1111, 'description': "这是详情..."},
                {'id': 1, 'name': '背包物品1', 'weight': 1111, 'description': "详情..."},
            ]
        }
    }

    /* 将物品从背包丢弃 */
    handleAbandon = () => {
        console.log('abandon');
    }

    render() {
        const {playerName, playerObjs} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`玩家信息 -- ${playerName}`}
                    style={{height: "300px"}}
                    >
                    <p>
                        玩家信息...
                    </p>
                    <UIObjectBar
                        objects={playerObjs}
                        status="packet" // 物品在背包里
                        handleAbandon={this.handleAbandon}
                        >
                    </UIObjectBar>
                </Card>
            </Col>
        );
    }
}

export default UIPlayerInfo;