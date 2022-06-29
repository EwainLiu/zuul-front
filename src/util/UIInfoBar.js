import React, {Component} from "react";
import {Col, Row} from "antd";

class UIInfoBar extends Component {

    render() {

        return (
            <Row>
                <Col span={8}>
                    {this.props.label}:
                </Col>
                <Col>
                    {this.props.info}
                </Col>
            </Row>
        )
    }
}

export default UIInfoBar;