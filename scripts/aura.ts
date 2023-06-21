import { events } from "bdsx/event"
import { CANCEL } from "bdsx/common"
import { kick, useros } from "../../bdsx-WAC-main"

// 이것의 출처는 놀랍게도 NCBP라네요! 잡것의 육안으로 보이다니!

if (require("../option").useAntiAura) {
    const AuraBStacks: any = {}
    const AuraCStacks: any = {}

    events.chestOpen.on((ev) => {
        const plname = ev.player.getName()
        const ni = ev.player.getNetworkIdentifier()

        if (useros[plname].includes(`WINDOWS`) && ev.player.getRotation().x < 0) kick(ni, `aura-a (chestaura)`)
    })

    events.playerAttack.on((ev) => {
        const ni = ev.player.getNetworkIdentifier()
        const plname = ni.getActor()!.getName()

        if (!AuraBStacks[plname]) AuraBStacks[plname] = 0

        if (ni.getActor()!.getRotation().x < 0 && useros[plname].includes(`WINDOWS`)) {
            AuraBStacks[plname]++
            return CANCEL
        }

        setInterval(async () => {
            AuraBStacks[plname]--
            if (AuraBStacks[plname] < 0) AuraBStacks[plname] = 0
        }, 1000)

        if (AuraBStacks[plname] > 10) kick(ni, `aura-b (horion aura | ${ni.getActor()!.getRotation().x})`)
        if (!AuraCStacks[plname]) AuraCStacks[plname] = 0

        setInterval(async () => {
            AuraCStacks[plname]--
            if (AuraCStacks[plname] < 0) AuraCStacks[plname] = 0
        }, 1000)

        if (ni.getActor()!.getRotation().x === 0 && useros[ni.getActor()!.getName()].includes(`WINDOWS`)) AuraCStacks[plname]++
        if (AuraCStacks[plname] > 0) kick(ni, `aura-c (iris killaura | ${ni.getActor()!.getRotation().x})`)
    })
}