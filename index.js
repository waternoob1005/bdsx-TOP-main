"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const colors_1 = require("colors");
// add info function ("TOP - The Only Plugin" => "[2023-04-20 13:24:13:357 INFO] TOP - The Only Plugin")
// info function은 마음대로 퍼가셔도 됩니다
// 잡것은 이성을 잃고 이런 간단한 것마자 자신의 것이라고 빽빽 우겼죠ㅋㅋㅎㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ ㅈㄹ 어이없네요
function info(text) {
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
    return console.log((0, colors_1.brightWhite)(`[${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${ms} INFO] ${text}`));
}
;
// log TOP
info((0, colors_1.yellow)("████████╗ ██████╗ ██████╗       "));
info((0, colors_1.yellow)("╚══██╔══╝██╔═══██╗██╔══██╗      "));
info((0, colors_1.yellow)("   ██║   ██║   ██║██████╔╝      "));
info((0, colors_1.yellow)("   ██║   ██║   ██║██╔═══╝       "));
info((0, colors_1.yellow)("   ██║   ╚██████╔╝██║           "));
info((0, colors_1.yellow)("   ╚═╝    ╚═════╝ ╚═╝           "));
info((0, colors_1.yellow)("made by waternoob1005, yetur5417"));
// open option.ts
event_1.events.serverOpen.on(() => {
    Promise.resolve().then(() => require("./option"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyxtQ0FBNkM7QUFFN0Msd0dBQXdHO0FBQ3hHLCtCQUErQjtBQUMvQix5RUFBeUU7QUFDekUsU0FBUyxJQUFJLENBQUMsSUFBYTtJQUN2QixlQUFlO0lBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUV2QixtQkFBbUI7SUFDbkIsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ2xCLEVBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV0TixZQUFZO0lBQ1osSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRS9CLFlBQVk7SUFDWixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDckIsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFdkcsY0FBYztJQUNkLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUvRyxjQUFjO0lBQ2QsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRS9HLFlBQVk7SUFDWixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDckIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2QyxLQUFLLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVsRixVQUFVO0lBQ1YsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ25CLEdBQUcsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRWxHLGNBQWM7SUFDZCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBQSxvQkFBVyxFQUFDLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuSCxDQUFDO0FBQUEsQ0FBQztBQUVGLFVBQVU7QUFDVixJQUFJLENBQUMsSUFBQSxlQUFNLEVBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELElBQUksQ0FBQyxJQUFBLGVBQU0sRUFBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDakQsSUFBSSxDQUFDLElBQUEsZUFBTSxFQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxJQUFJLENBQUMsSUFBQSxlQUFNLEVBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELElBQUksQ0FBQyxJQUFBLGVBQU0sRUFBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7QUFDakQsSUFBSSxDQUFDLElBQUEsZUFBTSxFQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxJQUFJLENBQUMsSUFBQSxlQUFNLEVBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0FBRWpELGlCQUFpQjtBQUNqQixjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDdEIscUNBQVEsVUFBVSxHQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBIn0=