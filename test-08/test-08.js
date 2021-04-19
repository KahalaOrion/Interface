// 10.4: Speech Recognition with p5.Speech - Programming with Text


function setup(){
	createCanvas(500,500)
	let lang = navigator.language || 'en-US';
	let speechRec = new p5.SpeechRec(lang,gotSpeech);
	speechRec.start();
	
	function gotSpeech(){
		console.log(speechRec)

	}
}



function draw(){
rect(40,40,40,40)
	
	
}

