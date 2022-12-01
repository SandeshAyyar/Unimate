const button=document.querySelector("button");
const speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new speechRecognition();
recognition.interimResults=false;
recognition.onstart = function (){
    console.log("speech recognition started");
};
recognition.onresult = function(event){
    console.log(event);
    const spokenwords=event.results[0][0].transcript;
    console.log("spoken words are ",spokenwords);
    computerspeech(spokenwords);
};
function can(speech,words){
    if(words.includes("what can you do for me")||words.includes("hey unimate")){
        speech.text="welcome to unimate, dear.... i can do anything";
    }
    if(words.includes("what is your name")){
        speech.text="my name is unimate,what's your name";
    }
    if(words.includes("how are you")){
        speech.text="i am fine, how are you?";
    }
    if(words.includes("bye")){
        speech.text="bye.... see you soon";
    }
}
function computerspeech(words){
    const speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";
    speech.pitch=0.9;
    speech.volume=1;
    speech.rate=1;
    // speech.text="how are you";
    can(speech,words);
    setTimeout(()=>{
        recognition.start()
    },2000)
    window.speechSynthesis.speak(speech);
}
button.addEventListener("click",()=>{
    recognition.start();
});
// window.addEventListener("load",()=>{
//     recognition.start();
// });