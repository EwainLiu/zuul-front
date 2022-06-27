import React from "react";
import {Component} from "react";
import {Button, Col, Row} from "antd";

class UIExit extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col span={4}>
                        退出游戏 :
                    </Col>
                    <Col>
                        <Button onClick={this.handleBack}>
                            退出
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UIExit;