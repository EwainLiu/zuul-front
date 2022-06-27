import React from "react";
import {Component} from "react";
import {Button, Col, Row} from "antd";
import {NavLink} from "react-router-dom";

class UIExit extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col span={4}>
                        退出游戏 :
                    </Col>
                    <Col>
                        <NavLink to={'/'}>
                            <Button>
                                退出
                            </Button>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UIExit;