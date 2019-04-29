import React from "react";
import "../../index.css";
import styles from "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "1280px"
    };
  }
  render() {
    return (
      <div>
        {/* 头部 */}
        <div className={styles.pageExplain}>
          <div className={styles.weapper}>
            <h2 className={styles.head1}>您好，欢迎来到潮男购物网站！</h2>
            <div className={styles.pageExplainLink}>
              <a className={styles.a1} href="">
                请登录
              </a>
              <a className={styles.a1} href="">
                免费注册
              </a>
              <a className={styles.a1} href="">
                用QQ账号登录
              </a>
              <a className={styles.a1} href="">
                用微博账号登录
              </a>
            </div>
          </div>
        </div>
        {/* 搜索头部 */}
        <div className={styles.headerWrap}>
          <header className={styles.header1}>
            <h1 className={styles.siteLogo}>
              <img src={require("../../assets/header1.png")} alt="" />
            </h1>
            <div className={styles.siteAd}>
              <a href="" title="潮男购物网站">
                <img src={require("../../assets/header2.gif")} alt="" />
              </a>
            </div>
            <div className={styles.seachBar}>
              <div className={styles.search}>
                <ul className={styles.tab}>
                  <li className={styles.l}>
                    <span>商品</span>
                    <i className={styles.arrow} />
                  </li>
                </ul>
              </div>
              <form className={styles.sform}>
                <input type="hidden" value="search" />
                <input
                  className={styles.inputText}
                  placeholder="搜 型男 试试，新品上线，快来拔草"
                />
                <input
                  type="submit"
                  value="搜索"
                  className={styles.inputSubmit}
                />
              </form>
              <div className={styles.keyword}>
                <h3 className={styles.sechH3}>热门搜索：</h3>
                <ul className={styles.u1}>
                  <li>
                    <a href="">潮男</a>
                  </li>
                  <li>
                    <a href="">潮男</a>
                  </li>
                  <li>
                    <a href="">潮男</a>
                  </li>
                  <li>
                    <a href="">潮男</a>
                  </li>
                  <li>
                    <a href="">潮男</a>
                  </li>
                  <li>
                    <a href="">潮男</a>
                  </li>
                  <li>
                    <a href="">潮男</a>
                  </li>
                  <li>
                    <a href="">潮男</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.menu}>
              <dl className={styles.mall}>
                <dt className={styles.d}>
                  <span className={styles.ico1} />
                  会员中心
                  <i className={styles.arrow1} />
                </dt>
                <dd className={styles.dd1}>
                  <div className={styles.subTitle}>
                    <h4>123</h4>
                    <a href="">
                      进入会员中心
                      <i />
                    </a>
                  </div>
                  <div className={styles.userMenu}>
                    <ul className={styles.u2}>
                      <li>
                        <a href="">
                          "站内消息("<span>0</span>")"
                        </a>
                      </li>
                      <li>
                        <a href="">
                          "站内消息("<span>0</span>")"
                        </a>
                      </li>
                      <li>
                        <a href="">
                          "站内消息("<span>0</span>")"
                        </a>
                      </li>
                      <li>
                        <a href="">
                          "站内消息("<span>0</span>")"
                        </a>
                      </li>
                      <li>
                        <a href="">
                          "站内消息("<span>0</span>")"
                        </a>
                      </li>
                      <li>
                        <a href="">
                          "站内消息("<span>0</span>")"
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.browse} />
                </dd>
              </dl>
              <dl className={styles.cart}>
                <dt className={styles.cartDt}>
                  <span className={styles.ico} />
                  我的购物车
                  <i className={styles.arrow} />
                </dt>
                <dd className={styles.dd1}>
                  <div className={styles.subTitle}>
                    <h4>最新加入的商品</h4>
                  </div>
                  <div className={styles.goodsBox}>
                    <div className={styles.incartGoods}>
                      <div className={styles.nOrder}>
                        <span>
                          您的购物车中暂无商品，赶快选择心爱的商品吧！
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.checkout}>
                    <span className={styles.totalPrice} />
                    <a href="" className={styles.btnCart}>
                      结算购物车中的商品
                    </a>
                  </div>
                </dd>
              </dl>
            </div>
          </header>
        </div>
        <div className={styles.nav}>
          <div className={styles.wrapper1}>
            <div className={styles.allCategory}>
              <div className={styles.title}>
                <i />
                <h3>
                  <a href="">所有分类</a>
                </h3>
              </div>
            </div>
            <ul className={styles.siteMenu}>
              <li>
                <a href="" className={styles.current}>
                  首页
                </a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
              <li>
                <a href="">潮款服饰</a>
              </li>
            </ul>
            <div className={styles.menud}>
              <a href="">下载App</a>
              <i className={styles.huiIco} />
            </div>
          </div>
        </div>

       
      </div>
    );
  }
}
export default Header;
