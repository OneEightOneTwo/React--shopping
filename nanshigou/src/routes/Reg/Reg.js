import React from 'react';
import { connect } from 'dva';

import LoginRegHeader from "../../components/Login/LoginRegHeader"
function RegPage() {
    return (
        <div>
            <LoginRegHeader type="注册"></LoginRegHeader>
        </div>
    )
}

RegPage.prototype = {
};

export default connect()(RegPage);