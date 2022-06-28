import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";
import api from "../util/config";
import UIObjectBar from "../util/UIObjectBar";
import PubSub from "pubsub-js";
import UIInfoBar from "../util/UIInfoBar";

class UIRoomInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // roomName: '',
            roomDescription: '',
            roomObjs: [{
                name: 'a',
                weight: 123,
                description: '1231231'
            }]
        }
    }

    componentDidMount() {
        PubSub.subscribe("ThrowItem", () => {
            this.getRoomInfo();
        })
        PubSub.subscribe("Move", () => {
            this.getRoomInfo();
        })
        PubSub.subscribe("Back", () => {
            this.getRoomInfo();
        })
        this.getRoomInfo();
    }

    /* 获取房间信息 */
    getRoomInfo = async () => {
        await api.get('/roomInfo').then(({data}) => {
            if (data.code === 0) {
                console.log("请求房间信息成功")
                this.setState({
                    roomName: data.name,
                    roomDescription: data.description,
                    roomObjs: data.objects
                })
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("房间信息请求失败")
        })
    }

    /* 拾起物品 */
    handlePick = async (name) => {
        let params = {
            name: name
        }
        console.log("nanana", params);
        await api.post('/pick', params).then(({data}) => {
            if (data.code === 0) {
                PubSub.publish("PickItem", name);  // 发布拾起
                this.getRoomInfo();
                console.log("拾起物品成功");
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("拾起物品失败");
        })
    }

    render() {
        const {roomName, roomDescription, roomObjs} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`当前房间`}
                    style={{height: "300px", width: "700px"}}
                >
                    {/*<UIInfoBar*/}
                    {/*    label={"房间"}*/}
                    {/*    info={roomName}*/}
                    {/*    />*/}
                    {/*<br/>*/}
                    <UIInfoBar
                        label={"描述"}
                        info={roomDescription}
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

export default UIRoomInfo;