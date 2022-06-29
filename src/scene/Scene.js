import React, {Component} from "react";
import {Col, Layout, Row, Spin} from 'antd'
import UIRoomInfo from "../room/UIRoomInfo";
import UIPlayerInfo from "../player/UIPlayerInfo";
import UIOperation from "../operation/UIOperation";
import UIDisplay from "../display/UIDisplay";

const {Content} = Layout;

class Scene extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            moveLoading: false,
            pickLoading: false
        }

        this.UIDisplay = React.createRef();
    }

    handleFinish = () => {
        this.setState({
            loading: false,
            moveLoading: false,
            pickLoading: false
        })

        this.UIDisplay.current.reset();
    }

    handleMoveFinish = () => {
        this.setState({
            moveLoading: false
        });

        this.UIDisplay.current.reset();
    }

    handlePickFinish = () => {
        this.setState({
            pickLoading: false
        });
    }

    render() {
        const isLoading = this.state.moveLoading || this.state.pickLoading;

        return (
            <Spin spinning={isLoading}>
                <Layout>
                    <Content style={{padding: "10px"}}>
                        <Row>
                            <Col>
                                <UIPlayerInfo
                                    playerFinish={this.handleFinish}
                                />
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <UIRoomInfo
                                            moveLoading={() => {
                                                this.setState({moveLoading: true})
                                            }}
                                            pickLoading={() => {
                                                this.setState({pickLoading: true})
                                            }}
                                            moveFinish={this.handleMoveFinish}
                                            pickFinish={this.handlePickFinish}
                                        >
                                        </UIRoomInfo>
                                    </Col>
                                    <Col>
                                        <UIOperation
                                            moveLoading={() => {
                                                this.setState({moveLoading: true})
                                            }}
                                            pickFinish={() => {
                                                this.handlePickFinish()
                                            }}
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