import React, {Component} from "react";
import {Spin} from "antd";

class Loading extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Spin
                tip="Loading..."
                spinning={this.props.loading}
            >
                {/*<Alert*/}
                {/*    message="加载中"*/}
                {/*    description="即将进入下一个房间"*/}
                {/*    type="info"*/}
                {/*/>*/}
            </Spin>
        )
    }
}

export default Loading;