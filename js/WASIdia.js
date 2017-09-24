/*!
 * WASIdia.js -http://github.com/konnekaramu/WASI
 * Version - Beta 0.1
 *
 * Author: Wasinee
 */

var target=null;
var dialogBody="";
var OK=null;
var TEXT="";
var bgBlackdrop = "<div id='blackdrop'></div>";
var dialogTop = "<div class='wsDialog animated ###ANIMATE CLASS###'>"
				+"<div class='wsDialog-header'>###HEADER TEXT###</div>"
				+"<div class='wsClose' onClick='WASIclose()'></div>"
				+"<div class='wsDialog-body'>###BODY TEXT###</div>"
				+"<div class='wsButton-area'>";
var dialogBottom = "</div>"
				+"</div>";	
				
var dialogAlert_ok = "<button class='wsButton wsButton-OK' onClick='WASIclose()'>OK</button>";
var dialogConfirm_ok = "<button class='wsButton wsButton-OK' id='positiveButton' onClick='WASIclose()'>OK</button>";
var dialogConfirm_cancle = "<button class='wsButton wsButton-cancle' onClick='WASIclose()'>cancle</button>";
var dialogPrompt_ok = "<button class='wsButton wsButton-OK' id='sendButton' onClick='WASIclose()'>OK</button>";
var dialogPromrt_box = "<input class='wsBox' id='promptBox'/><br><br>";

var dialogBody_alert = dialogTop + dialogAlert_ok + dialogBottom;
var dialogBody_confirm = dialogTop + dialogConfirm_ok + dialogConfirm_cancle + dialogBottom;
var dialogBody_prompt = dialogTop + dialogPromrt_box + dialogPrompt_ok + dialogBottom;
	
											
function WASIalert(title,msg,animate){
	target = getTarget();
	if(target){
		dialogBody=replaceText(dialogBody_alert,title,msg,animate);		
		target.innerHTML=bgBlackdrop+dialogBody;
		lockScroll();
	}
}

function WASIconfirm(title,msg,animate){
	target = getTarget();
	if(target){
		dialogBody=replaceText(dialogBody_confirm,title,msg,animate);	
		target.innerHTML=bgBlackdrop+dialogBody;
		OK=$("#positiveButton");
		lockScroll();
	}
}

function WASIprompt(title,msg,animate){
	target = getTarget();
	if(target){
		dialogBody=replaceText(dialogBody_prompt,title,msg,animate);	
		target.innerHTML=bgBlackdrop+dialogBody;
		OK=$("#sendButton");
		TEXT=$("#promptBox");
		lockScroll();
	}
}

function WASIclose(){
	getTarget().innerHTML="";
	$('body').removeClass('noscroll');
}

function getTarget(){
	return document.getElementById("WASIdia");
}

function replaceText(template,title,msg,animate){
	template=template.replace("###ANIMATE CLASS###",animate);
	template=template.replace("###HEADER TEXT###",title);
	template=template.replace("###BODY TEXT###",msg);
	return template;
}

function lockScroll(){
	$('body').addClass('noscroll');
}
