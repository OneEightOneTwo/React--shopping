import React from "react";
import "./Content.css";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      {/* 1 */}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div>  
        </div>
        {/* 2 */}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
        {/* 3 */}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
        {/* 4 */}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div>  
        </div>
        {/* 5 */}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
        {/* 6 */}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
        {/* 7*/}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div> 
        </div>
        {/* 8 */}
        <div class="home-standard-layout wrapper style-red">
          <div class="nsgindex_tab clearfix nsgwrapper">
            <div class="nsgfl bh-fl">
              <ul class="clearfix">
                <li class="curr">
                  <a href="">潮流上装</a>
                </li>
              </ul>
            </div>
            <div class="nsgfr bh-fr">每天10点上新</div>
          </div>
          <div class="nsgindex_main clearfix nsgwrapper">
              <div class="nsgtitile-bar">
                  <ul class="nsgleimu clearfix">
                      <li>
                          <a class="activeClass" href="">皮衣/夹克</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">卫衣</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">衬衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">牛仔衫</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">棒球服</a>
                      </li>
                      <li>
                          <a class="activeClass" href="">外套/风衣</a>
                      </li>
                  </ul>
              </div>
              <ul class="nsgsplist nsgwrapper">
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu1.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu2.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu3.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
                  <li>
                      <div class="nsggoods-pic">
                          <div class="goods-pic-link">
                            <a href="" class="li-box J_btn_jump  clearfix">
                                <img src={require("../../assets/tu4.jpg")} alt=""/>
                                {/* ::after */}
                            </a>
                            <span class="tag-ap J_tags clearfix">
                                <i class="istoday">今日</i>
                                ::after
                            </span>
                          </div>
                      </div>
                      <div class="nsggoods-name f-ellipsis">
                          <a href="" class="czg-wqg J_btn_jump ">冬季胖子加厚棉衣男士加肥大码面包服韩版百搭棉袄外套个性潮男装 黑色 S</a>
                      </div>
                      <div class="nsggood-price">
                          <span class="price-final">
                              <em></em>
                              ￥178.00
                          </span>
                          <del class="original-price"></del>
                          <a href="" class="buy-icon">去下单</a>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
