
 import React from "react";
 import "./Aside.css";
 class Aside extends React.Component{
     constructor(props){
        super(props);
        this.state={

        }
     }
     render(){
         return(
             <div>
                <div id="vToolbar" className="nc-appbar">
 <div className="nc-appbar-tabs" id="appBarTabs">
   <div className="user ta_delay" nctype="a-barLoginBox">
     <div className="avatar">
       {/* <img src={require("../../assets/aside_1.gif")}alt="" /> */}
       <img src="" alt="" />
       <p>未登录</p>
     </div>
   </div>
   <div
     className="user-login-box"
     nctype="barLoginBox"
     // style="display:none;"
   >
     <i className="arrow" />
     <a
       href=""
       className="close-a"
       nctype="close-barLoginBox"
       title="关闭"
     >
       X
     </a>
     <form id="login_form" method="post" action="index.php?act=login&op=login">
       <input
         type="hidden"
         name="formhash"
         value="CMHqFZMUFFBpWuw8uU_HIpBEuoG29ps"
       />
       <input type="hidden" name="form_submit" value="ok" />
       <input name="nchash" type="hidden" value="6952ade4" />
       <dl>
         <dt>
           <strong>登录名</strong>
         </dt>
         <dd>
           <input
             type="text"
             className="text"
             tabindex="1"
             autocomplete="off"
             name="user_name"
             autofocus=""
           />
           <label />
         </dd>
       </dl>
       <dl>
         <dt>
           <strong>登录密码</strong>
           <a
             href="index.php?act=login&amp;op=forget_password"
             target="_blank"
           >
             忘记登录密码？
           </a>
         </dt>
         <dd>
           <input
             tabindex="2"
             type="password"
             className="text"
             name="password"
             autocomplete="off"
           />
           <label />
         </dd>
       </dl>
       <dl>
         <dt>
           <strong>验证码</strong>
           <a
             href=""
             className="ml5"
             // onclick="javascript:document.getElementById('codeimage').src='https://www.nanshig.com/shop/index.php?act=seccode&amp;op=makecode&amp;nchash=6952ade4&amp;t=' + Math.random();"
           >
             更换验证码
           </a>
         </dt>
         <dd>
           <input
             tabindex="3"
             type="text"
             name="captcha"
             autocomplete="off"
             className="text w130"
             id="captcha2"
             maxlength="4"
             size="10"
           />
           <img
             src=""
             name="codeimage"
             border="0"
             id="codeimage"
             className="vt"
             alt=""
           />
           <label />
         </dd>
       </dl>
       <div className="bottom">
         <input type="submit" className="submit" value="确认" />
         <input type="hidden" value="" name="ref_url" />
         <a
           href="https://www.nanshig.com/shop/index.php?act=login&amp;op=register&amp;ref_url="
           // target="_blank"
         >
           注册新用户
         </a>
         <a
           className="mr20"
           title="新浪微博账号登录"
           href="https://www.nanshig.com/shop/api.php?act=tosina"
         >
           新浪微博
         </a>{" "}
         <a
           className="mr20"
           title="QQ账号登录"
           href="https://www.nanshig.com/shop/api.php?act=toqq"
         >
           QQ账号
         </a>{" "}
       </div>
     </form>
   </div>
   <ul className="tools">
   <li><a href="" id="rtoolbar_cart" className="cart ta_delay"><div className="tools_img"></div><span>购物车</span><i id="rtoobar_cart_count" className="new_msg" 
   // style="display:none;"
   ></i></a></li>
   <li><a href="" id="compare" className="compare ta_delay"><div className="tools_img"></div><span>对比</span></a></li>
   <li><a href="" id="gotop" className="gotop ta_delay"><div className="tools_img"></div><span>顶部</span></a></li>
   </ul>
   <div className="content-box" id="content-compare">
<div className="top">
<h3>商品对比</h3>
<a href="" className="close" title="隐藏">1</a></div>
<div id="comparelist"></div>
</div>
<div className="content-box" id="content-cart">
<div className="top">
<h3>我的购物车</h3>
<a href="" className="close" title="隐藏">1</a></div>
<div id="rtoolbar_cartlist"></div>
</div>
<a id="activator" href="" className="nc-appbar-hide">1</a>
 </div>
 <div className="nc-hidebar" id="ncHideBar">
<div className="nc-hidebar-bg">
   <div className="user-avatar"><img src="https://www.nanshig.com/data/upload/shop/common/default_user_portrait.gif" alt=""/></div>
   <div className="frame"></div>
<div className="show"></div>
</div>
</div>
</div>
             </div>
         );
     }
 }
 export default Aside;