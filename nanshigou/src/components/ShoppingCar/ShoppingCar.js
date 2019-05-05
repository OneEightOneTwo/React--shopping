import React from "react";
import "./ShoppingCar.css";
import Footer from "../Footer/Footer"
class ShoppingCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="page-explain">
          <div className="wrapper">
            您好，欢迎来到潮男购物网站！
            <div className="page-explain-link fr">
              您好{" "}
              <a href="https://www.nanshig.com/shop/index.php?act=member&amp;op=home">
                Regina☞真☜
              </a>
              <div
                className="nc-grade-mini"
                // style="cursor:pointer;"
                // onclick="javascript:go('https://www.nanshig.com/shop/grade.html');"
              >
                V0
              </div>
              <a href="https://www.nanshig.com/shop/index.php?act=member_order">
                我的订单
              </a>
              <a href="https://www.nanshig.com/shop/index.php?act=member_order&amp;state_type=state_new">
                待付款订单
              </a>
              <a href="https://www.nanshig.com/shop/index.php?act=member_order&amp;state_type=state_send">
                待确认收货
              </a>
              <a href="https://www.nanshig.com/shop/index.php?act=member_order&amp;state_type=state_noeval">
                待评价交易
              </a>
              <a href="https://www.nanshig.com/shop/index.php?act=member_favorites&amp;op=fglist">
                我的收藏
              </a>
              <a href="https://www.nanshig.com/shop/index.php?act=login&amp;op=logout">
                [退出]
              </a>
            </div>
          </div>
        </div>
        <header className="ncc-head-layout">
          <div className="site-logo">
            <a href="https://www.nanshig.com/shop">
              <img
                src={require("../../assets/header1.png")}
                className="pngFix"
                alt=""
              />
            </a>
          </div>
          <ul className="ncc-flow">
            <li className="current">
              <i className="step1" />
              <p>我的购物车</p>
              <sub />
              <div className="hr" />
            </li>
            <li className="">
              <i className="step2" />
              <p>填写核对购物信息</p>
              <sub />
              <div className="hr" />
            </li>
            <li className="">
              <i className="step3" />
              <p>支付提交</p>
              <sub />
              <div className="hr" />
            </li>
            <li className="">
              <i className="step4" />
              <p>订单完成</p>
              <sub />
              <div className="hr" />
            </li>
          </ul>
        </header>
        <div className="ncc-wrapper">
          <div className="ncc-main">
            <div className="ncc-title">
              <h3>我的购物车</h3>
              <h5>
                查看购物车商品清单，增加减少商品数量，并勾选想要的商品进入下一步操作。
              </h5>
            </div>
            <form method="POST" id="form_buy" name="form_buy">
              <input type="hidden" value="1" name="ifcart" />
              <table className="ncc-table-style" nc_type="table_cart">
                <thead>
                  <tr>
                    <th className="w50">
                      <label>
                        <input
                          type="checkbox"
                          checked=""
                          value="1"
                          id="selectAll"
                        />
                        全选
                      </label>
                    </th>
                    <th />
                    <th>商品</th>
                    <th className="w120">单价(元)</th>
                    <th className="w120">数量</th>
                    <th className="w120">小计(元)</th>
                    <th className="w80">操作</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colspan="20"><strong>店铺：<a href="https://www.nanshig.com/shop/shop-39.html">好男孩潮品铺</a></strong> <span member_id="1520"></span>
                        </th>
                    </tr>
                    <tr id="cart_item_33116" nc_group="33116" className="shop-list">
                        <td>
                            <input type="checkbox" checked="" nc_type="eachGoodsCheckBox" value="33116|1" id="cart_id33116" name="cart_id[]"/>
                        </td>
                        <td className="w60">
                            <a href="https://www.nanshig.com/shop/item-227010.html" 
                            // target="_blank"
                             className="ncc-goods-thumb">
                                <img src={require("../../assets/tu2.jpg")} alt="冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 黄色 S"/>
                            </a>
                        </td>
                        <td className="tl">
                            <dl className="ncc-goods-info">
                                <dt><a href="https://www.nanshig.com/shop/item-227010.html">冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 黄色 S</a></dt>
                            </dl>
                        </td>
                        <td className="w120"><em id="item33116_price">169.00</em></td>
                        <td className="w120 ws0"><a href="" onclick="decrease_quantity(33116);" title="减少商品件数" className="add-substract-key tip">-</a>
                            <input id="input_item_33116" value="1" orig="1" changed="1" onkeyup="change_quantity(33116, this);" type="text" className="text w20"/>
                            <a href="" onclick="add_quantity(33116);" title="增加商品件数" className="add-substract-key tip">+</a>
                        </td>
                        <td className="w120">
                            <em id="item33116_subtotal" nc_type="eachGoodsTotal">169.00</em>
                        </td>

                        {/* <td className="w80">            
                            <a href="" onclick="collect_goods('227010');">收藏</a><br>
                            <a href="" onclick="drop_cart_item(33116);">删除</a>
                        </td> */}
                        <td>
                            <a href="" onclick="collect_goods('227010');">收藏</a><br/>>
                            <a href="" onclick="drop_cart_item(33116);">删除</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="tr" colspan="20">
                            <div className="ncc-store-account">
                                <dl>
                                    <dt>店铺合计：</dt>
                                    <dd><em nc_type="eachStoreTotal">169.00</em>元</dd>
                                </dl>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th colspan="20">
                            <strong>
                                店铺：
                                <a href="https://www.nanshig.com/shop/shop-45.html">潮男搭配师</a>
                            </strong>
                            <span member_id="14846"></span>
                        </th>
                    </tr>
                    <tr id="cart_item_33117" nc_group="33117" className="shop-list">
                        <td>
                            <input type="checkbox" checked="" nc_type="eachGoodsCheckBox" value="33116|1" id="cart_id33116" name="cart_id[]"/>
                        </td>
                        <td className="w60">
                            <a href="https://www.nanshig.com/shop/item-227010.html" 
                            // target="_blank"
                             className="ncc-goods-thumb">
                                <img src={require("../../assets/tu3.jpg")} alt="冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 黄色 S"/>
                            </a>
                        </td>
                        <td className="tl">
                            <dl className="ncc-goods-info">
                                <dt><a href="https://www.nanshig.com/shop/item-227010.html">冬季胖子棉衣男士灯芯绒加厚棉服韩版个性外套加肥大码潮男装棉袄 黄色 S</a></dt>
                            </dl>
                        </td>
                        <td className="w120"><em id="item33116_price">169.00</em></td>
                        <td className="w120 ws0"><a href="" onclick="decrease_quantity(33116);" title="减少商品件数" className="add-substract-key tip">-</a>
                            <input id="input_item_33116" value="1" orig="1" changed="1" onkeyup="change_quantity(33116, this);" type="text" className="text w20"/>
                            <a href="" onclick="add_quantity(33116);" title="增加商品件数" className="add-substract-key tip">+</a>
                        </td>
                        <td className="w120">
                            <em id="item33116_subtotal" nc_type="eachGoodsTotal">169.00</em>
                        </td>

                        {/* <td className="w80">            
                            <a href="" onclick="collect_goods('227010');">收藏</a><br>
                            <a href="" onclick="drop_cart_item(33116);">删除</a>
                        </td> */}
                        <td>
                            <a href="" onclick="collect_goods('227010');">收藏</a><br/>>
                            <a href="" onclick="drop_cart_item(33116);">删除</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="tr" colspan="20">
                            <div className="ncc-store-account">
                                <dl>
                                    <dt>店铺合计：</dt>
                                    <dd><em nc_type="eachStoreTotal">169.00</em>元</dd>
                                </dl>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="20">
                            <div className="ncc-all-account">
                                商品总价（不含运费）
                                <em id="cartTotal">288.00</em>元
                            </div>
                        </td>
                    </tr>
                </tfoot>
              </table>
            </form>
            <div className="ncc-bottom">
                <a id="next_submit" href="" className="ncc-btn ncc-btn-acidblue fr">
                    <i className="icon-pencil">
                        ::before
                    </i>
                    下一步，填写核对购物信息
                </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default ShoppingCar;
