import React from 'react';
// import { connect } from 'dva';
import './LoginRegHeader.css';
// import LoginRegButton from "../Login_Reg_button/Login_Reg_button"

class LoginRegHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="header-wrap">
                <header className="public-head-layout nsgwrapper">
                    <h1 className="site-logo"><a href="https://www.nanshig.com">
                        <img src="https://www.nanshig.com/data/upload/shop/common/05923582196171529.png" className="pngFix" alt="" /></a></h1>
                    <div className="login-msg error">
                        <p className="error">
                            为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！
                        </p>
                    </div>
                    <div className="nsgzhuce">
                        {/* <LoginRegButton type={this.props.type}></LoginRegButton> */}
                    </div>
                </header>
            </div>
        );
    }

}

export default LoginRegHeader