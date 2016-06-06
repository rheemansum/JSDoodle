		//Initialize variables of the number of displays to 4
		var displayCount = 4;
		var displayFraction;
		
		//The buttonClick function takes the textarea id and toggles the display to visible or hidden
		function buttonClick(textId){
			$(textId).toggle(50,function(){
				//if the display is hidden, reduce the number of displays variable by 1
				if($(this).css("display")=="none"){
					console.log($(this).css("display"));
					displayCount -= 1;
				}
				//if the display is visible, increase the number of displays variable by 1
				else{
					console.log($(this).css("display"));
					displayCount += 1;
				}
				//the percentage of the container that the textarea will occupy is 100 divided by the number of displays visible
				displayFraction = 95/displayCount;
				$(".content-box").css("width",displayFraction+'%');			
				
			});						
		}
		function updateOutput(){
			document.getElementById("output-text").contentDocument.getElementsByTagName('head')[0].innerHTML = "<style 'type/css'>" + document.getElementById("css-text").value + "</style>";
			document.getElementById("output-text").contentDocument.getElementsByTagName('body')[0].innerHTML = document.getElementById("html-text").value;
			document.getElementById("output-text").contentWindow.eval($("#js-text").val());
			
		}
		

		//clicking the button will call the buttonClick function and pass the associated textarea id
		$("#html-button").click(function(){
			$(this).toggleClass("buttonOn");
			buttonClick("#html-text");
		});
		$("#css-button").click(function(){
			$(this).toggleClass("buttonOn");
			buttonClick("#css-text");
		});
		$("#js-button").click(function(){
			$(this).toggleClass("buttonOn");
			buttonClick("#js-text");
		});
		$("#output-button").click(function(){
			$(this).toggleClass("buttonOn");
			buttonClick("#output-text");
		});
		
		//update the output-text area on the event of any change
		//UPDATE this because this may not be the best way to dynamically update the text area.

		$("textarea").on("change keyup paste", function(){
			updateOutput();
		});