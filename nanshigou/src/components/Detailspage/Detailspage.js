import React from 'react'
import './Detailspage.css'
import { withRouter } from 'dva/router'
// import http from '../../sever.js'
// import url from 'url';
// import axios from 'axios';
class Detailspage extends React.Component {
    constructor(props) {
        super()
        this.state = {
            imgs: [
                {
                    urls: 'https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_360.jpg'
                },
                {
                    urls: 'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982349565989895_360.jpg'
                },
                {
                    urls: 'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05977679217962590_240.jpg'

                }
            ],
            imgurl: 'https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_360.jpg',

            //控制小图片显示对应大图片
            idx: '',
            //控制大图片的显示隐藏
            display_name: 'none',
            //控制半透明小盒子显示隐藏
            disp: 'none',
            //控制半透明小盒子
            left: 0,
            top: 0,
            //控制大图片
            rightimgleft: 0,
            rightimgtop: 0,

            clientX: '',
            clientY: '',


            val: '1',

            disnone: 'none',

            close: 'none'
        }


    }



    //鼠标划过下面小图片，上面显示对应大图片
    mouse(item, index) {
        this.setState({
            imgurl: item.urls,
            idx: index,
        })

    }



    // async componentDidMount() {
    //     let { data }  =await axios.get('https://www.nanshig.com/mobile/index.php', {
    //         params: {
    //             goods_id: 227122 
    //         }  
    //     })
    //     console.log(data.datas)

    //         // this.getlist()
    //         // console.log(this.state.datalist)
    // }


    //鼠标划过大图片的时候，更改state里的状态，右边的隐藏的图片显示对应的图片
    display_name(e) {
        if (this.state.display_name === 'none') {
            this.setState({
                display_name: 'block',
                disp: 'block'
            })
        }
        else if (this.state.display_name === 'block') {
            this.setState({
                display_name: 'none',
                // disp: 'none'
            })

        }
        //获取鼠标坐标

    }
    //鼠标离开的时候右边大图隐藏
    display_none() {

        this.setState({
            display_name: 'none',
            disp: 'none'
        })
    }



    moveas(e) {

        //获取鼠标坐标
        let X = e.clientX
        let Y = e.clientY



        // 获取左侧大盒子的offsetLeft和offsetTop;
        let lef = this.refs.pr.offsetLeft + this.refs.dbox.offsetLeft;
        let tp = this.refs.pr.offsetTop;
        // 获取遮盖部分的left和top值

        var left = X - lef - this.refs.move.offsetWidth / 2;
        var top = Y - tp - this.refs.move.offsetHeight / 2;


        // 临界值判断
        if (left < 0) {
            left = 0;
        } else if (left >= this.refs.dbox.offsetWidth - this.refs.move.offsetWidth) {
            left = this.refs.dbox.offsetWidth - this.refs.move.offsetWidth;
        }
        if (top < 0) {
            top = 0;
        } else if (top >= this.refs.dbox.offsetWidth - this.refs.move.offsetWidth) {
            top = this.refs.dbox.offsetWidth - this.refs.move.offsetWidth
        }

        //改变小盒子的left和top
        this.setState({
            left: left,
            top: top
        })

        // 计算图片移动的比率
        // x坐标移动的比率 W代表宽度，H代表竖直的高度
        let W = left / (this.refs.dbox.offsetWidth - this.refs.move.offsetWidth);
        // x坐标移动的比率
        let H = top / (this.refs.dbox.offsetHeight - this.refs.move.offsetHeight);
        // console.log(W,H);
        // 大图移动的left和top值
        let large_left = W * (this.refs.urlimg.offsetWidth - this.refs.urltop.offsetWidth);
        let large_top = H * (this.refs.urlimg.offsetHeight - this.refs.urltop.offsetHeight);
        // console.log(large_left,large_top)
        this.setState({
            rightimgleft: large_left,
            rightimgtop: large_top
        })


        // console.log(this.state.arr)

    }

    
    //点击向上按钮数量添加
    jia() {

        let sum = this.state.val * 1
        sum += 1
        this.setState({
            val: sum
        })
    }
    //点击向下按钮数量相减
    jian() {
        let sum = this.state.val * 1
        sum -= 1
        if (sum <= 1) {
            sum = 1
        }
        this.setState({
            val: sum
        })
    }

    //点击添加购物车和立即购买的效果
    disblock() {
        if (this.state.disnone === 'none') {
            this.setState({
                disnone: 'block'
            })
        } else {
            this.setState({
                disnone: 'none'
            })
        }

    }

    nones() {
        if (this.state.disnone === 'block') {
            this.setState({
                disnone: 'none'
            })
        }
    }

    close() {
        if (this.state.close === 'block') {
            this.setState({
                close: 'none'
            })
        }
    }

    altre() {
        if (this.state.close === 'none') {
            this.setState({
                close: 'block'
            })
        }
    }

    gotoshop() {
        let { history } = this.props
        history.push({
            pathname: '/shop',

        })
    }

    render() {
        return (
            <div className='box'>
                <div className="nch-breadcrumb-layout">
                    <div className="nch-breadcrumb wrapper"><i className="icon-home"></i>
                        <span><a href="javacript:void(0)">首页</a></span><span className="arrow">&gt;</span>
                        <span><a href="javacript:void(0)">上装</a></span><span className="arrow">&gt;</span>
                        <span><a href="javacript:void(0)">时尚上装</a></span><span className="arrow">&gt;</span>
                        <span><a href="javacript:void(0)">T恤</a></span><span className="arrow">&gt;</span>
                        <span></span>
                    </div>
                </div>
                <div className="wrapper pr" ref="pr" >
                    <div className="ncs-detail" >
                        <div id="ncs-goods-picture" className="ncs-goods-picture" ref="ncs" >
                            <div className="gallery_wrap" ref='wrap' >
                                <div className="gallery" ref='dbox'>
                                    <img onMouseOver={this.display_name.bind(this)} onMouseOut={this.display_none.bind(this)} src={this.state.imgurl} className="cloudzoom" alt='' ref="img" />
                                    <div className="move" onMouseOver={this.display_name.bind(this)} onMouseOut={this.display_none.bind(this)} onMouseMove={this.moveas.bind(this)} style={{ display: this.state.disp, left: this.state.left, top: this.state.top, zIndex: '99999' }} ref="move"></div>
                                </div>
                            </div>
                            <div className="big_Img" style={{ display: this.state.display_name }} ref="urlimg">
                                <img src={this.state.imgurl} alt="" ref="urltop" style={{ left: this.state.rightimgleft, top: this.state.rightimgtop }} />
                            </div>
                            <div className="controller_wrap">
                                <div className="controller">
                                    <ul>
                                        <li className="current">
                                            {/* <img src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_360.jpg" className="cloudzoom"  alt='' />
                                                                            <img src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_360.jpg" className="cloudzoom"  alt='' />
                                                                            <img src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_360.jpg" className="cloudzoom"  alt='' /> */}
                                            {
                                                this.state.imgs.map((item, index) => {
                                                    return <img onMouseOver={() => { this.mouse(item, index) }} src={item.urls} className="cloudzoom" alt='' key={index} />
                                                })
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="ncs-goods-summary">
                            <div className="name">
                                <h1>春季2018新款马甲韩版棉衣背心男士修身棉服潮流冬季羽绒马夹外套 黑色 M</h1>
                                <strong></strong>
                            </div>
                            <div className="ncs-meta">
                                <dl>
                                    <dt>市&nbsp;场&nbsp;价：</dt>
                                    <dd className="cost-price"><strong>¥299.00</strong></dd>
                                </dl>
                                <dl>
                                    <dt>商&nbsp;城&nbsp;价：</dt>
                                    <dd className="price">
                                        <strong>¥118.00</strong>
                                    </dd>
                                </dl>
                                <dl className="rate">
                                    <dt>商品评分：</dt>
                                    <dd>
                                        <span className="raty" title="很满意" style={{ width: '100px' }}>
                                            <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="1" title="很满意" />&nbsp;
                                                                            <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="2" title="很满意" />&nbsp;
                                                                            <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="3" title="很满意" />&nbsp;
                                                                            <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="4" title="很满意" />&nbsp;
                                                                            <img src="https://www.nanshig.com/data/resource/js/jquery.raty/img/star-on.png" alt="5" title="很满意" />
                                            <input type="hidden" name="score"  ></input>
                                        </span>
                                        <a href="#ncGoodsRate" alt=''>共有0条评价</a>
                                    </dd>
                                </dl>
                                <div className="ncs-goods-code">
                                    <p>
                                        <img src="https://www.nanshig.com/data/upload/shop/store/45/226273.png" title="用商城手机客户端扫描二维码直达商品详情内容" alt='' />
                                    </p>
                                    <span className="ncs-goods-code-note">
                                        <i></i>
                                        客户端扫购有惊喜
                                                                </span>
                                </div>
                            </div>
                            <div className="ncs-logistics">
                                <dl id="ncs-freight" className="ncs-freight">
                                    <dt>配&nbsp;&nbsp;送&nbsp;&nbsp;至：</dt>
                                    <dd className="ncs-freight_box">
                                        <div id="ncs-freight-selector" className="ncs-freight-select">
                                            <div className="text" onClick={this.disblock.bind(this)}>
                                                <div>请选择地区</div>
                                                <b></b>
                                            </div>
                                            <div className="content" onClick={this.nones.bind(this)} style={{ display: this.state.disnone }}>
                                                <div id="ncs-stock" className="ncs-stock" data-widget="tabs">
                                                    <div className="mt">
                                                        <ul className="tab">
                                                            <li data-index="0" data-widget="tab-item" className="curr">
                                                                <a href="javacript:void(0)" className="hover">
                                                                    <em>请选择</em><i></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div id="stock_province_item" data-widget="tab-content" data-area="0">
                                                        <ul className="area-list">
                                                            <li><a data-value="1" href="javacript:void(0)">北京</a></li>
                                                            <li><a data-value="2" href="javacript:void(0)">天津</a></li>
                                                            <li><a data-value="3" href="javacript:void(0)">河北</a></li>
                                                            <li><a data-value="4" href="javacript:void(0)">山西</a></li>
                                                            <li><a data-value="5" href="javacript:void(0)">内蒙古</a></li>
                                                            <li><a data-value="6" href="javacript:void(0)">辽宁</a></li>
                                                            <li><a data-value="7" href="javacript:void(0)">吉林</a></li>
                                                            <li><a data-value="8" href="javacript:void(0)">黑龙江</a></li>
                                                            <li><a data-value="9" href="javacript:void(0)">上海</a></li>
                                                            <li><a data-value="10" href="javacript:void(0)">江苏</a></li>
                                                            <li><a data-value="11" href="javacript:void(0)">浙江</a></li>
                                                            <li><a data-value="12" href="javacript:void(0)">安徽</a></li>
                                                            <li><a data-value="13" href="javacript:void(0)">福建</a></li>
                                                            <li><a data-value="14" href="javacript:void(0)">江西</a></li>
                                                            <li><a data-value="15" href="javacript:void(0)">山东</a></li>
                                                            <li><a data-value="16" href="javacript:void(0)">河南</a></li>
                                                            <li><a data-value="17" href="javacript:void(0)">湖北</a></li>
                                                            <li><a data-value="18" href="javacript:void(0)">湖南</a></li>
                                                            <li><a data-value="19" href="javacript:void(0)">广东</a></li>
                                                            <li><a data-value="20" href="javacript:void(0)">广西</a></li>
                                                            <li><a data-value="21" href="javacript:void(0)">海南</a></li>
                                                            <li><a data-value="22" href="javacript:void(0)">重庆</a></li>
                                                            <li><a data-value="23" href="javacript:void(0)">四川</a></li>
                                                            <li><a data-value="24" href="javacript:void(0)">贵州</a></li>
                                                            <li><a data-value="25" href="javacript:void(0)">云南</a></li>
                                                            <li><a data-value="26" href="javacript:void(0)">西藏</a></li>
                                                            <li><a data-value="27" href="javacript:void(0)">陕西</a></li>
                                                            <li><a data-value="28" href="javacript:void(0)">甘肃</a></li>
                                                            <li><a data-value="29" href="javacript:void(0)">青海</a></li>
                                                            <li><a data-value="30" href="javacript:void(0)">宁夏</a></li>
                                                            <li><a data-value="31" href="javacript:void(0)">新疆</a></li>
                                                            <li><a data-value="32" href="javacript:void(0)">台湾</a></li>
                                                            <li><a data-value="33" href="javacript:void(0)">香港</a></li>
                                                            <li><a data-value="34" href="javacript:void(0)">澳门</a></li>
                                                            <li><a data-value="35" href="javacript:void(0)">海外</a></li>
                                                        </ul>
                                                    </div>
                                                    {/* <div id="stock_city_item" data-widget="tab-content" data-area="1" style={{ display: 'block' }}>
                                                                        <ul className="area-list">
                                                                        </ul>
                                                                    </div> */}
                                                    {/* <div id="stock_area_item" data-widget="tab-content" data-area="2" style={{ display: 'none ' }}>
                                                                        <ul className="area-list">
                                                                        </ul>
                                                                    </div> */}
                                                </div>

                                            </div>

                                            <a href="##" className="close" >关闭</a>
                                        </div>
                                        <div className="ncs-freight-prompt">
                                            <strong>有货</strong>
                                            免运费
                                                                        </div>
                                    </dd>
                                </dl>




                            </div>
                            <div className="ncs-key">
                                <hr />
                                <dl nctype="nc-spec">
                                    <dt>颜色：</dt>
                                    <dd>
                                        <ul nctyle="ul_sign">
                                            <li className="sp-img"><a href="javacript:void(0)" className="hovered" data-param="{valid:9803}" title="黑色"><img src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906254977134950_60.jpg" alt='' />黑色<i></i></a></li>
                                            <li className="sp-img"><a href="javacript:void(0)" className="" data-param="{valid:9815}" title="灰色"><img src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05906255341584478_60.jpg" alt='' />灰色<i></i></a></li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl nctype="nc-spec">
                                    <dt>尺码：</dt>
                                    <dd>
                                        <ul nctyle="ul_sign">
                                            <li className="sp-txt"><a href="javacript:void(0)" className="hovered" data-param="{valid:9805}">M<i></i></a></li>
                                            <li className="sp-txt"><a href="javacript:void(0)" className="" data-param="{valid:9806}">L<i></i></a></li>
                                            <li className="sp-txt"><a href="javacript:void(0)" className="" data-param="{valid:9807}">XL<i></i></a></li>
                                            <li className="sp-txt"><a href="javacript:void(0)" className="" data-param="{valid:9808}">2XL<i></i></a></li>
                                            <li className="sp-txt"><a href="javacript:void(0)" className="" data-param="{valid:9810}">3XL<i></i></a></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                            <div className="ncs-buy">
                                <div className="ncs-figure-input">
                                    <input type="text" name="" id="quantity" value={this.state.val} className="input-text" />
                                    <p href="###" className="increase" onClick={this.jia.bind(this)} >&nbsp;</p>
                                    <p href="###" className="decrease" onClick={this.jian.bind(this)}>&nbsp;</p>
                                </div>
                                <div className="ncs-point" style={{ display: 'none' }}>
                                    <i></i>
                                    <span>
                                        您选择的商品库存
                                                                        <strong >10000</strong>
                                        件
                                                                    </span>
                                </div>
                                <div className="ncs-btn">
                                    <p className="addcart " title="添加购物车" onClick={this.altre.bind(this)}>
                                        <i className="icon-shopping-cart"></i>
                                        添加购物车
                                                                    </p>
                                    <p className="buynow " title="立即购买" onClick={this.gotoshop.bind(this)}>立即购买</p>
                                    <div className="ncs-cart-popup" style={{ display: this.state.close }}>
                                        <dl>
                                            <dt>
                                                成功添加到购物车
                                                                                <a href="javacript:void(0)" title="关闭" onClick={this.close.bind(this)}  >X</a>
                                            </dt>
                                            <dd>
                                                购物车共有
                                                                                <strong id="bold_num"></strong>
                                                种商品 总金额为：
                                                                                <em id="bold_mly" className="saleP"></em>
                                            </dd>
                                            <dd className="btns">
                                                <a href="javacript:void(0)" className="ncs-btn-mini ncs-btn-green" onClick={this.gotoshop.bind(this)}>查看购物车</a>
                                                <a href="javacript:void(0)" className="ncs-btn-mini" onClick={this.close.bind(this)} >继续购物</a></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>





                        </div>
                        <div className="ncs-handle">
                            <a href="##" className="share" nc_type="sharegoods" data-param="{&quot;gid&quot;:&quot;226273&quot;}"><i></i>分享<span>(<em nc_type="sharecount_226273">0</em>)</span></a>
                            <a href="##" className="favorite"><i></i>收藏商品<span>(<em nctype="goods_collect">0</em>)</span></a>
                            <a href="##" className="compare" nc_type="compare_226273" data-param="{&quot;gid&quot;:&quot;226273&quot;}"><i></i>加入对比</a>
                            <a href="##" title="举&nbsp;报" className="inform"><i></i>举&nbsp;报</a>
                        </div>
                        <div style={{ position: 'absolute', zIndex: '2', top: '-1px', right: '-1px' }}>
                            <div className="ncs-info">
                                <div className="title">
                                    <h4>潮男搭配师</h4>
                                </div>
                                <div className="content">
                                    <dl className="all-rate">
                                        <dt>综合评分：</dt>
                                        <dd>
                                            <div className="rating"><span style={{ width: '90%' }}></span></div>
                                            <em>4.5</em>分</dd>
                                    </dl>
                                    <div className="ncs-detail-rate">
                                        <h5><strong>店铺动态评分</strong>与行业相比</h5>
                                        <ul>
                                            <li> 描述相符<span className="credit">5 分</span> <span className=""><i></i><em></em></span> </li>
                                            <li> 服务态度<span className="credit">4.3 分</span> <span className=""><i></i><em></em></span> </li>
                                            <li> 发货速度<span className="credit">4.3 分</span> <span className=""><i></i><em></em></span> </li>
                                        </ul>
                                    </div>
                                    <dl className="messenger">
                                        <dt>联系方式：</dt>
                                        <dd><span member_id="14846"></span></dd>
                                    </dl>
                                    <dl className="messenger">
                                        <dt>商户保障：</dt>
                                        <dd>
                                            <span className="fl certMatershiti" title="实体认证"></span>
                                            <span className="fl certMaterqtian" title="实物拍摄"></span>
                                            <span className="fl certMaterzhping" title="正品保障"></span>
                                            <span className="fl certMatertuihuo" title="退货承诺"></span>
                                            <span className="fl certMaterxiaoxie" title="消费者保障"></span>
                                        </dd>
                                    </dl>
                                    <dl className="messenger">
                                        <dt>保证金额：</dt>
                                        <dd style={{ width: '100px' }}>20000元(已交纳)  </dd>
                                    </dl>
                                    <dl className="no-border">
                                        <dt>公司名称：</dt>
                                        <dd></dd>
                                    </dl>
                                    <dl>
                                        <dt>所&nbsp;&nbsp;在&nbsp;&nbsp;地：</dt>
                                        <dd></dd>
                                    </dl>
                                    <div className="goto"><a href="https://www.nanshig.com/shop/shop-45.html">进入商家店铺</a><a href="##">收藏店铺<em nctype="store_collect"></em></a></div>
                                    <div className="shop-other" id="shop-other">
                                        <ul>
                                            <li className="ncs-info-btn-map">
                                                <a href="##" className="pngFix">
                                                    <span>店铺地图</span><b></b>
                                                    <div className="ncs-info-map" id="map_container" style={{ width: '208px', height: '208px' }}></div>
                                                </a>
                                            </li>
                                            <li className="ncs-info-btn-qrcode">
                                                <a href="##" className="pngFix"><span>店铺二维码</span><b></b>
                                                    <p className="ncs-info-qrcode">
                                                        <img src="https://www.nanshig.com/data/upload/shop/store/45/45_store.png" title="店铺原始地https://www.nanshig.com/shop/shop_view-45-0-0-0-0.html" style={{ width: '208px', height: '208px' }} alt='' />
                                                    </p>
                                                </a>
                                            </li>
                                        </ul>
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
Detailspage = withRouter(Detailspage)
export default Detailspage