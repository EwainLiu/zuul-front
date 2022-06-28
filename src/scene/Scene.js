import React from "react";
import {Component} from "react";
import {Layout, Row, Space} from 'antd'
import UIRoomInfo from "../room/UIRoomInfo";
import UIPlayerInfo from "../player/UIPlayerInfo";
import UIOperation from "../operation/UIOperation";
import {EventEmitter} from 'events';

const {Content} = Layout;

class Scene extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Content style={{padding: "10px"}}>
                        <Space
                            align="start"
                        >
                            <UIPlayerInfo/>
                            <UIRoomInfo/>
                            <UIOperation/>
                        </Space>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Scene;