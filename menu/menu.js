const menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, lucbotbatrai, battre, f, g, h, i, j, k, l, m, fake, prema, num, ow, dev) => { 
return ` \`\`\`		
➣「${fake}」
╔═════════════════❍
║${f}Developer:@${dev.split("@")[0]}
║${f}Owner:@${ow.split("@")[0]}
║${f}Prefix:「MULTI PREFIX」
║${f}GitHub:${prefix}github
║${f}Buat bot:${prefix}buatbot
║${f}Premium:${prefix}joinpremium
║${f}Join Grup:${prefix}join
║${f}Donasi:${prefix}donasi
║${f}Refresh:${prefix}imunevirtex
║${f}Ransel:${prefix}inventory
║${f}Achievment:${prefix}leaderboard
╚═════════════════❍
➣「INFO USER」
╔═════════════════❍
║${f}Status:${prema}
║${f}Nomer:@${num.split("@")[0]}
║${f}Uangmu:Rp.${uangku}.-
║${f}XP:${getLevelingXp(sender)}/${reqXp}
║${f}Role:${role}
║${f}Level:${getLevelingLevel(sender)}
║${f}User register:${_registered.length}
╚═════════════════❍
➣「LIST MENU」
╔═════════════════❍
║${f}${prefix}ownermenu
║${f}${prefix}grupseting
║${f}${prefix}gabutmenu
║${f}${prefix}downloadmenu
║${f}${prefix}mediamenu
║${f}${prefix}minigame
║${f}${prefix}makermenu
║${f}${prefix}akuarium
║${f}${prefix}shopmenu
║${f}${prefix}animemenu
║${f}${prefix}aesthetic
║${f}${prefix}infomenu
╚═════════════════❍
➣「STATUS BOT」
╔═════════════════❍
║${f}Nama Bot : ${fake}
║${f}Baterai : ${battre}%
║${f}Status : ${baterai.cas === 'true' ? 'Charging' : 'Not Charging'}
║${f}Bars : ${lucbotbatrai}
╚═════════════════❍
➣「NOTE」
╔═════════════════❍
║${g}:Fitur Free Use 1 Limit
║${h}:Fitur Prem Use 1 PLimit
║${i}:Fitur Game Use 5 Limit
║${j}:Fitur Free No Limit
║${k}:Fitur Only Owner
║${l}:Fitur Only Premium
║${m}:Fitur Only Admin Group
╚═════════════════❍
➣「THANKS TO」
╔═════════════════❍
║${f}CLOUD BOT
║${f}SETAN B0T
║${f}LOLHUMAN
║${f}ZEKSAPI
║${f}VIDEFIKI
║${f}XTEAM
╚═════════════════❍
\`\`\`
`
}

exports.menu = menu
