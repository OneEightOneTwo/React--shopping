import React from 'react'

import './Introduce.css'



class Introduce extends React.Component {
    constructor(props) {
        super()
        this.state = {
            tabs:[
                {
                    id: 0,
                   name: '商品评价(0)',
                },
                 {
                    id: 1,
                   name: '好评(0)',
                },
                  {
                    id: 2,
                   name: '中评(0)',
                }, {
                    id: 3,
                   name: '差评(0)',
                }
                  , {
                    id: 4,
                   name: '有图(0)',
                }
            ],
            mains: [
                { news: 1 },
                { news: 2 },
                { news: 3 },
                { news: 4 },
                { news: 5 }
            ],     
            idx:0,   
        }       
    }
     itemNav = (index) => {
        return index === this.state.idx ? 'active' : '';
    }

    itemCon = (index) => {
        return index === this.state.idx ? 'activea' : '';
    }

    
    


    render() {
        return (
            <div className="boxs">
                <div id="content" className="ncs-goods-layout expanded">
                    <div className="ncs-goods-main" id="main-nav-holder">
                        <div className="tabbar pngFix" id="main-nav">
                            <div className="ncs-goods-title-nav">
                                <ul id="categorymenu">
                                    <li className="current"><p id="tabGoodsIntro" >商品详情</p></li>
                                    <li><p id="tabGoodsRate" >商品评价<em>(0)</em></p></li>
                                    <li><p id="tabGoodsTraded" >销售记录<em>(0)</em></p></li>
                                    <li><p id="tabGuestbook" >购买咨询</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ncs-intro">
                            <div className="content bd" id="ncGoodsIntro">
                                <ul className="nc-goods-sort">
                                    <li>品牌：</li>
                                </ul>
                                <div className="ncs-goods-info-content">
                                    <img className="desc_anchor img-ks-lazyload" src="https://assets.alicdn.com/kissy/1.0.0/build/imglazyload/spaceball.gif" style={{ height: '1px' }} alt="" title='' />
                                    <p>
                                        <img src="https://img.alicdn.com/imgextra/i4/3688125689/O1CN01kxAKLV1rtbjemyic7_!!3688125689.jpg" className="img-ks-lazyload" alt="" />
                                        <img src="https://img.alicdn.com/imgextra/i1/3688125689/O1CN01CzZauz1rtbjYHg6Ik_!!3688125689.jpg" className="img-ks-lazyload" alt="" />
                                    </p>

                                </div>


                            </div>
                            <div className="comm3">
                                <div className="evaluate">
                                    <div>商品评价</div>
                                    <div className="evaluate_1">
                                        <ul className="evalu_1">
                                            <li>
                                                <span>100</span>
                                                <span>%</span>
                                                <span>好评</span>
                                            </li>
                                            <span>共有0人参与评分</span>
                                        </ul>
                                        <ul className="evalu_2">
                                            <li className="ev_1">
                                                <p>
                                                    <span>好评</span>
                                                    <span>(100%)</span>
                                                </p>

                                                <span></span>
                                            </li>
                                            <li className="ev_2">
                                                <p>
                                                    <span>中评</span>
                                                    <span>(0%)</span>
                                                </p>

                                                <span></span>
                                            </li>
                                            <li className="ev_3">
                                                <p>
                                                    <span>差评</span>
                                                    <span>(0%)</span>

                                                </p>

                                                <span></span>
                                            </li>
                                        </ul>
                                        <ul className="evalu_3">
                                            <li>您可对已购商品进行评价</li>
                                            <li><a href="">评价商品</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="reputation">
                                    <div className="box">
                                        <ul className="menu">                                     
                                            {
                                                this.state.tabs.map((item,index) => {                                          
                                                    // console.log(this.state.idx)
                                                    return (
                                                        <li onClick={()=>{this.setState({idx:index})}}   className={this.itemNav(index) }  key={index} >{item.name}</li>                                                   
                                                    )                                                   
                                                })
                                               
                                            }
                                        </ul>
                                        <div>                               
                                             {
                                                this.state.mains.map((item,index) => {                                          
                                                    
                                                    return (
                                                        <div  className={this.itemCon(index) }  key={index} >{item.news}</div>                                                   
                                                    )                                                   
                                                })
                                               
                                            }
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="ncg-salelog">
                                    <div className="ncs-goods-title-bar hd">
                                        <h4>销售记录</h4>
                                    </div>
                                    <div className="ncs-goods-info-content bd" id="ncGoodsTraded">
                                    <div className="top">
                                        <div className="price">商&nbsp;城&nbsp;价<strong>89.00</strong>元<span>购买的价格不同可能是由于店铺往期促销活动引起的，详情可以咨询卖家</span></div>
                                        </div>                                   
                                        <div id="salelog_demo" className="ncs-loading">
                                </div>
                                    </div>
                                </div>
                             <div className="comm4">
                                    <div className="consult">
                                        <div>商品咨询</div>
                                        <div className="consult_1">
                                            <span className="cons_1">
                                                <img src={require('../../assets/data-deng.png')} alt="" />
                                            </span>
                                            <span className="cons_2">
                                                <img src={require('../../assets/data-yi.png')}  alt=""/>
                                                <p>因厂家更改商品包装、场地、附配件等不做提前通知，且每位咨询者购买、提问时间等不同。为此，客服给到的回复仅对提问者3天内有效，其他网友仅供参考！给您带来的不变还请谅解，谢谢！</p>
                                            </span>
                                            <span className="cons_3"><a href="">我要提问</a></span>
                                        </div>
                                    </div>
                                    <div className="whole">
                                        <div className="wholebox">

                                            <ul className="wholemenu">
                                                <li >全部</li>
                                                <li className="wholeactive" style={{ borderBottom: '1px solid #fff' }}>商品咨询</li>
                                                <li>支付问题</li>
                                                <li>发票及保修</li>
                                                <li>促销及赠品</li>
                                                <li>查单查件</li>
                                                <li>服用咨询</li>
                                            </ul>
                                            <div >暂无符合条件的数据记录</div>
                                            <div style={{ display: 'block' }}>2</div>
                                            <div>3</div>
                                            <div>4</div>
                                            <div>5</div>
                                            <div>6</div>
                                            <div>7</div>
                                        </div>
                                    </div>
                                </div>





                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Introduce