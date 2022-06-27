import React from "react";
import {Component} from "react";
import {Button, Col, Row, Space} from "antd";

class UIBackBar extends Component {

    /* 返回上个房间 */
    handleBack = () => {
        this.props.handleBack();
    }

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

export default UIBackBar;