
document.addEventListener("DOMContentLoaded", () => {

  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("myAudio");
  let is_playing = false;


  function playAudio() {

    if (!is_playing) {
      is_playing = true;
      audio
        .play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });


        playButton.src = "Assets/svg/pause_button.svg"

    } else {
      is_playing = false
      console.log("audio stop")
      audio.pause();

      playButton.src = "Assets/svg/playbutton.svg"

    }
  }

  playButton.addEventListener("click", playAudio);
});
