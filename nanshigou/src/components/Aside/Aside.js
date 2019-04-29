
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
                <div id="vToolbar" class="nc-appbar">
 <div class="nc-appbar-tabs" id="appBarTabs">
   <div class="user ta_delay" nctype="a-barLoginBox">
     <div class="avatar">
       {/* <img src={require("../../assets/aside_1.gif")}alt="" /> */}
       <img src="" alt="" />
       <p>未登录</p>
     </div>
   </div>
   <div
     class="user-login-box"
     nctype="barLoginBox"
     // style="display:none;"
   >
     <i class="arrow" />
     <a
       href=""
       class="close-a"
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
             class="text"
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
             class="text"
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
             class="ml5"
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
             class="text w130"
             id="captcha2"
             maxlength="4"
             size="10"
           />
           <img
             src=""
             name="codeimage"
             border="0"
             id="codeimage"
             class="vt"
             alt=""
           />
           <label />
         </dd>
       </dl>
       <div class="bottom">
         <input type="submit" class="submit" value="确认" />
         <input type="hidden" value="" name="ref_url" />
         <a
           href="https://www.nanshig.com/shop/index.php?act=login&amp;op=register&amp;ref_url="
           // target="_blank"
         >
           注册新用户
         </a>
         <a
           class="mr20"
           title="新浪微博账号登录"
           href="https://www.nanshig.com/shop/api.php?act=tosina"
         >
           新浪微博
         </a>{" "}
         <a
           class="mr20"
           title="QQ账号登录"
           href="https://www.nanshig.com/shop/api.php?act=toqq"
         >
           QQ账号
         </a>{" "}
       </div>
     </form>
   </div>
   <ul class="tools">
   <li><a href="" id="rtoolbar_cart" class="cart ta_delay"><div class="tools_img"></div><span>购物车</span><i id="rtoobar_cart_count" class="new_msg" 
   // style="display:none;"
   ></i></a></li>
   <li><a href="" id="compare" class="compare ta_delay"><div class="tools_img"></div><span>对比</span></a></li>
   <li><a href="" id="gotop" class="gotop ta_delay"><div class="tools_img"></div><span>顶部</span></a></li>
   </ul>
   <div class="content-box" id="content-compare">
<div class="top">
<h3>商品对比</h3>
<a href="" class="close" title="隐藏">1</a></div>
<div id="comparelist"></div>
</div>
<div class="content-box" id="content-cart">
<div class="top">
<h3>我的购物车</h3>
<a href="" class="close" title="隐藏">1</a></div>
<div id="rtoolbar_cartlist"></div>
</div>
<a id="activator" href="" class="nc-appbar-hide">1</a>
 </div>
 <div class="nc-hidebar" id="ncHideBar">
<div class="nc-hidebar-bg">
   <div class="user-avatar"><img src="https://www.nanshig.com/data/upload/shop/common/default_user_portrait.gif" alt=""/></div>
   <div class="frame"></div>
<div class="show"></div>
</div>
</div>
</div>
             </div>
         );
     }
 }
 export default Aside;