import React, {Component} from "react";
import {Button, Modal} from "antd";


class UIProtal extends Component {

    transform = () => {
        this.props.getRoomInfo();
    }

    render() {
        return (
            <div>
                <Modal
                    title={"传送"}
                    visible={this.props.visible}
                    key={"protal"}
                    footer={<Button onClick={this.transform}>确定</Button>}
                >
                    将被传送到下一个随机房间
                </Modal>
            </div>
        );
    }
}

export default UIProtal;