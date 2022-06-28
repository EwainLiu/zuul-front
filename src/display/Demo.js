import PropTypes from "prop-types";
import Button from "antd/lib/button";
import TweenOne from 'rc-tween-one'
import React from "react";
import 'rc-tween-one/assets/index.less'

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.moment = null;
        this.animation = { left: '70%', duration: 2000 };
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
                    style={{ margin: '40px 20px' }}
                />
                <div className="demo-buttons"
                     style={{
                         position: 'absolute',
                         width: 300,
                         left: '50%',
                         marginLeft: -150,
                         bottom: 25
                     }}
                >
                    <Button type="primary" onClick={this.onClick}>play</Button>
                    <Button type="primary" onClick={this.onPause}>pause</Button>
                    <Button type="primary" onClick={this.onReverse}>reverse</Button>
                    <Button type="primary" onClick={this.onRestart}>restart</Button>
                </div>
            </div>
        );
    }
}
export default Demo;

// Demo.propTypes = {
//     children: PropTypes.any,
//     className: PropTypes.string,
//     paused: PropTypes.bool,
// };