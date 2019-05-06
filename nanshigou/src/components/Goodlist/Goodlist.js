import React from 'react'
// import { routerRedux } from 'dva/router';
// import {withRouter} from 'react-router-dom';
import './Goodlist.css'
import axios from 'axios';
import { withRouter } from 'dva/router'
class Goodlist extends React.Component {
    constructor(props) {
        super()
        this.state = {
            datalist: [],
            top: '225px',
            active: '',
            activea:'',
            activeb:'',
        }
        
    }

    async componentWillMount() {       
        let {data} = await axios.get('https://www.nanshig.com/mobile/index.php', {
             params: {
                act: 'goods',
                op: 'goods_list',
                title:'潮男必备鞋款',
                keyword: '',
                page: 36,
                curpage: 1
                //  goods_id: '227236',
            }
        })
        
        this.setState({
            datalist: data.datas.goods_list
        });
       

    }
    
    
    clickrouter(idx) {
        // console.log(this.props)
        let {history} = this.props
        history.push({
            pathname: '/deta',
            search: '?goods_id=' + idx,
        })
    
    }
    msover(index) {      
        this.setState({
            active: index,
            activea: index,
            activeb: index,
        });       
    }

    msout() {  
         this.setState({
             active: '',
             activea: '',
             activeb:'',
        })
    }
    change(idx){
        console.log(idx)
    }

    render() {
        const { active,activea,activeb } = this.state;
        return (
            <div>
                <div className='layout'>
                    <div className='breadcrumb'><i ></i>
                        <span>
                            <a href="javacript:void(0)" >首页</a>
                        </span>
                        <span className='arrow'>&gt;</span>
                        <span>
                            <a href="javacript:void(0)">上装</a>
                        </span>
                        <span className='arrow'>&gt;</span>
                        <span>
                            <a href="javacript:void(0)">时尚上装</a>
                        </span><span className='arrow'>&gt;</span>
                        <span>POLO衫</span>
                    </div>
                </div>
                <div>
                    <div id='gc_goods_recommend_div' style={{ width: '1200px' }}>
                        <div className="nch-module nch-module-style01">
                            <div className="title">
                                <h3>热门推荐</h3>
                            </div>
                            <div className="content">
                                <ul className="v_module_recommend">
                                    <li>
                                        <div className='goods-pic'>
                                            <a href="javacript:void(0)" >
                                                <img src='https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg' alt='夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL' rel="lazy" data-url="https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg" style={{ display: 'inline' }} />
                                            </a>
                                            <dl className="goods-info">
                                                <dt><a href="javacript:void(0)" title="夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL" > 夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL</a></dt>
                                                <dd className="goods-price">商城价：<em>¥96.00</em></dd>
                                                <dd className="buy-btn"><a href="javacript:void(0)" >立即抢购</a></dd>
                                            </dl>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='goods-pic'>
                                            <a href="javacript:void(0)" >
                                                <img src='https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg' alt='夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL' rel="lazy" data-url="https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg" style={{ display: 'inline' }} />
                                            </a>
                                            <dl className="goods-info">
                                                <dt><a href="javacript:void(0)" title="夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL" > 夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL</a></dt>
                                                <dd className="goods-price">商城价：<em>¥96.00</em></dd>
                                                <dd className="buy-btn"><a href="javacript:void(0)" >立即抢购</a></dd>
                                            </dl>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='goods-pic'>
                                            <a href="javacript:void(0)" >
                                                <img src='https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg' alt='夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL' rel="lazy" data-url="https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg" style={{ display: 'inline' }} />
                                            </a>
                                            <dl className="goods-info">
                                                <dt><a href="javacript:void(0)" title="夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL" >夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL</a></dt>
                                                <dd className="goods-price">商城价：<em>¥96.00</em></dd>
                                                <dd className="buy-btn"><a href="javacript:void(0)" >立即抢购</a></dd>
                                            </dl>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='goods-pic'>
                                            <a href="javacript:void(0)">
                                                <img src='https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg' alt='夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL' rel="lazy" data-url="https://www.nanshig.com/data/upload/shop/store/goods/2/2_05494812012449760_240.jpg" style={{ display: 'inline' }} />
                                            </a>
                                            <dl className="goods-info">
                                                <dt><a href="javacript:void(0)" title="夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL" >夏季男士短袖t恤翻领男装韩版日系潮牌半袖修身POLO衫商务装 黑色 2XL</a></dt>
                                                <dd className="goods-price">商城价：<em>¥96.00</em></dd>
                                                <dd className="buy-btn"><a href="javacript:void(0)" >立即抢购</a></dd>
                                            </dl>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop_con_list">
                    <nav className="sort-bar" >
                        {/* <div className="pagination"><ul><li><span>上一页</span></li><li><a className="demo" href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-0-0-0-2.html"><span>下一页</span></a></li></ul> </div> */}
                        <div className="nch-sortbar-array">
                                <p>排序方式：</p>
                            <ul>
                                <li className="selected"><a href="##" title="默认排序">默认</a></li>
                                <li><a href="javacript:void(0)" title="点击按销量从高到低排序">销量<i></i></a></li>
                                <li><a href="javacript:void(0)" title="点击按人气从高到低排序">人气<i></i></a></li>
                                <li><a href="javacript:void(0)" title="点击按价格从高到低排序">价格<i></i></a></li>
                                <li>
                                    <div>
                                        <input id="priceMin" title="最低价" maxlength="6" className="input-txt"></input>-
                                        <input id="priceMax" title="最高价" maxlength="6" className="input-txt"></input>
                                        <a id="priceBtn" className="priceBtn" href="javacript:void(0)">确定</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="nch-sortbar-owner"><span><a href="javacript:void(0)"><i></i>平台自营</a></span></div>
                        <div className="nch-sortbar-owner"><span><a href="javacript:void(0)"><i></i>赠品</a></span></div>
                        <div className="nch-sortbar-location">商品所在地：
                            <div className="select-layer">
                                <div className="holder"><em nc_type="area_name">不限地区</em></div>
                                <div className="selected"><a nc_type="area_name">不限地区</a></div>
                                <ul className="options">


                                    <div className="filter-detailc" >
                                        <dl className="location-hots">
                                            <dt>常用地区</dt>
                                            <dd><a href="javacript:void(0)">北京</a></dd>
                                            <dd><a href="javacript:void(0)">天津</a></dd>
                                            <dd><a href="javacript:void(0)">上海</a></dd>
                                            <dd><a href="javacript:void(0)">海外</a></dd>
                                        </dl>
                                        <dl className="location-all">
                                            <dt>省份</dt>
                                            <dd>
                                                <ul>
                                                    <li>
                                                        <p className="lt">A</p>
                                                        <p className="lc">
                                                            <span>
                                                                <a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-12-0.html">安徽</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-34-0.html">澳门</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">C</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-22-0.html">重庆</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">F</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-13-0.html">福建</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">G</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-19-0.html">广东</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-28-0.html">甘肃</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-20-0.html">广西</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-24-0.html">贵州</a></span> </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <p className="lt">H</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-21-0.html">海南</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-3-0.html">河北</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-16-0.html">河南</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-8-0.html">黑龙江</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-17-0.html">湖北</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-18-0.html">湖南</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">J</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-10-0.html">江苏</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-14-0.html">江西</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-7-0.html">吉林</a></span> </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <p className="lt">N</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-6-0.html">辽宁</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-5-0.html">内蒙古</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-30-0.html">宁夏</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">Q</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-29-0.html">青海</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">S</p>
                                                        <p className="lc">

                                                            <span>
                                                                <a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-15-0.html">山东</a>
                                                            </span>
                                                            <span>
                                                                <a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-4-0.html">山西</a>
                                                            </span>
                                                            <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-27-0.html">陕西</a>
                                                            </span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-23-0.html">四川</a>
                                                            </span>
                                                        </p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <p className="lt">T</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-32-0.html">台湾</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">X</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-26-0.html">西藏</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-31-0.html">新疆</a></span> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-33-0.html">香港</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">Y</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-25-0.html">云南</a></span> </p>
                                                    </li>
                                                    <li>
                                                        <p className="lt">Z</p>
                                                        <p className="lc"> <span><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-11-0.html">浙江</a></span> </p>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                        <p className="oreder-default"><a href="https://www.nanshig.com/shop/cate-1072-0-0-0-0-1-0-0-0.html">不限地区</a></p>
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="squares">
                        <ul className="list_pic">                                                    
                            {
                                this.state.datalist.map((item, index, e) => {
                                    const liClass = active === index ? 'active' : ''
                                    const liClassa = activea === index ? 'activea' : ''
                                    const liClassb = activeb === index ? 'activeb' : ''
                                    return (
                                        <li className={`item ${liClassa}`}  key={index} onClick={this.clickrouter.bind(this,item.goods_id,)} data-id={index}>
                                            <div className={`libox ${liClassb}`} ref="libox" onMouseOver={this.msover.bind(this,index)} onMouseOut={this.msout.bind(this)} >
                                                <div className="goods-content" nctype_goods=" 227209" nctype_store="47">
                                                    <div className="goods-pic">
                                                        <a href="javacript:void(0)" title={item.goods_name}>
                                                            <img src={item.goods_image_url} alt={item.goods_name} style={{ display: 'inline' }} />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={`butbox ${liClass}`} style={{transition:'all 0.5s'}}  >
                                                    <div className="goods-info" >
                                                        <div className="goods-pic-scroll-show">
                                                            <ul>
                                                                <li className="selected">
                                                                    <a href="##" >
                                                                        <img src={item.goods_image_url} style={{ display: 'inline' }} alt='' />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="goods-name"><a href="https://www.nanshig.com/shop/item-227209.html" title="">{item.goods_name}<em></em></a></div>
                                                        <div className="goods-price">
                                                            <em className="sale-price" title={item.goods_price}>{item.goods_price}</em>
                                                            <em className="market-price" title={item.goods_marketprice}>{item.goods_marketprice}</em>
                                                            <span className="raty" data-score="5" title="很满意" style={{ width: '80px' }}>
                                                                <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="1" title="很满意" />
                                                                <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="2" title="很满意" />&nbsp;
                                                                <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="3" title="很满意" />&nbsp;
                                                                <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="4" title="很满意" />&nbsp;
                                                                <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="5" title="很满意" />
                                                                <input type="hidden" name="score" readonly="readonly"></input>
                                                            </span>
                                                        </div>
                                                        <div className="goods-sub">
                                                            <span className="goods-compare" nc_type="compare_227209" data-param="{&quot;gid&quot;:&quot;227209&quot;}"><i></i>加入对比</span> </div>
                                                    </div>
                                                    <div className="sell-stat">
                                                        <ul>
                                                            <li><a href="https://www.nanshig.com/shop/item-227209.html#ncGoodsRate" className="status">{item.goods_salenum}</a>
                                                                <p>商品销量</p>
                                                            </li>name
                                                            <li><a href="https://www.nanshig.com/shop/comments-227209-0-0.html" >0</a>
                                                                <p>用户评论</p>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="store"><a href="https://www.nanshig.com/shop/shop-47.html" title="潮男公社" className="">{item.store_name}</a></div>
                                                    <div className="add-cart" onClick={this.change.bind(this,item.goods_id)}>
                                                        <a href="##"    ><i className="icon-shopping-cart"></i>加入购物车</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }


                        </ul>


                    </div>






                </div>
            </div>
        )
    }
}
Goodlist =withRouter(Goodlist)
export default Goodlist