import { MinecraftPacketIds } from "bdsx/bds/packetids"
import { events } from "bdsx/event"
import { kick } from "../../bdsx-WAC-main"
import { CANCEL } from "bdsx/common"

// crasher (like NCBP??.. what? wait, this wasnt even in NCBP lol)
// NCBP... 일 줄 알았지만? 놀랍게도 이것은 NCBP가 막지 못한 강종이네요! ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

if (require("../option").useAntiCrasher) {
    events.packetRaw(MinecraftPacketIds.PlayerList).on((ptr, size, ni) => {
        if (size == 7) kick(ni, `crasher-a (Horion PlayerList Crasher)`)
    })

    const IrisCrasherStacks: any = {}

    events.packetRaw(30).on((ptr, size, ni) => {
        const pl = ni.getActor()!
        const plname = pl.getName()

        if (!IrisCrasherStacks[plname]) IrisCrasherStacks[plname] = 0
        IrisCrasherStacks[plname]++

        setTimeout(async () => {
            IrisCrasherStacks[plname]--
            if (IrisCrasherStacks[plname] < 0) IrisCrasherStacks[plname] = 0
        }, 1000)

        if (IrisCrasherStacks[plname] > 75) {
            kick(ni, `crasher-b (Iris Interact Crasher)`)
            return CANCEL
        }
    })
}