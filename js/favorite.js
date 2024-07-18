const number = document.querySelector('p');
const countButton = document.querySelector('button');

window.addEventListener("load",()=>{
    var jsonCount = localStorage.getItem('storage'); 
    count = JSON.parse(jsonCount) 

    if(!count){  
        number.innerHTML = 0;
    }else{
        number.innerHTML = count;
    }
});

countButton.addEventListener('click',function(){
    count ++;
    number.innerHTML = count; 

    jsonCount = JSON.stringify(count); 
    localStorage.setItem('storage',jsonCount);
});


const button = document.getElementById("box");
function changeColor(){
button.classList.toggle("orange");
}




var resultID = [];
$('li').click(function(){
    var item = $(this);
    
    if(item.hasClass('active')){
        item.removeClass('active');
        
        //情報削除して保存
        for(i = 0; i < resultID.length; i++){
            if(resultID[i] == item.data('rid')){
                resultID.splice(i, 1);
            }
        }
        localStorage.setItem('listData', resultID);
    } else {
        item.addClass('active');
        
        //情報追加して保存
        resultID.unshift(item.data('rid'));
        localStorage.setItem('listData', resultID);
    }
    return false;
});

if(localStorage.getItem('listData')){
    var checkID = localStorage.getItem('listData');
    var resArray = checkID.split(",");
    $.each(resArray, function(i, val){
        $('.resultList li[data-rid='+ val +']').addClass('active');
    });
}




function OnButtonClick() {
    target = document.getElementById("output");
    target.innerHTML = "Penguin";
}




$(function() {

    var key = "font";
    var data = localStorage.getItem(key);
    if (data == "large") {
        $("body").css("font-size", "120%");
        $("#font-size li.large").addClass("current");
    } else if (data == "middle") {
        $("body").css("font-size", "100%");
        $("#font-size li.middle").addClass("current");
    } else if (data == "small") {
        $("body").css("font-size", "80%");
        $("#font-size li.small").addClass("current");
    }
    $("#font-size li").click(function() {
        $("#font-size li").removeClass("current");
        var fontSize = $(this).attr("class");
        if (fontSize == "large") {
            data = "large";
            localStorage.setItem(key, data);
            $("body").css("font-size", "120%");
            $("#font-size li.large").addClass("current");
        } else if (fontSize == "middle") {
            data = "middle";
            localStorage.setItem(key, data);
            $("body").css("font-size", "100%");
            $("#font-size li.middle").addClass("current");
        } else {
            data = "small";
            localStorage.setItem(key, data);
            $("body").css("font-size", "80%");
            $("#font-size li.small").addClass("current");
        }
    });



    $("#color li").click(function() {

        $("body").toggleClass("color");
        $("#color li").toggleClass("current");

        if ($.cookie("color_display")) {
            $.cookie("color_display", '', {
                expires: -1
            });

        } else {
            $.cookie("color_display", '1', {
                expires: 7
            });
        }
    });

    if ($.cookie("color_display")) {

        $("body").toggleClass("color");
        $("#color li").toggleClass("current");

    } else {


    }

});