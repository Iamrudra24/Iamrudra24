let songIndex = 0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let song=[
    
            //    not play song

      {  songName:"KhudGarji" , filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
      {  songName:"Matargasti" , filePath:"song/2.mp3" , coverPath:"covers/1.jpg"},
      {  songName:"Tere Bin" , filePath:"song/3.mp3" , coverPath:"covers/1.jpg"},
      {  songName:"KhudGarji" , filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
      {  songName:"KhudGarji" , filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
      {  songName:"KhudGarji" , filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
      {  songName:"KhudGarji" , filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
]
    masterPlay.addEventListener('click',()=>{

    if(audioElement.paused|| audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    }

    // not change button - off
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    // seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime =   myProgressBar.value*audioElement.duration/100;
})