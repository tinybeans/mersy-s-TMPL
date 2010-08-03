/*
	popupウインドウ開くjs
	
	HTML側には
	<a href="hoge.html" onclick="openWin('hoge.html');return false;" onkeypress="openWin('hoge.html');return false;" title="新しいウィンドウを開きます" target="_blank">リンク</a>
	と書いてあげるといいかも
*/

function openWin(theURI) {
 PopUpWin=window.open(theURI,'theWin','scrollbars=0,width=500,height=600,resizable=1,directories=0,toolbar=0,status=1,location=0');
 PopUpWin.focus();
}