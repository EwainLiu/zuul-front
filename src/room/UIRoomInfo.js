import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";
import api from "../util/config";
import UIObjectBar from "../util/UIObjectBar";

class UIRoomInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: '',
            roomDescription: '',
            roomObjs: []
        }
    }

    componentDidMount() {
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
        })
    }

    render() {
        const {roomName, roomDescription, roomObjs} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`当前房间`}
                    style={{height: "300px"}}
                >
                    <p>
                        房间: {roomName}
                    </p>
                    <br/>
                    <p>
                        房间描述: {roomDescription}
                    </p>
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