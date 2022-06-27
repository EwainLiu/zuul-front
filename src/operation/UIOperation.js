import React from "react";
import {Component} from "react";
import {Button, Card, Col} from "antd";
import UIObjectBar from "../util/UIObjectBar";
import UIDirectionBar from "./UIDirectionBar";
import api from "../util/config";
import UIBack from "./UIBack";
import UIExit from "./UIExit";
import PubSub from "pubsub-js";

class UIOperation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            directions: []
        }
    }

    componentDidMount() {
        this.getDirection();
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

    /* 移动 */
    handleMove = async (direction) => {
        console.log(direction);
        let params = {
            direction: direction
        }
        await api.post('/move', params).then(({data}) => {
            if (data.code === 0) {
                console.log("执行移动成功");
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
    handleBack = () => {
        console.log("back");
    }

    /* 退出游戏 */
    handleExit = () => {
        console.log("exit")
    }

    render() {
        const {directions} = this.state;

        return (
            <Col span={8}>
                <Card
                    title={`操作`}
                    style={{height: "300px"}}
                    >
                    <UIDirectionBar   // 方向控制组件
                        directions={directions}
                        handleMove={this.handleMove}
                        />
                    <br/>
                    <UIBack
                        handleBack={this.handleBack}
                        />
                    <br/>
                    <UIExit
                        handleExit={this.handleExit}
                        />
                </Card>
            </Col>
        )
    }
}

export default UIOperation;