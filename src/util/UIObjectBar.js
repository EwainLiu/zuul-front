import React from "react";
import {Component} from "react";
import {Button, Col, Modal, Popover, Radio, Row, Space} from "antd";
import _ from 'lodash';

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
    handlePick = () => {
        // this.props.handlePick();

        this.setState({
            id: -1,
            visible: false
        })
    }

    /* 从背包丢弃物品 */
    handleAbandon = () => {
        this.props.handleAbandon();

        this.setState({
            id: -1,
            visible: false
        })
    }

    render() {

        /* 将objects用分别封装为Button组件 */
        const objs = _(this.props.objects).map((obj) => {
            return (
                <Popover key={`obj_${obj.id}`} content={obj.description}>
                    <Button key={obj.id}
                            onClick={() => this.handleClick(obj.id)}    // 传递id值
                    >
                        {obj.name}
                    </Button>
                </Popover>
            )
        }).value();

        const obj = this.props.objects[this.state.id];

        return (
            <div>
                <Row>
                    <Col span={4}>
                        物品：
                    </Col>
                    <Col>
                        <Space>
                            {objs}
                        </Space>
                    </Col>
                </Row>
                <Modal title={obj ? obj.name : ''}
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                       footer={this.props.status==="packet" ?
                           <Button key="abandon" onClick={this.handleAbandon}>丢弃</Button> :
                           <Button key="pick" onClick={this.handlePick}>拾取</Button>}
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