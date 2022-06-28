import React from "react";
import {Component} from "react";
import {Alert, Col, Image, Layout, Row, Space, Spin} from 'antd'
import UIRoomInfo from "../room/UIRoomInfo";
import UIPlayerInfo from "../player/UIPlayerInfo";
import UIOperation from "../operation/UIOperation";
import {EventEmitter} from 'events';
import Button from "@mui/material/Button";
import Demo from "../display/Demo";
import Meta from "antd/es/card/Meta";
import library from '../pic/library.jpg'
import happy from '../pic/happy.gif'
import UIDisplay from "../display/UIDisplay";
import Loading from "../util/Loading";

const {Content} = Layout;

class Scene extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }

        this.UIDisplay = React.createRef();
    }

    handleFinish = () => {
        this.setState({
            loading: false
        })

        this.UIDisplay.current.reset();
    }

    render() {
        return (
            <Spin spinning={this.state.loading}>
                <Layout>
                    <Content style={{padding: "10px"}}>
                        <Row>
                            <Col>
                                <UIPlayerInfo/>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <UIRoomInfo
                                            roomFinish={this.handleFinish}
                                        >
                                        </UIRoomInfo>
                                    </Col>
                                    <Col>
                                        <UIOperation
                                            isLoading={() => {this.setState({loading: true})}}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <UIDisplay
                                        loading={this.state.loading}
                                        ref={this.UIDisplay}
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Spin>
        )
    }
}

export default Scene;