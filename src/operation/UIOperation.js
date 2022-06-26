import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";

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

    render() {

        return (
            <Col span={8}>
                <Card
                    title={`操作`}
                    style={{height: "300px"}}
                    >
                    operation
                </Card>
            </Col>
        )
    }
}

export default UIOperation;