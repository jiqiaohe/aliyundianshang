$(function () {
    var showIndex = 0;
    var ulArray = $("#main-top-center-right-nav ul");
    $("#nav li").hover(
        function () {
            $(this).find("ul").show();
        }, function () {
            $(this).find("ul").hide();
        }
    );
});
//图片切换
function swichImg(index) {
    for (var i = 1; i <=4; i++) {
        $("#spanImg" + i).hide();
    }
    $("#spanImg" + index).show();
}