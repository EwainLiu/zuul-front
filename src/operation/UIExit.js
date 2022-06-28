import React from "react";
import {Component} from "react";
import {Button, Col, Popover, Row} from "antd";
import {NavLink} from "react-router-dom";

class UIExit extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col span={4}>
                        结束 :
                    </Col>
                    <Col>
                        <NavLink to={'/'}>
                            <Popover content="结束游戏">
                                <Button>
                                    退出
                                </Button>
                            </Popover>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UIExit;