import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";
import api from "../util/config";

class UIRoomInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: '',
            roomDescription: '',
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
                    roomDescription: data.description
                })
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("房间信息请求失败")
        })
    }

    render() {
        const {roomName, roomDescription} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`当前房间`}
                    style={{height: "300px"}}
                >
                    <p>
                        房间: {roomName}
                    </p>
                    <p>
                        房间描述: {roomDescription}
                    </p>
                </Card>
            </Col>
        )
    }
}

export default UIRoomInfo;