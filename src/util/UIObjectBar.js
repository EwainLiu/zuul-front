import React from "react";
import {Component} from "react";
import {Avatar, Button, Card, Col, Layout, Modal, Popover, Radio, Row, Space} from "antd";
import { EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons';

import _ from 'lodash';
import Meta from "antd/es/card/Meta";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

/**
 * 物品栏工具，陈列物品，查看物品详情
 */
class UIObjectBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            hidden: false,
            count: 0,
            hiddenID: -1,
            visible: false,
        }
    }

    componentWillUnmount() {
        if (this.state.hiddenID >= 0) {
            clearTimeout(this.state.hiddenID);
        }
    }

    /* 点击物品展示对话窗口 */
    handleClick = (id) => {

        this.setState({
            id: id,
            visible: true,
        })
    }

    handleOk = () => {
        this.setState({
            id: -1,
            visible: false
        });
    }

    handleCancel = () => {
        this.setState({
            id: -1,
            visible: false
        })
    }

    /* 捡起物品放入背包 */
    handlePick = (obj) => {
        console.log("pick", obj)
        if (obj) {
            this.props.handlePick(obj.name);
        }

        this.setState({
            id: -1,
            visible: false
        })
    }

    /* 从背包丢弃物品 */
    handleAbandon = (obj) => {
        this.props.handleAbandon(obj.name);

        this.setState({
            id: -1,
            visible: false
        })
    }

    /* 吃掉饼干 */
    handleEat = (name) => {
        this.props.handleEat(name);

        this.setState({
            id: -1,
            visible: false
        })
    }

    render() {

        /* 将objects用分别封装为Button组件 */
        const objs_row = _(this.props.objects).map((obj, index) => {
            return (
                <Row span={8} key={`row_${index}`}>
                    <Popover key={`obj_${index}`} content={obj.description}>
                        <Card
                            title={obj.name}
                            key={`objCard_${index}`}
                            seize="small"
                            extra={<EyeOutlined key="EyeOutlined" onClick={() => {this.handleClick(index)}}></EyeOutlined>}
                            style={{width: 200}}
                        >
                            <Meta
                                key={`Meta_${index}`}
                                description={obj.description}
                            />
                        </Card>
                    </Popover>
                </Row>
            )
        }).value();

        const objs_col = _(this.props.objects).map((obj, index) => {
            return (
                <Col span={8} key={`row_${index}`}>
                    <Popover key={`obj_${index}`} content={obj.description}>
                        <Card
                            title={obj.name}
                            key={`objCard_${index}`}
                            seize="small"
                            extra={<EyeOutlined key="EyeOutlined" onClick={() => {this.handleClick(index)}}></EyeOutlined>}
                            style={{width: 200}}
                        >
                            <Meta
                                key={`Meta_${index}`}
                                description={obj.description}
                            />
                        </Card>
                    </Popover>
                </Col>
            )
        }).value();

        const obj = this.props.objects[this.state.id] ? this.props.objects[this.state.id] : {id: -1, name: ""}

        return (
            <div key={"objBar"}>
                {this.props.status==="packet" ?
                    <Row style={{height: "400px", width: "200px", overflow: "auto"}} key={"packetRow"}>
                        <Col span={8}>
                            背包：
                        </Col>
                        <Col>
                            {/*<Space>*/}
                            {objs_row}
                            {/*</Space>*/}
                        </Col>
                    </Row>
                     :
                    <Col
                        style={{width: "800px", height: "170px", overflow: "auto"}} key={"roomCol"}
                    >
                        {/*<Col span={4}>*/}
                        {/*    物品：*/}
                        {/*</Col>*/}
                        <Row>
                            {/*<Space>*/}
                            {objs_col}
                            {/*</Space>*/}
                        </Row>
                    </Col>
                }


                <Modal title={obj ? obj.name : ''}
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                       key={obj ? obj.name : 'objModal'}
                       footer={[
                           this.props.status==="packet" ?  // 是否在背包里
                               <Button key="abandon" onClick={this.handleAbandon.bind(this, obj)}>丢弃</Button> :
                               <Button key="pick" onClick={this.handlePick.bind(this, obj)}>拾取</Button>,
                           obj.name==="magic_cookie" ?
                               <Button key="eat" onClick={this.handleEat.bind(this, obj.name)}>吃掉</Button> : <></>
                       ]}
                       >
                    <p>
                        重量 : {obj ? obj.weight : -1}
                    </p>
                    <p>
                        描述 : {obj ? obj.description : '没有描述'}
                    </p>
                </Modal>
            </div>
        );
    }
}

export default UIObjectBar;