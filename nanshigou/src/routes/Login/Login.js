import React from 'react';
import './Login.css'
import Footer from "../../components/Footer/Footer";

import LoginRegHeader from "../../components/Login_Reg_Header/LoginRegHeader"

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
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
                                        <div className="tabs-content">
                                            <form id="post_form" method="post" className="nc-login-form">
                                                <dl>
                                                    <dt>手机号：</dt>
                                                    <dd>
                                                        <input type="text" className="text" placeholder="请输入手机号码" name="phone" id="phone" />
                                                    </dd>
                                                </dl>
                                                <div className="code-div">
                                                    <dl>
                                                        <dt>验证码：</dt>
                                                        <dd>
                                                            <input className="text wsamll" placeholder="输入验证码" />
                                                        </dd>
                                                    </dl>
                                                    <span></span>
                                                </div>
                                                <div className="tiptext" id="sms_text">确保上方验证码输入正确，点击
                                                <span>
                                                        <a href="javascript:void(0);" onclick="get_sms_captcha('1')">发送短信验证</a>
                                                    </span>并将您手机短信所接收到的“6位验证码”输入到下方短信验证，再提交下一步。
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default LoginPage;