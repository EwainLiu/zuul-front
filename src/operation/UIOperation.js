import React from "react";
import {Component} from "react";
import {Card, Col} from "antd";
import UIObjectBar from "../util/UIObjectBar";
import UIDirectionBar from "./UIDirectionBar";
import api from "../util/config";

class UIOperation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomObjs: [
                {'id': 0, 'name': '物品1', 'weight': 1111, 'description': "这里用来预览详情..."},
                {'id': 1, 'name': '物品2', 'weight': 4444, 'description': "..."}
            ],
            directions: ["前", "后", "右",]
        }
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



    /* 将物品放入背包 */
    handlePick = () => {
        console.log("handlePick");
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
                </Card>
            </Col>
        )
    }
}

export default UIOperation;