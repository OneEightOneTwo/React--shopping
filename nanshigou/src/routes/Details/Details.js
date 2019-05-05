import React from 'react'
import Detailspage from '../../components/Detailspage/Detailspage'
import Introduce from '../../components/Introduce/Introduce'

class Details extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Detailspage></Detailspage>
                <Introduce></Introduce>
            </div>
        )
    }
}

export default Details