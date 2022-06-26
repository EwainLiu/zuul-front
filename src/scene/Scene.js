import React from "react";
import {Component} from "react";
import {Layout, Row} from 'antd'
import UIRoomInfo from "../room/UIRoomInfo";
import UIPlayerInfo from "../player/UIPlayerInfo";
import UIOperation from "../operation/UIOperation";

const {Content} = Layout;

class Scene extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Content style={{padding: "10px"}}>
                        <Row>
                            <UIPlayerInfo/>
                            {
                                <UIRoomInfo/>
                            }
                            {
                                <UIOperation/>
                            }
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Scene;