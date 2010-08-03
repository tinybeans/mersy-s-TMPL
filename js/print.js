function printWin(){
	window.open(window.location.href,"printWindow");
}

if(window.name == "printWindow"){
	document.write('<link rel="stylesheet" href="/css/alternate/print.css" type="text/css" media="all" />');
}
