import { events } from "bdsx/event";
import { brightWhite, yellow } from "colors";

// add info function ("TOP - The Only Plugin" => "[2023-04-20 13:24:13:357 INFO] TOP - The Only Plugin")
// info function은 마음대로 퍼가셔도 됩니다
// 잡것은 이성을 잃고 이런 간단한 것마자 자신의 것이라고 빽빽 우겼죠ㅋㅋㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ ㅈㄹ 어이없네요
function info(text : string) {
    // get new Date
    let today = new Date();

    // get Milliseconds
    let ms = "ERROR!";
    ms = 1 == today.getMilliseconds().toString().length ? "00" + today.getMilliseconds() : 2 == today.getMilliseconds().toString().length ? "0" + today.getMilliseconds().toString() : today.getMilliseconds().toString();

    // get years
    let year = today.getFullYear();

    // get hours
    let hours = `ERROR!`;
    hours = 1 == today.getHours().toString().length ? "0" + today.getHours() : today.getHours().toString();

    // get minutes
    let minutes = "ERROR!";
    minutes = 1 == today.getMinutes().toString().length ? "0" + today.getMinutes() : today.getMinutes().toString();

    // get seconds
    let seconds = "ERROR!";
    seconds = 1 == today.getSeconds().toString().length ? "0" + today.getSeconds() : today.getSeconds().toString();

    // get month
    let month = "ERROR!";
    const monthtest = today.getMonth() + 1;
    month = 1 == monthtest.toString().length ? "0" + monthtest : monthtest.toString();

    // get day
    let day = "ERROR!";
    day = 1 == today.getDate().toString().length ? "0" + today.getDate() : today.getDate().toString();

    // console log
    return console.log(brightWhite(`[${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${ms} INFO] ${text}`));
};

// log TOP
info(yellow("████████╗ ██████╗ ██████╗       "));
info(yellow("╚══██╔══╝██╔═══██╗██╔══██╗      "));
info(yellow("   ██║   ██║   ██║██████╔╝      "));
info(yellow("   ██║   ██║   ██║██╔═══╝       "));
info(yellow("   ██║   ╚██████╔╝██║           "));
info(yellow("   ╚═╝    ╚═════╝ ╚═╝           "));
info(yellow("made by waternoob1005, yetur5417"));

// open option.ts
events.serverOpen.on(() => {
    import ("./option")
})
