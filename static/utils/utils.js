//localStorage存取
function localStorage (key,value){
    if(window.localStorage){
        if(value){
            return window.localStorage.setItem(key,JSON.stringify(value));
        }else{
            return JSON.parse(window.localStorage.getItem(key));
        }
    }else{
        alert("您的浏览器不支持localStorage数据缓存技术,请升级您的浏览器!")
    }
}
//sessionStorage存取
function sessionStorage(key,value){
    if(window.sessionStorage){
        if(value){
            return window.sessionStorage.setItem(key,JSON.stringify(value));
        }else{
            return JSON.parse(window.sessionStorage.getItem(key));
        }
    }else{
        alert("您的浏览器不支持sessionStorage数据缓存技术,请升级您的浏览器!")
    }
}
//校验手机号
function checkPhone(value){
    if(value){
        var reg=/^1\d{10}$/
        return reg.test(value)
    }
}
//校验身份证号
function checkIdCard(value){
    if(value){
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(value);
    }
}
//校验是不是pc
function checkPc (){
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad","iPod"];
    //var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            return false;
            break;
        }
    }
    return true;
}
//校验是不是移动端
function checkMobile (){
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad","iPod"];
    //var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            return true;
            break;
        }
    }
    return false;
}
//校验是不是ios
function checkIos() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/iPhone\sOS/i) == "iphone os";
}
//校验是不是android
function checkAndroid() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/Android/i) == "android";
}
//校验是不是微信
function checkWeiXin(){
    var ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i)=="micromessenger";
}
//校验是不是正整数
function checkPositiveInt (str) {
    var reg = /^[1-9]*[1-9][0-9]*$/;
    return reg.test(str);
}
//校验是不是整数
function checkInt (str) {
    var reg = /^-?\d+$/;
    return reg.test(str);
}
//校验是不是银行卡号 //16位或19位银行卡或信用卡号(先把空格replace为空串)
function checkBankCard (str) {
    var reg = /^\d{16}|\d{19}$/;
    return reg.test(str);
}
//限制微信打开
function weixinOpen(){
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (!isWeixin) {
        document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css">';
        document.body.innerHTML = '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
    }
}
//取出字符串中的所有空格
function removeAllSpace (str) {
    return str.replace(/\s+/g,"");
}
//获取字符串的真实长度，这个把所有双字节的都给匹配进去了
function getRealLen (str){
    str   =   str.replace(/\s+/g,"");
    return str.replace(/[^\x00-\xff]/g, '__').length;
}
//*号替代敏感字符串，性别，手机，身份证等适用
function starsReplace(str) {
    if(str.length==2){
        str="*"+str.substring(1)
    }else if(str.length>2){
        var stars=""
        for(var i=0;i<str.length-2;i++){
            stars+="*";
        }
        str=str.substring(0,1)+stars+str.substring(str.length-1,str.length);
    }
    return str;
}
//获取Url后面的参数
function getRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function arrEach (arr, fn) {
    fn = fn || Function;
    var a = [];
    var args = Array.prototype.slice.call(arguments, 1);
    for(var i = 0; i < arr.length; i++) {
        var res = fn.apply(arr, [arr[i], i].concat(args));
        if(res != null) a.push(res);
    }
    return a;
}
function arrMap (arr, fn, thisObj) {
    var scope = thisObj || window;
    var a = [];
    for(var i = 0, j = arr.length; i < j; ++i) {
        var res = fn.call(scope, arr[i], i, this);
        if(res != null) a.push(res);
    }
    return a;
}
//数组排序
function arrOrderBy(array, sortFlag) {
    var $arr = array;
    if(sortFlag == 'asc') {
        $arr.sort(function(a, b){
            return a - b;
        });
    } else if(sortFlag == 'desc') {
        $arr.sort(function(a,b){
            return b-a
        });
    } else {
        $arr.sort(function(a, b){
            return a - b;
        });
    }
    return $arr;
}
// 求两个集合的并集
function arrUnion (a, b) {
    var newArr = a.concat(b);
    return arrUnique2(newArr);
}
// 求两个集合的补集
function arrComplement (a, b) {
    return arrMinus(this.union(a, b), arrIntersect(a, b));
}
// 求两个集合的交集
function arrIntersect (a, b) {
    a = arrUnique(a);
    return this.each(a, function(o) {
        return b.contains(o) ? o : null;
    });
}
//求两个集合的差集
function arrMinus (a, b) {
    a = arrUnique(a);
    return arrEach(a, function(o) {
        return b.arrContains(o) ? null : o;
    });
}
//数组去重1
function arrUnique (arr) {
    var ra = new Array();
    for(var i = 0; i < arr.length; i++) {
        if(!ra.arrContains(arr[i])) {
            ra.push(arr[i]);
        }
    }
    return ra;
}
// 数组的去重2
function arrUnique2 (arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length;) {
            if(arr[j] == arr[i]) {
                arr.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    return arr;
}
//数组去除重复的(根据对象来)
function arrUnique3 (ary) {
    var result = [],
        hash = {};
    for(var i = 0, elem;
        (elem = arr[i]) != null; i++) {
        if(!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
//根据value获取数组的下标
function arrIndexOf (arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == val) {
            return i;
        }
    }
    return -1;
}
//判断一个元素是否在一个数组中
function arrContains (arr, val) {
    return this.indexOf(arr, val) != -1 ? true : false;
}
//删除数组中的一个元素
function arrRemoveItem (arr, indexs) {
    var index = this.indexOf(arr, indexs);
    if(index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
//删除数组中的一个对象数组中的一个object
function arrRemoveObject (arr, item) {
    for(var i = 0; i < arr.length; i++) {
        var jsonData = arr[i];
        for(var key in jsonData) {
            if(jsonData[key] == item) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}
//获取数组中的最大值
function arrMax (arr) {
    return Math.max.apply(null, arr);
}
//获取数组中的最小值
function arrMin (arr) {
    return Math.min.apply(null, arr);
}
//数组求和
function arrSum (arr) {
    var ary = [];
    var result = 0;
    if(arr instanceof Array) {
        ary = arr;
    } else {
        ary = this.formArray(arr);
    };
    for(var i = 0; i < ary.length; i++) {
        result += parseFloat(ary[i]);
    };
    return result;
}
//数组随机排序
function shuffleArr (ary) {
    var input = this;
    for(var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
//随机从数组中返回一个元素
function randomItemArr (ary) {
    return ary[Math.ceil(Math.random() * ary.length)];
}
//判断数组中是否有重复项
function isRepeatArr (arr) { //arr是否有重复元素
    var hash = {};
    for(var i in arr) {
        if(hash[arr[i]]) return true;
        hash[arr[i]] = true;
    }
    return false;
}
//获取粘贴板中的内容
 function tm_GetClipboard () {
    if(window.clipboardData) {
        return(window.clipboardData.getData('text'));
    } else {
        if(window.netscape) {
            try {
                netscape.security.PrivilegeManager
                    .enablePrivilege("UniversalXPConnect");
                var clip = Components.classes["@mozilla.org/widget/clipboard;1"]
                    .createInstance(Components.interfaces.nsIClipboard);
                if(!clip) {
                    return;
                }
                var trans = Components.classes["@mozilla.org/widget/transferable;1"]
                    .createInstance(Components.interfaces.nsITransferable);
                if(!trans) {
                    return;
                }
                trans.addDataFlavor("text/unicode");
                clip.getData(trans, clip.kGlobalClipboard);
                var str = new Object();
                var len = new Object();
                trans.getTransferData("text/unicode", str, len);
            } catch(e) {
                alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
                return null;
            }
            if(str) {
                if(Components.interfaces.nsISupportsWString) {
                    str = str.value
                        .QueryInterface(Components.interfaces.nsISupportsWString);
                } else {
                    if(Components.interfaces.nsISupportsString) {
                        str = str.value
                            .QueryInterface(Components.interfaces.nsISupportsString);
                    } else {
                        str = null;
                    }
                }
            }
            if(str) {
                return(str.data.substring(0, len.value / 2));
            }
        }
    }
    return null;
}
//往粘贴板中赋值
function tmSetClipboard (txt) {
    if(window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", txt);
    } else if(navigator.userAgent.indexOf("Opera") != -1) {
        window.location = txt;
    } else if(window.netscape) {
        try {
            netscape.security.PrivilegeManager
                .enablePrivilege("UniversalXPConnect");
        } catch(e) {
            alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
            return false;
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1']
            .createInstance(Components.interfaces.nsIClipboard);
        if(!clip)
            return;
        var trans = Components.classes['@mozilla.org/widget/transferable;1']
            .createInstance(Components.interfaces.nsITransferable);
        if(!trans)
            return;
        trans.addDataFlavor('text/unicode');
        var str = Components.classes["@mozilla.org/supports-string;1"]
            .createInstance(Components.interfaces.nsISupportsString);
        var copytext = txt;
        str.data = copytext;
        trans.setTransferData("text/unicode", str, copytext.length * 2);
        var clipid = Components.interfaces.nsIClipboard;
        if(!clip)
            return false;
        clip.setData(trans, null, clipid.kGlobalClipboard);
    }
}
// 图片等比例缩放
//  * @param ImgD 图片对象
//  * @param iwidth ：最大宽度
//  * @param iheight ：最大高度
//  * @constructor
//  */
function drawImage(ImgD, iwidth, iheight) {
    //参数(图片,允许的宽度,允许的高度)
    var image = new Image();
    image.src = ImgD.src;
    if(image.width > 0 && image.height > 0) {
        if(image.width / image.height >= iwidth / iheight) {
            if(image.width > iwidth) {
                ImgD.width = iwidth;
                ImgD.height = (image.height * iwidth) / image.width;
            } else {
                ImgD.width = image.width;
                ImgD.height = image.height;
            }
            ImgD.alt = image.width + "×" + image.height;
        } else {
            if(image.height > iheight) {
                ImgD.height = iheight;
                ImgD.width = (image.width * iheight) / image.height;
            } else {
                ImgD.width = image.width;
                ImgD.height = image.height;
            }
            ImgD.alt = image.width + "×" + image.height;
        }
    }
}

//默认暴露,此处写成对象的简写方式，否则在webpack dev编译的时候IE和安卓的自带浏览器都会报错
export default {
  localStorage:localStorage,
  sessionStorage:sessionStorage,
  checkPhone:checkPhone,
  checkIdCard:checkIdCard,
  checkPc:checkPc,
  checkMobile:checkMobile,
  checkIos:checkIos,
  checkAndroid:checkAndroid,
  checkWeiXin:checkWeiXin,
  checkPositiveInt:checkPositiveInt,
  checkInt:checkInt,
  checkBankCard:checkBankCard,
  weixinOpen:weixinOpen,
  removeAllSpace:removeAllSpace,
  getRealLen:getRealLen,
  starsReplace:starsReplace,
  getRequest:getRequest,
  arrOrderBy:arrOrderBy,
  arrUnion:arrUnion,
  arrComplement:arrComplement,
  arrIntersect:arrIntersect,
  arrMinus:arrMinus,
  arrUnique:arrUnique,
  arrUnique2:arrUnique2,
  arrUnique3:arrUnique3,
  arrIndexOf:arrIndexOf,
  arrContains:arrContains,
  arrRemoveItem:arrRemoveItem,
  arrRemoveObject:arrRemoveObject,
  arrMax:arrMax,
  arrMin:arrMin,
  arrSum:arrSum,
  shuffleArr:shuffleArr,
  randomItemArr:randomItemArr,
  isRepeatArr:isRepeatArr,
  tm_GetClipboard:tm_GetClipboard,
  tmSetClipboard:tmSetClipboard,
  drawImage:drawImage
}
