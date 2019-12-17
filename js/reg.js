$(() => {

    let regtel = /^09\d{8}$/;
    let regmail=/^[A-Za-z]\w{3,12}@[a-z]{3,8}\.[A-Za-z.]{2,}$/;
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd = /^\w{6,16}$/;
    regexp($("#tel"),regtel);
    regexp($("#mail"),regmail);
    regexp($("#nc"),regnc);
    regexp($("#msg"),regmsg);
    regexp($("#pwd"),regpwd);

    $("#surepwd").blur(() => {
        if ($("#surepwd").val()===$("#pwd").val()) {
            $("#surepwd").next().removeClass().addClass("success").html(`<i class="success_icon"></i>  輸入正確`);

        } else {
            $("#surepwd").next().removeClass().addClass("error").html(`<i class="error_icon"></i>  與前一次密碼不正確`);
        }
    });
	


});

function regexp(id,reg) {
    id.blur(() => {
        if (reg.test(id.val())) {
            id.next().removeClass().addClass("success").html(`<i class="success_icon"></i>  輸入正確`);

        } else {
            id.next().removeClass().addClass("error").html(`<i class="error_icon"></i>  重新輸入`);
        }
    })
}