import React from "react";
import {Component} from "react";
import {Col, Layout, Row, Space} from 'antd'
import UIRoomInfo from "../room/UIRoomInfo";
import UIPlayerInfo from "../player/UIPlayerInfo";
import UIOperation from "../operation/UIOperation";
import {EventEmitter} from 'events';
import Button from "@mui/material/Button";
import Demo from "../display/Demo";

const {Content} = Layout;

class Scene extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Content style={{padding: "10px"}}>
                        <Row>
                            <Col>
                                <UIPlayerInfo/>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <UIRoomInfo/>
                                    </Col>
                                    <Col>
                                        <UIOperation/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Demo/>
                                </Row>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Scene;