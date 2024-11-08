document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const audio = document.getElementById("myAudio");

  function playAudio() {
    audio
      .play()
      .then(() => {
        console.log("Audio is playing");
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  }

  playButton.addEventListener("click", playAudio);
});
