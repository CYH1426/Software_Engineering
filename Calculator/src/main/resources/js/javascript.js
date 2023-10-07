function $(id){return document.getElementById(id);}
var str;
var result;
var is_sin = false;
var is_cos= false;
var is_tan= false;
var angle;
function display(str0)	//显示到文本框
{
    str = document.getElementById("text");
    if (isNaN(parseInt(str.value.charAt(0)))&&str.value.charAt(0)!=='-'
        &&str.value.charAt(0)!=='('){
        str.value="";
}
    str.value = str.value + str0;
}

function equals()	//等于
{
    str = document.getElementById("text");

    if (is_sin === true){
        sin_cal(str);
    }else if(is_cos === true){
        cos_cal(str);
    }else if (is_tan === true){
        tan_cal(str);
    }else {
        result = eval(str.value);
        str.value = result;
    }

}

function back()		//退格
{
    str = document.getElementById("text");
    str.value = str.value.substring(0, str.value.length - 1);
}

function reset()	//清除
{
    str = document.getElementById("text");
    str.value = "";
}

function sin(){
    str = document.getElementById("text");
    str.value = "sin";
    is_sin = true;
}

function cos(){
    str = document.getElementById("text");
    str.value = "cos";
    is_cos = true;
}

function tan(){
    str = document.getElementById("text");
    str.value = "tan";
    is_tan = true;
}

function sin_cal(str0){
    is_sin = false;
    angle = eval(str.value);
    result = Math.sin(angle * (Math.PI / 180));
    str.value = result;
}

function cos_cal(str0){
    is_cos = false;
    angle = eval(str.value);
    result = Math.cos(angle * (Math.PI / 180));
    str.value = result;
}

function tan_cal(str0){
    is_tan = false;
    angle = eval(str.value);
    result = Math.tan(angle * (Math.PI / 180));
    str.value = result;
}

function power(){
    str = document.getElementById("text");
    if (str.value.charAt(0)==='-'){
        str.value = str.value.substring(1);
    }
    str.value = str.value + "**";
}