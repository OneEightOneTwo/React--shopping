import React from "react";
import "./Content.css";
// dva提供connect方法连接仓库
import { connect } from 'dva';

import { withRouter } from 'dva/router'
class Content extends React.Component {
  constructor(props) {
    super(props);
    // this.props = props
    this.state = {
            goodsList:[{
                url:(require("../../assets/tu1.jpg")),
                title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
                price:"￥178.00",
                orders:"去下单"
            },{
                url:(require("../../assets/tu2.jpg")),
                title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
                price:"￥178.00",
                orders:"去下单"
            },{
                url:(require("../../assets/tu3.jpg")),
                title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
                price:"￥178.00",
                orders:"去下单"
            },{
                url:(require("../../assets/tu4.jpg")),
                title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
                price:"￥178.00",
                orders:"去下单"
            } 
    ],
    goodsList1:[{
        url:(require("../../assets/tu1.jpg")),
        title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
        price:"￥178.00",
        orders:"去下单"
    },{
        url:(require("../../assets/tu2.jpg")),
        title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
        price:"￥178.00",
        orders:"去下单"
    },{
        url:(require("../../assets/tu3.jpg")),
        title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
        price:"￥178.00",
        orders:"去下单"
    },{
        url:(require("../../assets/tu4.jpg")),
        title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
        price:"￥178.00",
        orders:"去下单"
    } 
],
goodsList2:[{
    url:(require("../../assets/tu1.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
},{
    url:(require("../../assets/tu2.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
},{
    url:(require("../../assets/tu3.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
},{
    url:(require("../../assets/tu4.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
} 
],
goodsList3:[{
    url:(require("../../assets/tu1.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
},{
    url:(require("../../assets/tu2.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
},{
    url:(require("../../assets/tu3.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
},{
    url:(require("../../assets/tu4.jpg")),
    title:"冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S",
    price:"￥178.00",
    orders:"去下单"
} 
],
    active: '',
    active1: '',
    active2: '',
    active3: '',    
    };
  }

  bgChange = index => {
    this.setState({
        active: index
    });
};
bgChange1 = index => {
    this.setState({
        active1: index
    });
};
bgChange2 = index => {
    this.setState({
        active2: index
    });
};
bgChange3 = index => {
    this.setState({
        active3: index
    });
};
  //渲染页面的内容
  renderData(){
    const { active } = this.state;
      return this.state.goodsList.map((item,index)=>{
        const liClass = active === index ? 'active' : '';
        return  <li id={index}
            // className={this.props.shouye.defaultHeight===true?"active":""}
            className={`left-li ${liClass}`}
            key={index}
            onMouseEnter={() => {
                this.bgChange(index);
            }}
            onMouseLeave={() => {
                this.bgChange("");
            }}
            // onMouseEnter={this.changeStatus.bind(this)} 
            // onMouseLeave={this.changeStatusFalse.bind(this)}
            >
        <div className="nsggoods-pic">
            <div className="goods-pic-link">
              <a href="javacript:viod(0)" className="li-box J_btn_jump  clearfix" onClick={this.gotoshop.bind(this)}>
                  <img src={item.url} alt=""/>
                  
              </a>
              <span className="tag-ap J_tags clearfix">
                  <i className="istoday">今日</i>
                  
              </span>
            </div>
        </div>
        <div className="nsggoods-name f-ellipsis">
            <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
        </div>
        <div className="nsggood-price">
            <span className="price-final">
                <em></em>
                ￥178.00
            </span>
            <del className="original-price"></del>
            <a href="" className="buy-icon">去下单</a>
        </div>
    </li>
      })
    }
    
     gotoshop() {
         let { history } = this.props
        history.push({
            pathname: '/deta',
            
        })
    }

  renderData1(){
    const { active1 } = this.state;
      return this.state.goodsList1.map((item,index)=>{
        const liClass = active1 === index ? 'active' : '';
        return  <li  
            // className={this.props.shouye.defaultHeight===true?"active":""}
            className={`left-li ${liClass}`}
            key={index}
            onMouseEnter={() => {
                                    this.bgChange1(index);
                                }}
            onMouseLeave={() => {
                this.bgChange1("");
            }}
            // onMouseEnter={this.changeStatus.bind(this)} 
            // onMouseLeave={this.changeStatusFalse.bind(this)}
            >
        <div className="nsggoods-pic">
            <div className="goods-pic-link">
              <a href="" className="li-box J_btn_jump  clearfix">
                  <img src={item.url} alt=""/>
                  
              </a>
              <span className="tag-ap J_tags clearfix">
                  <i className="istoday">今日</i>
                  
              </span>
            </div>
        </div>
        <div className="nsggoods-name f-ellipsis">
            <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
        </div>
        <div className="nsggood-price">
            <span className="price-final">
                <em></em>
                ￥178.00
            </span>
            <del className="original-price"></del>
            <a href="" className="buy-icon">去下单</a>
        </div>
    </li>
      })
  }
  renderData2(){
    const { active2 } = this.state;
      return this.state.goodsList1.map((item,index)=>{
        const liClass = active2 === index ? 'active' : '';
        return  <li 
            // className={this.props.shouye.defaultHeight===true?"active":""}
            className={`left-li ${liClass}`}
            key={index}
            onMouseEnter={() => {
                                    this.bgChange2(index);
                                }}
            onMouseLeave={() => {
                this.bgChange2("");
            }}
            // onMouseEnter={this.changeStatus.bind(this)} 
            // onMouseLeave={this.changeStatusFalse.bind(this)}
            >
        <div className="nsggoods-pic">
            <div className="goods-pic-link">
              <a href="" className="li-box J_btn_jump  clearfix">
                  <img src={item.url} alt=""/>
                  
              </a>
              <span className="tag-ap J_tags clearfix">
                  <i className="istoday">今日</i>
                  
              </span>
            </div>
        </div>
        <div className="nsggoods-name f-ellipsis">
            <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
        </div>
        <div className="nsggood-price">
            <span className="price-final">
                <em></em>
                ￥178.00
            </span>
            <del className="original-price"></del>
            <a href="" className="buy-icon">去下单</a>
        </div>
    </li>
      })
  }
  renderData3(){
    const { active3 } = this.state;
      return this.state.goodsList1.map((item,index)=>{
        const liClass = active3 === index ? 'active' : '';
        return  <li 
            // className={this.props.shouye.defaultHeight===true?"active":""}
            className={`left-li ${liClass}`}
            key={index}
            onMouseEnter={() => {
                                    this.bgChange3(index);
                                }}
            onMouseLeave={() => {
                this.bgChange3("");
            }}
            // onMouseEnter={this.changeStatus.bind(this)} 
            // onMouseLeave={this.changeStatusFalse.bind(this)}
            >
        <div className="nsggoods-pic">
            <div className="goods-pic-link">
              <a href="" className="li-box J_btn_jump  clearfix">
                  <img src={item.url} alt=""/>
                  
              </a>
              <span className="tag-ap J_tags clearfix">
                  <i className="istoday">今日</i>
                  
              </span>
            </div>
        </div>
        <div className="nsggoods-name f-ellipsis">
            <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
        </div>
        <div className="nsggood-price">
            <span className="price-final">
                <em></em>
                ￥178.00
            </span>
            <del className="original-price"></del>
            <a href="" className="buy-icon">去下单</a>
        </div>
    </li>
      })
  }
//   changeStatus(){
//       console.log('changeStatus')
//       console.log(this.props.shouye.defaultHeight)
//       this.props.dispatch({
//           type:"shouye/changeStatus",
//           payload:{
//             defaultHeight:true,
//           }
          
//       })
//       console.log(this.props.shouye.defaultHeight)
//       this.forceUpdate()

//   }
  _componentWillReceiveProps(props){
      console.log(props)
  }
//   changeStatusFalse(){
//     console.log('changeStatusFalse')
//     console.log(this.props.shouye.defaultHeight)
//     this.props.dispatch({
//         type:"shouye/changeStatusFalse",
//         payload:{
//           defaultHeight:false,
//         }
        
//     })
//     this.forceUpdate()
//     console.log(this.props.shouye.defaultHeight)
//   }

  render() {
    // console.log(11111,this.props.shouye.defaultHeight)
    return (
      <div>
      {/* 1 */}
      {this.props.shouye.defaultHeight}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
              
                  {/* <li name={this.props.shouye.defaultHeight?1:2} className={this.props.shouye.defaultHeight===true?"active":""} onMouseEnter={this.changeStatus.bind(this)} onMouseLeave={this.changeStatusFalse.bind(this)}>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                               
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData()}
              </ul>
          </div>  
        </div>
        {/* 2 */}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
                  {/* <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                               r
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                               
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData1()}
              </ul>
          </div>
        </div>
        {/* 3 */}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
                  {/* <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData2()}
              </ul>
          </div>
        </div>
        {/* 4 */}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
                  {/* <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData3()}
              </ul>
          </div>  
        </div>
        {/* 5 */}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
                  {/* <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData()}
              </ul>
          </div>
        </div>
        {/* 6 */}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
                  {/* <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                               
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData()}
              </ul>
          </div>
        </div>
        {/* 7*/}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
                  {/* <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData()}
              </ul>
          </div> 
        </div>
        {/* 8 */}
        <div className="home-standard-layout wrapper style-red">
          <div className="nsgindex_tab clearfix nsgwrapper">
            <div className="nsgfl bh-fl">
              <ul className="clearfix">
                <li className="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div className="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div className="nsgindex_main clearfix nsgwrapper">
              <div className="nsgtitile-bar">
                  <ul className="nsgleimu clearfix">
                      <li>
                          <a className="activeclassName" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">卫衣</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">衬衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">棒球服</a>
                      </li>
                      <li>
                          <a className="activeclassName" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul className="nsgsplist nsgwrapper">
                  {/* <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                               
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div className="nsggoods-pic">
                          <div className="goods-pic-link">
                            <a href="" className="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                               
                            </a>
                            <span className="tag-ap J_tags clearfix">
                                <i className="istoday">今日</i>
                                
                            </span>
                          </div>
                      </div>
                      <div className="nsggoods-name f-ellipsis">
                          <a href="" className="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div className="nsggood-price">
                          <span className="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del className="original-price"></del>
                          <a href="" className="buy-icon">去下单</a>
                      </div>
                  </li> */}
                  {this.renderData()}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

Content = withRouter(Content)
export default connect((state)=>{
    return state;
})(Content);
