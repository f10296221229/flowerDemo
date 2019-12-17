
(function (window) {

    //使用選項卡
    tab();

    //動態建立元素

    autoCreateImg();

    //瀑布流
    setTimeout(function () {
        waterFull("dom_pull","box");
    },1000);

    //
    // window.onscroll=function () {
    //
    //     if (checkWillLoadImg()){
    //         autoCreateImg();
    //         waterFull("dom_pull","box");
    //     }
    // };


    var begin=0,end=0,timer=null,scrollTop=0;

    window.onscroll = function () {


        // 視窗滾動
        if (checkWillLoadImage()) {
            autoCreateImg();
            waterFull("dom_pull", "box");
        }

        //吸頂效果
        var scrollTop=scroll().top;

        var quick_login_len=$("quick_login").offsetTop+$("quick_login").offsetHeight;
        if (scrollTop>=quick_login_len-10){
            $("top_nav").style.display="block";
            $("elevator_item").children[0].style.display="block";
        }else {
            $("top_nav").style.display="none";
            $("elevator_item").children[0].style.display="none";
        }



        // console.log(begin);

    };



    $("elevator").onclick=function () {

        scrollTop=scroll().top;

        begin=scrollTop;

        clearInterval(timer);

        timer=setInterval(function () {

            begin=begin+(end-begin)/20;

            window.scrollTo(0,begin);

            if (Math.round(begin)===end){

                clearInterval(timer);
            }


        },20);
    };

//    監聽登入按鈕

    $("login").onclick=function () {
        $("mask").style.display="block";
    };

    $("close_btn").onclick=function () {
        $("mask").style.display="none";
    };

    bannerautoPlay();

})(window);

//自動輪播

function bannerautoPlay() {

//    得到li所有標籤
    var lis=$("slider_banner").getElementsByTagName("li");
    var index=0;


    setInterval(function () {

        for (let i = 0; i < lis.length; i++) {

            buffer(lis[i],{"opacity":0},null);
        }

        buffer(lis[index],{"opacity":1},null);


        index++;
        if (index===lis.length){
            index=0;
        }


    },2000);

}



function tab() {

//    獲得需要標籤

    var allLis = $("tab_header").getElementsByTagName("li");


    var doms = $("tab_content").getElementsByClassName("dom");

    var lastOne = 0;

    for (let i = 0; i < allLis.length; i++) {

        var li = allLis[i];
        (function (i) {
            li.onmousedown = function () {
                // for (let j = 0; j < allLis.length; j++) {
                //
                //     allLis[j].className="";
                // }
                //
                // this.className="current";
                allLis[lastOne].className = "";
                doms[lastOne].style.display="none";

                this.className = "current";
                doms[i].style.display="block";
                lastOne = i;
            }

        })(i);
    }

}


function autoCreateImg() {

    //數據
    var json = [
        {txt: '當我們正在為生活疲於奔命的時候，生活已經離我們而去。——約翰·列儂', pic: 'images/0.jpg'},
        {txt: '活在世上，不必什麼都知道，只知道最好的就夠了。——王小波', pic: 'images/1.jpg'},
        {txt: '世界上任何書籍都不能帶給你好運，但是它們能讓你悄悄變成你自己。——黑塞', pic: 'images/2.jpg'},
        {txt: '很多人不需要再見，只是路過而已。——《彼岸花》', pic: 'images/3.jpg'},
        {txt: '人生最困難的三件事：保守秘密，忘掉所受的創傷，充分利用餘暇。——吉羅', pic: 'images/4.jpg'},
        {txt: '有些人是離開後，才會發覺那個人是最喜歡的。——《東邪西毒》', pic: 'images/5.jpg'},
        {txt: '我總是在日暮時分,書影與書影之間,寧靜的悲哀裡,最想念你。——亦舒', pic: 'images/6.jpg'},
        {txt: '再長的路，一步步地能走完，再短的路，不邁開雙腳也無法到達。', pic: 'images/7.jpg'},
        {txt: '哪裡會有人喜歡孤獨，不過是不喜歡失望。——村上春樹', pic: 'images/8.jpg'},
        {txt: '人時已盡，人世很長，我在中間，應當休息。——顧城', pic: 'images/9.jpg'},
        {txt: '信任的深淺，不在於會不會對你笑，而在於願不願意在你面前哭。', pic: 'images/10.jpg'},
        {txt: '有一種旅行，不為跋涉千里的嚮往，只為漫無目的的閒逛，不為人山人海的名勝，只為怡然自樂的街景...', pic: 'images/11.jpg'},
        {txt: '人都會孤獨，但唯獨他，可以越過這塵世的熱鬧，一眼明白這世間所有的繁華不過是他身邊的過眼雲煙。', pic: 'images/12.jpg'},
        {txt: '不亂於心，不困於情。不畏將來，不唸過往。如此，安好。', pic: 'images/13.jpg'},
        {txt: '每一個人都需要這樣一個朋友：當以為自己再也笑不出來的時候，他能讓你開懷大笑！', pic: 'images/14.jpg'},
        {txt: '咖啡苦與甜，不在於怎麼攪拌，而在於是否放糖；一段傷痛，不在於怎麼忘記，而在於是否有勇氣重新開始。', pic: 'images/15.jpg'},
        {txt: '其實我不是一定要等你，只是等上了，就等不了別人了。——《朝露若顏》', pic: 'images/16.jpg'},
        {txt: '一切都是瞬間，一切都會過去，一切過去了的都會變成親切的懷念。——普希金', pic: 'images/17.jpg'},
        {txt: '多少人曾愛慕你年輕時的容顏，可知誰願承受歲月無情的變遷', pic: 'images/18.jpg'},
        {txt: '不在任何東西面前失去自我，哪怕是教條，哪怕是別人的目光，哪怕是愛情。——《成為簡·奧斯汀》', pic: 'images/19.jpg'},
        {txt: '你如果認識從前的我，也許你會原諒現在的我。——張愛玲', pic: 'images/20.jpg'},
        {txt: '簡約不是少，而是沒有多餘。足夠也不是多，而是剛好你在。', pic: 'images/21.jpg'},
        {txt: '若只是喜歡 何必誇張成愛。——林夕', pic: 'images/22.jpg'},
        {txt: '夢裡出現的人，醒來時就該去見她，生活就是這麼簡單。——《新橋戀人》', pic: 'images/23.jpg'},
        {txt: '與眾不同的你是幸運的，何必讓自己變得與別人一樣。', pic: 'images/24.jpg'},
        {txt: '陽光溫熱，歲月靜好，你還不來，我怎敢老。', pic: 'images/25.jpg'},
        {txt: '一個人知道自己為什麼而活，就能忍受任何生活。——尼采', pic: 'images/26.jpg'},
        {txt: '我們已經出發了太久，以至於我們忘了為什麼要出發。——紀伯倫', pic: 'images/27.jpg'},
        {txt: '水來，我在水中等你；火來，我在灰燼中等你。——《你是我的獨家記憶》', pic: 'images/28.jpg'},
        {txt: '天下就沒有偶然，那不過是化了妝的，戴了面具的必然。——錢鍾書', pic: 'images/29.jpg'}
    ],str,txt,pic,htmlstr;

    for (let i = 0; i < 30; i++) {
    //    取出圖片地址和文字

        str=$("dom_pull").innerHTML;

        console.log(str);

         txt=json[i].txt;

         pic=json[i].pic;

         htmlstr="<div class='box'>"+
                    "<div class='pic'>"+
                        "<img src='"+pic+"' alt=''>"+
                        "<div class='cover'></div>"+
                    "</div>"+
                    "<p>"+txt+"</p>"+
                    "<div class='btn-box'>"+
                        "<a href='' class='collect'>採集</a>"+
                        "<a href='' class='like'>"+
                            "<span class='heart'></span>"+
                        "</a>"+
                    "</div>"+
             "</div>";
         //拼接
         str+=htmlstr;

        $("dom_pull").innerHTML=str;


        var warpBox=$("dom_pull").getElementsByClassName("box");


        for (let j = 0; j < warpBox.length; j++) {

            warpBox[j].onmouseover=function () {

                this.childNodes[0].childNodes[1].style.display="block";
                this.childNodes[2].style.display="block";

            };
            warpBox[j].onmouseout=function () {
                this.childNodes[0].childNodes[1].style.display="none";
                this.childNodes[2].style.display="none";
            }
        }


    }
    
    
}