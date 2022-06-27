import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";
import UIObjectBar from "../util/UIObjectBar";
import api from "../util/config";
import PubSub from 'pubsub-js'

class UIPlayerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            playerObjs: [],
            capacity: -1,
            totalWeight: -1
        }
    }

    fetch = (params = {}) => {

    }

    componentDidMount() {
        PubSub.subscribe("PickItem", (msg, data) => {
            console.log('llsssl', msg, data);
            this.getPlayer();
            this.getPacket();
        })
        this.getPlayer();
        this.getPacket();
    }

    /* 获取玩家信息 */
    getPlayer = async () => {
        await api.get('/player').then(({data}) => {
            if (data.code === 0) {
                this.setState({
                    playerName: data.name,
                    capacity: data.capacity
                })
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("玩家信息请求失败")
        })
    }

    /* 将物品从背包丢弃 */
    handleAbandon = async (item) => {
        let params = {
            name: item
        }
        await api.post('/abandon', params).then(({data}) => {
            console.log("abandon => ", data);
            if (data.code === 0) {
                PubSub.publish("ThrowItem", item);  // 发布
                console.log("丢弃成功");
                this.getPacket();
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("丢弃物品失败");
        })
    }

    /* 将物品添加到背包 */
    handleAddItemToPacket = async (data) => {
        let params = {...data}
    }

    /* 获取背包信息 */
    getPacket = async () => {
        console.log("获取背包")
        await api.get('/packet').then(({data}) => {
            if (data.code === 0) {
                this.setState({
                    playerObjs: data.objects,
                    totalWeight: data.totalWeight
                })
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("背包信息请求失败")
        })
    }

    render() {
        const {playerName, playerObjs, capacity, totalWeight} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`玩家信息`}
                    style={{height: "300px"}}
                    >
                    <p>
                        名称: {playerName}
                    </p>
                    <br/>
                    <p>
                        携带物品重量: {totalWeight} / {capacity}
                    </p>
                    <br/>
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