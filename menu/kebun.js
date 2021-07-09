const kebun = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, heartbars, pohoncactuspointa, pohonnatalpointa, pohoncemarapointa, pohonpointa, bambupointa, padipointa, pohonkelapapointa, checkLimituser, checkpremLimituser, potionpointa, megapotionpointa, checkHealuser, _registered, uangku, role, f, g, h, i, j, k, l, m, fake, prema, num, ow, dev) => { 
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
➣「RANSEL」
╔═════════════════❍
║${heartbars}
║${f}Energy:${checkHealuser(sender)}
║${f}Limit:${checkLimituser(sender)}
║${f}Premlimit:${checkpremLimituser(sender)}
║${f}${prefix}akuarium
║${f}${prefix}kebun
║${f}${prefix}otw
║${f}${prefix}usepotion
║${f}${prefix}usemegapotion
║${f}${prefix}transfer tag|nominal
║${f}${potionpointa}    ${f}${megapotionpointa}
╚═════════════════❍
➣「TREE」
╔═════════════════❍
║${f}${pohoncactuspointa}    ${f}${bambupointa}
║${f}${pohonnatalpointa}    ${f}${padipointa}
║${f}${pohoncemarapointa}    ${f}${pohonkelapapointa} 
║${f}${pohonpointa} 
╚═════════════════❍
➣「PANEN」
╔═════════════════❍
║${f}otw bikin
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

exports.kebun = kebun