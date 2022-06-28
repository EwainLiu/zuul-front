import React, {Component} from "react";
import {Col, Image, Layout, Row} from "antd";
import library from "../pic/library.jpg";
import happy from "../pic/happy.gif";
import chasing from "../pic/chasing.gif"
import {Content} from "antd/es/layout/layout";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import {Animated, Text, View} from 'react-native'
import PropTypes from "prop-types";
import TweenOne from "rc-tween-one";
import PubSub from "pubsub-js";

class UIDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pic: happy,
            x: "center",
            y: "middle"
        };
    }

    componentDidMount() {
        PubSub.subscribe("Move", (name, direction) => {
            console.log("?", direction)
            this.handleMove(direction);
        })
        this.reset();
    }

    handleMove = (direction) => {
        console.log("I will move", direction)
        const map = {
            east: {x: "end"},
            west: {x: "start"},
            north: {y: "top"},
            south: {y: "bottom"}
        }
        this.setState({
            pic: chasing,
            x: map[direction].x ? map[direction].x : this.state.x,
            y: map[direction].y ? map[direction].y : this.state.y
        })
    }

    reset = () => {
        this.setState({
            pic: happy,
            x: "center",
            y: "middle"
        })
    }

    render() {
        return (
            <Layout>
                <Content style={{width: "900px"}}>
                    <Row>
                        <Col style={{width: "130px"}}>
                            <Button onClick={this.handleMove}>
                                sa
                            </Button>
                        </Col>
                        <Col className={"haveBg"}
                            style={{
                                width: "720px",
                                height: "355px",
                                backgroundImage: `url(${library})`
                            }}
                        >
                            <Row
                                align={this.state.y}
                                justify={this.state.x}
                                style={{height: "355px", width: "720px", flex: 1}}
                            >
                                <Image
                                    style={{height: "100px", width: "100px"}}
                                    src={this.state.pic}
                                    />
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default UIDisplay;