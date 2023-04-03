import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");
const currentTime = localStorage.getItem("videoplayer-current-time");

if (currentTime !== null) {
  player.setCurrentTime(currentTime).catch((error) => {
    console.error(error);
  });
}
player.on(
  "timeupdate",
  throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
  }, 1000)
);