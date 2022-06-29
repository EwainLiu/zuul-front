import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import React from "react";
import {Col, Layout, Row} from "antd";
import {Content, Footer} from "antd/es/layout/layout";

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.moment = null;
        this.animation = {left: '70%', duration: 2000};
        this.state = {
            moment: null,
            paused: true,
            reverse: false,
        };
    }

    onPause = () => {
        this.setState({
            paused: true,
            moment: null,
        });
    }

    onReverse = () => {
        this.setState({
            paused: false,
            reverse: true,
            moment: null,
        });
    }

    onRestart = () => {
        this.setState({
            paused: false,
            reverse: false,
            moment: 0,
        }, () => {
            this.setState({
                moment: null,
            });
        });
    }

    onClick = () => {
        this.setState({
            paused: false,
            reverse: false,
            moment: null,
        });
    }


    render() {
        return (
            <div>
                <TweenOne
                    animation={this.animation}
                    paused={this.state.paused}
                    reverse={this.state.reverse}
                    moment={this.state.moment}
                    className="code-box-shape"
                    style={{margin: '40px 20px'}}
                />
                <Layout>
                    <Row>
                        <Col span={24}>col</Col>
                    </Row>
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                    <Row>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                        <Col span={6}>col-6</Col>
                    </Row>
                    <Layout>
                        <Content>
                        </Content>
                    </Layout>
                    <Footer>foot</Footer>
                </Layout>
            </div>
        );
    }
}

Demo.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};

export default Demo;

// ReactDOM.render(<Demo/>, mountNode);