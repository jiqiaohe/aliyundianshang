$(document).ready(function () {
    $(".flash_bar div").mouseover(function () { stopAm(); }).mouseout(function () { startAm(); });
    startAm();
});

var oldIndex = 1;
var currentindex = 1;
if (bgArray[0] == "") {
    $("#flashBg").css("background-color", "");
    $("#flashBg").css({ "background": "url(/" + bgImgArray[0] + ")" });
}
else {
    $("#flashBg").css("background", "");
    $("#flashBg").css("background-color", bgArray[0]);
}
$("#flashBg").css("background-color", $("#flash1").attr("name"));
function changeflash(i) {
    currentindex = i;
    for (j = 1; j <= totalCount; j++) {
        if (j == i) {
            $("#flash" + j).css("display", "block");
            $("#f" + j).removeClass();
            $("#f" + j).addClass("dq");
            if (bgArray[j - 1] == "") {
                $("#flashBg").css("background-color", "");
                $("#flashBg").css({"background": "url(/"+bgImgArray[j - 1]+")"});
            }
            else {
                $("#flashBg").css("background", "");
                $("#flashBg").css("background-color", bgArray[j - 1]);
            }
        }
        else {
            //$("#flash" + j).css("display", "none");
            $("#f" + j).removeClass();
            $("#f" + j).addClass("no");
        }
    }
    $("#divBanner").find("img").fadeOut(10);
    $("#flash" + i).fadeIn(800);
//    if (i == 1) {
//        $("#divBanner").append(flash1);
//    }
//    else if (i == 2) {
//        $("#divBanner").append(flash2);
//    }
//    else if (i == 3) {
//        $("#divBanner").append(flash3);
//    }
//    else if (i == 4) {
//        $("#divBanner").append(flash4);
//    }
//    else if (i == 5) {
//        $("#divBanner").append(flash5);
//    }
    
}
function startAm() {
    timerID = setInterval("timer_tick()", 3000);
}
function stopAm() {
    clearInterval(timerID);
}
function timer_tick() {
    currentindex = currentindex >= 5 ? 1 : currentindex + 1;
    changeflash(currentindex);
}
