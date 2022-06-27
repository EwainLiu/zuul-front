import React, {Component} from "react";
import {Button, Col, Modal, Row} from "antd";

/**
 * 帮助
 */
class UIHelpBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    handleHelp = () => {
        this.setState({
            visible: true
        })
    }

    handleOk = () => {
        this.setState({
            visible: false
        })
    }


    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        帮助 :
                    </Col>
                    <Col>
                        <Button
                            onClick={this.handleHelp}
                        >
                            帮助
                        </Button>
                    </Col>
                </Row>
                <Modal
                    title={`help`}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={<Button key="help" onClick={this.handleOk}>确定</Button>}
                    >
                    {this.props.helpInfo}
                </Modal>
            </div>
        )
    }
}

export default UIHelpBar;