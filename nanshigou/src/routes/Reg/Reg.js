import React from 'react';
import { connect } from 'dva';
import Footer from "../../components/Footer/Footer";

import LoginRegHeader from "../../components/Login/LoginRegHeader"
function RegPage() {
    return (
        <div>
            <LoginRegHeader type="注册"></LoginRegHeader>
            <Footer></Footer>
        </div>
    )
}

RegPage.prototype = {
};

export default RegPage;