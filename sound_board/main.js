const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () =>{
    //lay audio player tuong ung ra theo id ( chu y id trung voi tung sound)
    stop()
    document.getElementById(sound).play();
  })
  document.getElementById("buttons").appendChild(btn);
});

function stop() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}
