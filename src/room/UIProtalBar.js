import React, {Component} from "react";
import {Modal} from "antd";

class UIProtalBar extends Component {

    render() {
        return (
            <Modal
                title="传送门"
                visible={this.props.protal}
            >
                这是一个传送房间，随机传送到其他房间
            </Modal>
        )
    }
}

export default UIProtalBar;