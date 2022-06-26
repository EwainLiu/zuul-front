import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";

class UIRoomInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: 'default',
            roomDescription: 'this is description..',
        }
    }

    render() {
        const {roomName, roomDescription} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`当前房间 -- ${roomName}`}
                    style={{height: "300px"}}
                >
                    <p>
                        {roomDescription}
                    </p>
                </Card>
            </Col>
        )
    }
}

export default UIRoomInfo;