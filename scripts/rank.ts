import { Form } from "bdsx/bds/form"
import { MinecraftPacketIds } from "bdsx/bds/packetids"
import { CANCEL } from "bdsx/common"
import { events } from "bdsx/event"
import { bedrockServer } from "bdsx/launcher"

// 이것도 NCBP... 아 이건 없군요! 참! 이것도 잡것이 억지로 놀릴 줄 알았거든요!

if (require("../option").useRank) {
    const userRank: any = {}

    events.packetBefore(MinecraftPacketIds.Text).on((ptr, ni) => {
        const username = ni.getActor()!.getName()

        if (userRank[username] == null || userRank[username] == `` || userRank[username] === undefined) userRank[username] = `§7칭호 없음`

        if (ptr.message == `!칭호`) {
            bedrockServer.executeCommand(`tellraw "${username}" {"rawtext":[{"text":"§l[ §b3초 후 칭호메뉴가 열립니다. 채팅창을 닫아주세요 §f]"}]}`);

            const twosecond = setTimeout(() => {
                bedrockServer.executeCommand(`tellraw "${username}" {"rawtext":[{"text":"§l[ §b2초 후 칭호메뉴가 열립니다. 채팅창을 닫아주세요 §f]"}]}`);
            }, 1000)

            const onesecond = setTimeout(() => {
                bedrockServer.executeCommand(`tellraw "${username}" {"rawtext":[{"text":"§l[ §b1초 후 칭호메뉴가 열립니다. 채팅창을 닫아주세요 §f]"}]}`);
            }, 2000)

            const showui = setTimeout(async () => {
                const res = await Form.sendTo(ni, {
                    type: "custom_form",
                    title: "§l칭호 설정",
                    content: [
                        {
                            type: "input", text: "§l§f칭호 입력", default: ""
                        },
                    ],
                });

                if (res === null) return
                userRank[username] = res[0]
            }, 3000)

            events.serverStop.on(() => {
                clearTimeout(twosecond)
                clearTimeout(onesecond)
                clearTimeout(showui)
            })

            return CANCEL
        } else {
            bedrockServer.executeCommand(`tellraw "${username}" {"rawtext":[{"text":"§l[ ${userRank[username]} §r§7/ §r${username} §r] ${ptr.message}"}]}`)
            return CANCEL
        }
    })
}