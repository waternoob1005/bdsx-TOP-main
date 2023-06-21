import { events } from "bdsx/event";

// 이것도 애터가 NCBP를 표절한..? 앗! 이것도 NCBP에 없었군요! 깜빡했어요!
if (require("../option").useJoinMessage) {
    events.playerJoin.on((ev) => {
        ev.player.sendMessage(require("../option").joinmsg)
    })
}