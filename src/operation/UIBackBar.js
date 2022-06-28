import React from "react";
import {Component} from "react";
import {Button, Col, Popover, Row, Space} from "antd";

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
                        返回 :
                    </Col>
                    <Col>
                        <Popover content={"返回上个房间"}>
                            <Button onClick={this.handleBack}>
                                返回
                            </Button>
                        </Popover>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UIBackBar;