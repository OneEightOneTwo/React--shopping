import React from 'react';
import { connect } from 'dva';
import './Login.css'

import LoginRegHeader from "../../components/Login/LoginRegHeader"
function LoginPage() {
    return (
        <div>
            <LoginRegHeader type="登录"></LoginRegHeader>
            <div className="nc-register-bg">
                <div className="nc-register-box">
                    <div className="nc-register-layout">
                        <div className="left">
                            <div className="nc-register-mode">
                                <ul className="tabs-nav">
                                    <li>
                                        <a href="###" className="tabulous_active">使用手机号码注册<i></i></a>
                                    </li>
                                </ul>
                                <div className="tabs-container">
                                </div>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

LoginPage.prototype = {
};

export default connect()(LoginPage);