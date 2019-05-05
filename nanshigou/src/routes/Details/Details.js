import React from 'react'
import Detailspage from '../../components/Detailspage/Detailspage'
import Introduce from '../../components/Introduce/Introduce'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Details extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Detailspage></Detailspage>
                <Introduce></Introduce>
                <Footer></Footer>
            </div>
        )
    }
}

export default Details