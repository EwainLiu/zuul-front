import React from "react";
import {Component} from "react";
import {Button, Card, Col} from "antd";
import UIObjectBar from "../util/UIObjectBar";
import UIDirectionBar from "./UIDirectionBar";
import api from "../util/config";
import UIBackBar from "./UIBackBar";
import UIExit from "./UIExit";
import PubSub from "pubsub-js";
import UIHelpBar from "./UIHelpBar";
import {useNavigate} from "react-router-dom";

class UIOperation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            directions: [],
            helpInfo: '...'
        }
    }

    componentDidMount() {
        this.getDirection();
        this.getHelpInfo();
    }

    /* 获取前进方向信息 */
    getDirection = async () => {
        await api.get('/direction').then(({data}) => {
            if (data.code === 0) {
                this.setState({
                    directions: data.directions
                })
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("方向信息请求失败")
        })
    }

    /* 获取hep信息 */
    getHelpInfo = async () => {
        await api.get('/help').then(({data}) => {
            if (data.code === 0) {
                this.setState({
                    helpInfo: data.helpInfo
                })
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("帮助信息请求失败")
        })
    }

    /* 移动 */
    handleMove = async (direction) => {
        let params = {
            direction: direction
        }
        await api.post('/move', params).then(({data}) => {
            if (data.code === 0) {
                PubSub.publish("Move", direction);  // 发布
                this.getDirection();
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("执行移动失败");
        })
    }

    /* 返回上一个房间 */
    handleBack = async () => {
        await api.post('/back').then(({data}) => {
            if (data.code === 0) {
                PubSub.publish("Back");  // 发布
                this.getDirection();
            } else {
                throw data;
            }
        }).catch((err) => {
            console.log("执行返回失败");
        })
    }

    render() {
        const {directions, helpInfo} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`操作`}
                    style={{height: "300px", width: "300px"}}
                    >
                    <UIDirectionBar   // 方向控制组件
                        directions={directions}
                        handleMove={this.handleMove}
                        />
                    <br/>
                    <UIBackBar
                        handleBack={this.handleBack}
                        />
                    <br/>
                    <UIHelpBar
                        helpInfo={helpInfo}
                        />
                    <br/>
                    <UIExit/>
                </Card>
            </Col>
        )
    }
}

export default UIOperation;