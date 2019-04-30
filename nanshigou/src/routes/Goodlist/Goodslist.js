import React from 'react'
import Goodlist from '../../components/Goodlist/Goodlist'
import goodstyle from './Goodlist.css'

class Goodslist extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className={goodstyle.goods}>
                <Goodlist></Goodlist>

            </div>
           
        )
    }
}

export default Goodslist