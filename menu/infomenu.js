const infomenu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, f, g, h, i, j, k, l, m, fake, prema, num, ow, dev) => { 
return ` \`\`\`		
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
➣「INFO MENU」
╔═════════════════❍
║${j}${prefix}ownerlist 
║${j}${prefix}adminbotlist 
║${j}${prefix}premiumlist 
║${j}${prefix}banlist 
║${j}${prefix}blocklist 
║${j}${prefix}listbadword 
║${j}${prefix}profile 
║${j}${prefix}request 
║${j}${prefix}laporan 
║${j}${prefix}chatlist
║${j}${prefix}timer
║${j}${prefix}tagme 
║${j}${prefix}wame 
║${j}${prefix}info 
║${j}${prefix}sewabot 
║${j}${prefix}joinpremium 
║${j}${prefix}testime 
║${j}${prefix}iklan
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

exports.infomenu = infomenu
