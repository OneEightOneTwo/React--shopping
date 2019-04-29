import React from "react";
import "./Footer.css";
import Aside from "../Aside/Aside"
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="nsgfoot-xt" />
        <div class="nsgfoot-bz">
          <div class="w-1200">
            <img src={require("../../assets/footer1.png")} alt="" />
          </div>
        </div>
        <div class="nsgfoot-bottom">
          <div class="bottom-box cfix">
            <div class="bottom-box-left">
              <div class="bottom-app-code" />
              <p>男士购客服</p>
              <p>添加微信号</p>
            </div>
            <div class="bottom-box-center">
              <ul class="box-center">
                <li>
                  <h3>新手指南</h3>
                  <a
                    href="https://www.nanshig.com/shop/article-18.html"
                    // /
                  >
                    找回密码
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-6.html"
                    // target="_blank"
                  >
                    注册账号
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-44.html"
                    // target="_blank"
                  >
                    交易条款
                  </a>
                </li>
                <li>
                  <h3>支付配送</h3>
                  <a
                    href="https://www.nanshig.com/shop/article-17.html"
                    // target="_blank"
                  >
                    网上支付
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-42.html"
                    // target="_blank"
                  >
                    配送运费
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-43.html"
                    // target="_blank"
                  >
                    配送方式
                  </a>
                </li>
                <li>
                  <h3>售后服务</h3>
                  <a
                    href="https://www.nanshig.com/shop/article-31.html"
                    // target="_blank"
                  >
                    售后政策
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-32.html"
                    // target="_blank"
                  >
                    售后流程
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-34.html"
                    // target="_blank"
                  >
                    售后申请
                  </a>
                </li>
                <li>
                  <h3>关于我们</h3>
                  <a
                    href="https://www.nanshig.com/shop/article-22.html"
                    // target="_blank"
                  >
                    公司介绍
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-23.html"
                    // target="_blank"
                  >
                    隐私声明
                  </a>
                  <a
                    href="https://www.nanshig.com/shop/article-24.html"
                    // target="_blank"
                  >
                    招贤纳士
                  </a>
                </li>
              </ul>
            </div>
            <div class="bottom-box-right cfix">
              <div class="contact-us">
                <h3>联系我们</h3>
                <p>客服微信：gebuzaishuai</p>
                <p>工作日：9:00-20:00</p>
                <div class="gb-okhqb-yj contact-advice">
                  <span
                    class="okhqb_feed"
                    // onclick="javascript:window.location.href='https://www.nanshig.com/shop/index.php?act=member_mallconsult&amp;op=add_mallconsult'"
                  >
                    意见反馈
                  </span>
                </div>
              </div>
              <div class="attention-us cfix">
                <h3>关注我们</h3>
                <div
                  class="weiXin"
                  onclick="window.open('https://www.nanshig.com/weixin/');"
                  title="男士购微信"
                >
                  <div class="weiXinCode" />
                </div>
                <div
                  class="weiBo"
                  onclick="window.open('https://weibo.com/p/1006065678617328');"
                  title="男士购微博"
                >
                  <div class="weiBoCode" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nsgfoot-rz">
          <p class="nsgfoot-link">
            <a>友情链接：</a>

            <a href="https://www.nanshig.com/" 
            // target="_blank" 
            title="男士平台">
              男士平台
            </a>
            <a
              href="https://www.nanshig.com/AppDownload/index.html"
              // target="_blank"
              title="男士购APP"
            >
              男士购APP
            </a>
            <a
              href="https://www.nanshig.com/shop/cate-256-0-0-0-0-0-0-0-0.html"
              // target="_blank"
              title="男士穿搭"
            >
              男士穿搭
            </a>
            <a
              href="https://www.nanshig.com/shengji/index.html"
              // target="_blank"
              title="男士购APP升级"
            >
              男士购APP升级
            </a>
            <a
              href="https://www.nanshig.com/app/nsg.apk"
              // target="_blank"
              title="男士购APP2.6版本下载"
            >
              男士购APP2.6版
            </a>
            <a
              href="https://help.nanshig.com/"
              // target="_blank"
              title="男士购使用教程"
            >
              男士购使用教程
            </a>
            <a
              href="https://www.nanshig.com/shop/cate-256-0-0-0-0-0-0-0-0.html"
              // target="_blank"
              title="男士购物平台"
            >
              男士购物平台
            </a>
            <a
              href="https://www.nanshig.com/shop/cate-256-0-0-0-0-0-0-0-0.html"
              // target="_blank"
              title="潮男服装搭配"
            >
              潮男服装搭配
            </a>
          </p>
          <p class="nsgfoot-copy">
            Copyright © 2010-2018 男士购 版权所有{" "}
            <a
              // target="_blank"
              rel="nofollow"
              href="http://www.miitbeian.gov.cn/"
            >
              桂ICP备15008077号-1
            </a>
            &nbsp;&nbsp;
            <a rel="nofollow">
              <script
                src="https://s19.cnzz.com/z_stat.php?id=1273089985&amp;web_id=1273089985"
                language="JavaScript"
              />
              <script
                src="https://c.cnzz.com/core.php?web_id=1273089985&amp;t=z"
                charset="utf-8"
                type="text/javascript"
              />
            </a>
            <a
              href="https://www.cnzz.com/stat/website.php?web_id=1273089985"
              // target="_blank"
              title="站长统计"
            >
              站长统计
            </a>
          </p>
        </div>
       <Aside></Aside>
      </div>
    );
  }
}
export default Footer;
