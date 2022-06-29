import React, {Component} from "react";
import _ from 'lodash'
import {Button, Col, Row, Space} from "antd";

class UIDirectionBar extends Component {

    /* 移动到下一个房间 */
    handleMove(direction) {
        this.props.handleMove(direction);
    }

    render() {

        // 将directions分别封装到Button中
        const direButtons = _(this.props.directions).map((direction) => {
            return <Button key={`dire_${direction}`}
                           value={direction}
                           onClick={() => this.handleMove(direction)}
            >
                {direction}
            </Button>
        }).value();

        return (
            <div>
                <Row>
                    <Col span={4}>
                        移动 :
                    </Col>
                    <Col>
                        <Space>
                            {direButtons}
                        </Space>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default UIDirectionBar;