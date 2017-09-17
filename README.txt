//HOW TO USE//

1.import file to your project root folder and include it in <header> of your page
 -WASIdia.js
 -WASIdia.css
 -animate.css
 -jquery-2.2.3.js (anyversion)
 
2.Add this line of code in <body>
  <div id="WASIdia"></div>
  
3.Call function when action
  - Alert
  WASIalert("Your dialog title","Your dialog content"); 
  //or
  WASIalert("Your dialog title","Your dialog content","fadeInDown"); //"fadeInDown" is optional some animate class name vis animate.css
  
  - Confirm
  WASIconfirm("Your dialog title","Your dialog content");
	OK.click(function(){
		//Do something when confirmed 
		
	})
	
  - Prompt
  WASIprompt("Your dialog title","Your dialog content");
	OK.click(function(){
		//Get your text and do something when confirmed 
		var myText=TEXT.val();
		
	});
    