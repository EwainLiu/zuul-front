import React from "react";
import {Component} from "react";
import {Col, Row, Space} from "antd";

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