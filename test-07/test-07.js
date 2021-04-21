//The Cocing Train 10.4: Speech Recognition with p5.Speech - Programming with Text

var speakButton;
var textSlider;




function setup(){
	createCanvas(500,500)
	


	speakButton = createButton("text");
  	speakButton.mousePressed(speechText) 

  	  textSlider = createSlider(0,300,0); 
	
	
	
}

function speechText(){
	let lang = navigator.language || 'en-US';
	let speechRec = new p5.SpeechRec(lang,gotSpeech);
	speechRec.start();

	function gotSpeech(){
		console.log(speechRec)
		if (speechRec.resultValue){
			
			let vText = speechRec.resultString;

			textAlign(CENTER);
			textFont("helvetica")
			textSize(30)
			text(vText.toUpperCase(), 10,textSlider.value(),200,200)
			

		}

	}

}


function draw(){
	
	
}

