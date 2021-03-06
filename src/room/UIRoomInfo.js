import React, {Component} from "react";
import {Card, Col, notification} from "antd";
import api from "../util/Config";
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
        PubSub.subscribe("GetRoomInfo", () => {
            this.getRoomInfo();
        })
        this.getRoomInfo();
    }

    /* 获取房间信息 */
    getRoomInfo = async () => {
        await api.get('/roomInfo').then(({data}) => {
            if (data.code === 0) {
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
        });
        this.props.moveFinish();
    }

    openNotification = (placement) => {
        notification.info({
            message: `Notification`,
            description:
                'You cannot lift it.',
            placement,
        });
    };

    /* 拾起物品 */
    handlePick = async (name) => {
        let params = {
            name: name
        }
        await api.post('/pick', params).then(({data}) => {
            if (data.code === 0) {
                this.props.pickLoading();
                PubSub.publish("PickItem", name);  // 发布拾起
                this.getRoomInfo();
            } else if (data.code === 1) {
                this.openNotification('top')
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("拾起物品失败");
        })
        this.props.pickFinish();
    }

    /* 吃掉饼干 */
    handleEat = async (name) => {
        let params = {
            itemName: name
        }
        await api.post('/eat', params).then(({data}) => {

            if (data.code === 0) {
                PubSub.publish("EatCookie");
                this.getRoomInfo();
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("吃饼干失败");
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
                    <UIInfoBar
                        label={"描述"}
                        info={roomDescription}
                    />
                    <br/>
                    <UIObjectBar
                        objects={roomObjs}
                        status="room"
                        handlePick={this.handlePick}
                        handleEat={this.handleEat}
                    />
                </Card>
            </Col>
        )
    }
}

export default UIRoomInfo;