import React from "react";
import {Component} from "react";
import {Button, Col, Row, Space} from "antd";

class UIBack extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col span={4}>
                        返回上个房间 :
                    </Col>
                    <Col>
                        <Button onClick={this.handleBack}>
                            返回
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UIBack;