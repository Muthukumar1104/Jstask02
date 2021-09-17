function enter(inputs){
	document.getElementById('output').value+=inputs;
}

function clean(){
	document.getElementById('output').value="";
}

function calculate(){
	var output=document.getElementById('output').value;
	var res=eval(output);
	document.getElementById('output').value=res;
}

function del(){
	var a = document.getElementById('output').value;
    document.getElementById('output').value = a.slice(0,-1)
}
