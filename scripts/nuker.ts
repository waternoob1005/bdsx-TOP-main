import { NetworkIdentifier } from "bdsx/bds/networkidentifier"
import { kick } from "../../bdsx-WAC-main"
import { events } from "bdsx/event"
import { EnchantUtils, EnchantmentNames } from "bdsx/bds/enchants"
import { MobEffectIds } from "bdsx/bds/effects"

// 출처 bdsx-2 module
// bdsx-2 module가 아닌 NCBP??? 헉! 애터가 배꼈군요! ㅎㄷㄷㄷ

const bps = new Map<NetworkIdentifier, number[]>()

setInterval(() => {
    for (let [ni, clicks] of bps) {
        for (let time of clicks) {
            if ((new Date().getTime() - time) >= 1000) clicks.splice(clicks.indexOf(new Date().getTime()))
        }

        if (clicks.length >= 18) return kick(ni, `nuker (${bps})`)
    }
}, 1000).unref()

events.blockDestroy.on((ev) => {
    const ni = ev.player.getNetworkIdentifier()
    const pl = ni.getActor()!
    const hasEfficiency = EnchantUtils.hasEnchant(EnchantmentNames.Efficiency, pl.getMainhandSlot());
    const hasHaste = pl.hasEffect(MobEffectIds.Haste)

    try {
        if (ev.player.getGameType() !== 1 && ev.player.getGameType() !== 4) {
            if (hasEfficiency || hasHaste) return
            if (!bps.get(ni)) bps.set(ni, new Array<number>())

            bps.get(ni)!.push(new Date().getTime())
        }
    } catch {}
})

events.networkDisconnected.on((ni) => {
    bps.delete(ni)
})