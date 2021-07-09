const shopmenu = (pushname, prefix,
prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, f, fake, prema, num, ow, dev) => { 
return ` \`\`\`		
➣「${fake}」
╔═════════════════❍
║${f}Developer:@${dev.split("@")[0]}
║${f}Owner:@${ow.split("@")[0]}
║${f}Prefix:「${prefix}」
║${f}Sewa Bot:${prefix}sewabot
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
➣「BUY PRICE」 
${f}Limit     :Rp.${koinPerlimit}.-    
${f}Premlimit :Rp.${koinPerpremlimit}.-    
${f}Potion    :Rp.${koinPerpotion}.-
${f}MPotion   :Rp.${koinMegaPerpotion}.-
➣「SELL PRICE」
${f}Berlian   :Rp.${prefix}otw.-
${f}Emas      :Rp.${prefix}otw.-
${f}Perak     :Rp.${prefix}otw.-
${f}Perunggu  :Rp.${prefix}otw.-
${f}Batu      :Rp.${prefix}otw.-
➣「WELCOME TO SHOP」 
${f}${prefix}usepotion
${f}${prefix}usemegapotion
${f}${prefix}transfer
➣「BUY SHOP」
${f}${prefix}buylimit     
${f}${prefix}buypremlimit 
${f}${prefix}buy💉 
${f}${prefix}buy💊
➣「 SELL SHOP」
${f}${prefix}sell🦑 ${f}${prefix}sell🐡
${f}${prefix}sell🦐 ${f}${prefix}sell🐠
${f}${prefix}sell🦀 ${f}${prefix}sell🐟
${f}${prefix}sellperunggu
${f}${prefix}sellperunggu
${f}${prefix}sellperunggu
${f}${prefix}sellperunggu
\`\`\`
`
}

exports.shopmenu = shopmenu
