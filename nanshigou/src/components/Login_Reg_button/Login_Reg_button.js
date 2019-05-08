import React from 'react';
import './Login_Reg_button.css';

class Login_Reg_button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <a>{this.props.type}</a>
            </div>
        )
    }
}

export default Login_Reg_button


