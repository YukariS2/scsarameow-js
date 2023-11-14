function playAudio(audioID){
    alert(audioID);

    const audio = document.getElementById(audioID);

    if(audio == true){
        audio.play();
    }else{
        alert(audioID);
    }
}