
/**
 * 快速調用scroll家族中的成員
 * 用法: scroll().top   scroll().left
 * @returns {*}
 */
function scroll() {
    if(window.pageYOffset){ // IE9+ 和最新的瀏覽器
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    }else if(document.compatMode === 'CSS1Compat'){ //  標準兼容模式開啟(嚴格模式)
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }

    return {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }

}

/**
 * 獲取標籤
 * @param {string}id
 * @returns {Element}
 */
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}

/**
 * 顯示標籤
 * @param {Element}obj
 * @returns {string}
 */
function show(obj) {
    return obj.style.display = 'block';
}

/**
 * 隱藏標籤
 * @param {Element}obj
 * @returns {string}
 */
function hide(obj) {
    return obj.style.display = 'none';
}

/**
 * 獲取可視區域的寬度和高度
 * 用法: client().width    client().width
 * @returns {*}
 */
function client() {
    if(window.innerWidth){ // IE9+ 和 最新的瀏覽器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.compatMode === 'CSS1Compat'){
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}

/**
 * 勻速動畫框架
 * @param {Object}obj
 * @param {number}target
 * @param {number}step
 */
function animate(obj, target, step) {
    // 1. 清除定時器
    clearInterval(obj.timer);

    // 2. 設置定時器
    obj.timer = setInterval(function () {
        // 2.1.0 判斷方向
        var dir = obj.offsetLeft <= target ? step : -step;

        // 2.2.1 開始動畫
        obj.style.left = obj.offsetLeft + dir + 'px';
        if(Math.abs(obj.offsetLeft - target) < step){
            // 2.2.2 清除定時器
            clearInterval(obj.timer);
            // 2.2.3 糾正偏差
            obj.style.left = target + 'px';
        }
    }, 10);
}

/**
 * 緩動動畫函數
 * @param {Object}obj
 * @param {Object}json
 * @param {function}fn
 */
function buffer(obj, json, fn) {
    // 1. 清除定時器
    clearInterval(obj.timer);
    var begin = 0, end = 0;

    // 2. 設置定時器
    obj.timer = setInterval(function () {
        // 2.0 旗幟, 決定動畫是否結束
        var flag = true;
        // 2.1 遍歷
        for(var k in json){
            // 2.2.-1 求出起始值 和 結束值
            if(k === 'opacity'){ // 透明度
                //console.log(typeof(getCssAttr(obj, k)));
                begin = parseInt( parseFloat(getCssAttr(obj, k)) * 100);
                end = parseInt(parseFloat(json[k]) * 100);
            }else if(k === 'scrollTop'){ // 滾動到頭部
                begin = obj.scrollTop;
                end = parseInt(json[k]);
            }else { // 正常情況
                begin = parseInt(getCssAttr(obj, k));
                end = parseInt(json[k]);
            }
            // 2.2.0 求出步長
            var step = (end - begin) * 0.2;
            step = step >=0 ? Math.ceil(step) : Math.floor(step);
            // 2.2.1 計算起始位置
            if(k === 'opacity'){
                obj.style.opacity = (begin + step) / 100;
                obj.style.filter = 'alpha(opacity=' + (begin + end)+')'; // 針對IE
            }else if(k === 'scrollTop'){
                obj.scrollTop = begin + step;
            }else if(k === 'zIndex'){
                obj.style[k] = json[k];
            }else {
                obj.style[k] = begin + step + 'px';
            }

            // 2.2.2 判斷
            if(begin !== end){
                flag = false;
            }
        }

        // 3.0 結束動畫
        if(flag){
            clearInterval(obj.timer);
            // 開啟動畫組中的下一組動畫
            if(fn){ // 判斷有沒有這個函數
                fn();
            }
        }
    }, 60);
}

/**
 * 獲取css的樣式屬性值
 * @param {Object}obj
 * @param {string}attr
 * @returns {*}
 */
function getCssAttr(obj, attr) {
    if(obj.currentStyle){ // IE 和 Opera
        return obj.currentStyle[attr];
    }else { // 遵循W3C的
        return window.getComputedStyle(obj, null)[attr];
    }
}


/*
 * 判斷瀏覽器
 */
function getOs() {
    var OsObject = "";
    if (isIE = navigator.userAgent.indexOf("MSIE") != -1) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") != -1) {
        return "Firefox";
    }
    if (isChrome = navigator.userAgent.indexOf("Chrome") != -1) {
        return "Chrome";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") != -1) {
        return "Safari";
    }
    if (isOpera = navigator.userAgent.indexOf("Opera") != -1) {
        return "Opera";
    }
}
