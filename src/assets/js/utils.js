'use strict'
/**
 *封装兼容三端native方法
 */

const nativeFunc = (app, wx) => {
    let deviceType = app.getDeviceType();
    let URL_HEAD = "";
    let URL_ORIGIN = location.origin;
    if (URL_ORIGIN == "https://sus.secooart.com") {
        URL_HEAD = "https://sus.secooart.com/19707/game/lucky";
    } else {
        URL_HEAD = "https://game.secoo.com/lucky";
    }
    return {
        //当前地址
        URL_HEAD: URL_HEAD,
        // 设备类型
        deviceType: deviceType,
        // 关闭页面
        closePage(num = 1) {
            switch (deviceType) {
                case 'android':
                    {

                        jsBridge.callHandler(
                            'JsCallNativeMethod', {
                                "action": "closePage",
                                "data": {
                                    count: num
                                }
                            });
                        break;
                    }
                case 'ios':
                    {
                        jsBridge.callHandler(
                            'JsCallNativeMethod', {
                                "action": "closePage",
                                "data": {
                                    count: num
                                }
                            });
                        break;
                    }
                case 'miniProgram':
                    {
                        wx.miniProgram.navigateBack({
                            delta: num
                        });
                        break;
                    }
                default:
                    {
                        window.history.go(-num);
                        break;
                    }
            }
        },

        // loading动画控制函数
        showLoading(flag = true) {
            let loading = document.getElementById('loading');
            if (!loading) {
                let temp = document.createElement('div');
                temp.setAttribute('id', 'loading');
                temp.classList.add('loading');
                document.body.appendChild(temp);
                loading = document.getElementById('loading');
                loading.addEventListener('touchmove', function (e) {
                    e.preventDefault();
                }, false);
            }
            loading.style.display = flag ? 'block' : 'none';
        },

        // H5获取内存存储item;
        getMemoryItem(key, callback) {
            if (app.newVersion) {
                jsBridge.callHandler(
                    'JsCallNativeMethod', {
                        "action": "getMemoryItem",
                        "data": {
                            "key": String(key),
                            "fallback": ''
                        }
                    },
                    function (res) {
                        callback && callback(res.data.value);
                    });
            } else {
                callback && callback(localStorage.getItem(String(key)));
            }
        },

        // H5设置内存存储item；
        setMemoryItem(key, value) {
            if (app.newVersion) {
                jsBridge.callHandler(
                    'JsCallNativeMethod', {
                        "action": "setMemoryItem",
                        "data": {
                            "key": String(key),
                            "value": String(value)
                        }
                    });
            } else {
                localStorage.setItem(String(key), String(value));
            }
        },

        // 禁止或者开启下拉刷新
        isRefresh(flag) {
            switch (deviceType) {
                case 'ios':
                    { // 禁止下拉刷新
                        jsBridge.callHandler(flag ? 'WVJS_setupRefreshHeader' : 'WVJS_removeRefreshHeader'); // 禁止下拉刷新
                        jsBridge.callHandler('WVJS_setWebViewBounces', false); // 禁止ios页面自带的回弹效果；
                        break;
                    }
                case 'android':
                    { // 禁止下拉刷新
                        if (app.newVersion)
                            jsBridge.callHandler('JsCallNativeMethod', {
                                'action': flag ? 'enableRefresh' : 'disableRefresh'
                            });
                        break;
                    }
            }
        },

        // 登录封装
        login(thisObj, miniProgramNotBoundPhone) {
            if (miniProgramNotBoundPhone == "miniProgram") {
                let href = window.location.href;
                wx.miniProgram.navigateTo({ url: "/pages/account/loginAccount/loginAccount?toSource=onlyphone&_wxurl=" + encodeURIComponent(href) });
                return;
            }
            let that = this;
            app.getUpk((sid) => {
                if (sid) {
                    window.upk = encodeURIComponent(sid);
                    thisObj.upk = encodeURIComponent(sid);
                    if (miniProgramNotBoundPhone == "notMini") {
                        console.log(thisObj.getIndexData)
                        thisObj.getIndexData();
                    }
                } else {
                    console.log(deviceType, "deviceType", deviceType === "miniProgram")
                    if (deviceType === "miniProgram") {
                        let href = window.location.href;
                        // wx.miniProgram.navigateTo({
                        //     url: '/pages/account/phone/main?_wxurl=' + encodeURIComponent(href.replace(/&_wxupk[\s\S]*/, ''))
                        // });
                        wx.miniProgram.navigateTo({ url: "/pages/account/loginAccount/loginAccount?toSource=onlyphone&_wxurl=" + encodeURIComponent(href) });
                    } else {
                        if (!app.deviceType.inApp && URL_ORIGIN == "https://sus.secooart.com") {
                            window.location.href = URL_ORIGIN + "/v1/login/?redirect_uri=" + encodeURIComponent(window.location.href);
                        } else {
                            app.login(() => {
                                that.login(thisObj, miniProgramNotBoundPhone);
                            });
                        }

                    }
                    //app.toast('您还未登录寺库账号');
                }
            });
        },

        // 跳转页面封装
        goPage(url) {
            // let url = 'http://10.0.8.218:8080/release.html?type=resell';
            let miniUrl = '';
            // H5跳转小程序页面
            if (url.indexOf('/pages') > -1) {
                miniUrl = url;
            } else {
                // H5跳转H5
                miniUrl = '/pages/web/webView?url=' + encodeURIComponent(url);
            }
            // wx.miniProgram.navigateTo({
            //   url: miniUrl
            // });
            app.goPage({
                type: deviceType === 'miniProgram' ? 'miniPage' : 'url',
                url: deviceType === 'miniProgram' ? miniUrl : url
            });
        },

        // 页面可见性
        bindPageShow(callback) {
            // M站检测不到返回，所以检测pageshow事件；
            window.addEventListener('pageshow', (ev) => {
                if (ev.persisted) callback && callback();
            });
            // 页面可见性监听；
            document.addEventListener("visibilitychange", () => {
                if (!document.hidden) callback && callback();
            });
        }
    };
};
const commonFunc = () => {
    return {
        // 函数防抖
        debounce(method, delay) {
            let timer = null;
            return () => {
                let args = arguments;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    method.apply(this, args);
                }, delay);
            }
        },

        // 价格处理函数123,345.67
        dealPrice(price) {
            let pricegroup = String(price).split('.');
            let integer = pricegroup[0].toString().replace(/(\d)(?=(\d{3})+$)/gi, '$1,');
            integer = pricegroup[0] ? integer : ' ';
            let decimalTemp = pricegroup[1] && parseFloat('0.' + pricegroup[1].substring(0, 2)).toString();
            let decimal = pricegroup[1] ? decimalTemp == 0 ? ' ' : decimalTemp.substring(1) : ' ';
            return {
                integer: integer,
                decimal: decimal
            };
        },
        /**
         * @description 格式化数字,小数位不足被0
         * @param {Number} num 被格式化的数字【必选】
         * @param {Number} decimal  小数位【可选】
         * @param {Number} round 如何舍入 可选值为1，0，-1 ,465分别表示：只入不舍ceil,四舍五入round，只舍不入floor,四舍六入五留双【可选】
         * @return {String} 被格式化后的字符串型的数字
         * @example SEC.number.format(123.456,2,0);
         */
        numFormat(num, decimal, round) {
            let pow = undefined;
            decimal = typeof (decimal * 1) !== 'number' || isNaN(decimal * 1) ? 2 : Math.abs(decimal);
            pow = Math.pow(10, decimal);
            num *= 1;
            //f_num处理浮点数问题，能保证保留10位小数以内计算得到正常结果
            let f_num = 0.000000000099999;
            switch (round) {
                case 1:
                    {
                        num = Math.ceil(num * pow) / pow;
                        break;
                    }
                case -1:
                    {
                        num = Math.floor(num * pow + f_num) / pow;
                        break;
                    }
                case 465:
                    {
                        // 四舍六入五成双,如保留两位小数，第三位小数如果是5，则看第二位是奇偶，如果是奇，则进位，否则舍去
                        let is_jo = Math.floor(num * pow + f_num) % 10 % 2;
                        // 要进位上数字是否是5
                        let is_five = Math.floor(num * pow * 10 + f_num) % 10 == 5;
                        let step = is_five && !is_jo ? 1 / pow : 0;
                        num = this.numFormat(num, decimal) - step;
                        break;
                    }
                default:
                    num = (num * pow + f_num) / pow;
            }
            return (num.toFixed(decimal) + '').replace(/^\./g, '0.').replace(/\.$/, '');
        },
        /**
         * @description 计算字符串长度，中文字符算两个
         * @example SEC.string.len('adf2asd中国')
         * @param {String} str 字符串【必选】
         * @return {Number} 字符串的长度
         */
        stringLen(str) {
            return str.replace(/[^\x00-\xff]/g, '--').length;
        },
        // \n => <br>
        nTobr(str) {
            return str.replace(/(\n)/ig, '<br>');
        },
        // <br> => \n
        brTon(str) {
            return str.replace(/<br>/ig, '\n');
        }
    }
};
// 节流函数
const throttle = (context, method, delay) => {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context)
    }, delay)
};
export default {
    nativeFunc,
    commonFunc,
    throttle
}