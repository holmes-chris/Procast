import clearDay from "./images/clearDay.mp4"
import clearNight from "./images/clearNight.mp4"
import cloudyDay from "./images/cloudyDay.mp4"
import cloudyNight from "./images/cloudyNight.mp4"
import rainDay from "./images/rainDay.mp4"
import rainNight from "./images/rainNight.mp4"
import snowDay from "./images/snowDay.mp4"
import snowNight from "./images/snowNight.mp4";
import stormDay from "./images/stormDay.mp4";
import stormNight from "./images/stormNight.mp4"

const backgroundData = {
    clear : {"clearDay": clearDay, "clearNight": clearNight},
    cloudy: {"cloudDay": cloudyDay, "cloudNight": cloudyNight},
    rain: {"rainDay": rainDay, "rainNight": rainNight},
    snow: {"snowDay": snowDay, "snowNight": snowNight},
    storm: {"stormDay": stormDay, "stormNight": stormNight}
}

export {backgroundData}