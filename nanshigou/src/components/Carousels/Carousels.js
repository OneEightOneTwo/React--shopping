import React from "react";
// 引入轮播图插件
import { Carousel } from "antd";
import "antd/dist/antd.css";
class Carousels extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
          <div>
        <Carousel autoplay>
          <div>
            <h3>
            {/* 1 */}
              <img src={require("../../assets/banner1.jpg")} alt="" />
            </h3>
          </div>
          <div>
            <h3>
            {/* 2 */}
              <img src={require("../../assets/banner2.jpg")} alt="" />
            </h3>
          </div>
          {/* <div>
            <h3>
            
              <img src={require("../../assets/banner1.jpg")} alt="" />
            </h3>
          </div>
          <div>
            <h3>
           
              <img src={require("../../assets/banner2.jpg")} alt="" />
            </h3>
          </div> */}
        </Carousel>
          </div>
      );
    }
}
export default Carousels;