$(document).ready(function(){

		$("h1").hide();

		var positions2 = ["position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9"];
		var positions1 = ["position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9"];

		var index1=0
		var index2=0
		var currPos1;
		var currPos2;

		var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";


	$(window).on("keypress", function findKey(event){
		
		
		var whichKey=event.which;
		console.log(whichKey);

		if(whichKey===97){
			
			if(currPos1){
				$(".car1").removeClass(currPos1);
				index1= index1+1;
				currPos1=positions1[index1];
				$(".car1").addClass(currPos1);
			}
			else{
				
				currPos1=positions1[index1];
				$(".car1").addClass(currPos1);
			}
			
		}
		if(index1===7){
			$(".1wins").show();
			$("body").append(rick_roll_youtube_embed_code);
		}

		if(whichKey===108){
			
			if(currPos2){
				$(".car2").removeClass(currPos2);
				index2= index2+1;
				currPos2=positions2[index2];
				$(".car2").addClass(currPos2);
			}
			else{
				
				currPos2=positions2[index2];
				$(".car2").addClass(currPos2);
			}
		}
		if(index2===7){
			$(".2wins").show();
			$("body").append(rick_roll_youtube_embed_code);
		}
	})




})