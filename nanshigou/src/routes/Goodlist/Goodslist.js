import React from 'react'

import goodstyle from './Goodlist.css'
import Goodlist from '../../components/Goodlist/Goodlist'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// import {withRouter} from 'react-router-dom';
class Goodslist extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className={goodstyle.goods}>              
                <Header></Header>
                <Goodlist></Goodlist>
                <Footer></Footer>
            </div>
           
        )
    }
}


export default Goodslist