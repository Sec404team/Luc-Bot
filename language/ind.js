exports.wait = () => {
	return`*「 ⌛ 」 _Loading..._ ▬▬▬▭*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlnul = () => {
	return`\`\`\`LEVELMU MASIH KOSONG\`\`\``
}


exports.noregis = () => {
	return`\`\`\`「 ANDA TIDAK TERDAFTAR 」\`\`\`\n\n\`\`\`${pushname} silahkan ketik ${prefix}regis\`\`\`
`
}

exports.rediregis = () => {
	return`\`\`\`「 ANDA SUDAH TERDAFTAR 」\n\n${pushname} kamu sudah terdaftar di database bot\ngak usah spam\`\`\``
}

exports.stikga = () => {
	return`\`\`\`yah gagal coba ulangi beberapa saat lagi\`\`\`
	`
}

exports.linkga = () => {
	return`\`\`\`maaf link tidak valid\`\`\``
}

exports.groupo = () => {
	return`\`\`\`「CUMAN BISA DI GROUP」\`\`\``
}

exports.ownerb = () => {
	return`\`\`\`「HANYA OWNER DAN PREMIUM YANG BISA」\`\`\``
}

exports.premo = () => {
	return`\`\`\`「LU GAK PREMIUM BELI LAH」\`\`\``
}

exports.ownerg = () => {
	return`\`\`\`LU SIAPA BUKAN OWNER\`\`\``
}

exports.ownera = () => {
	return`\`\`\`LU SIAPA BUKAN OWNER BUKAN JUGA ADMIN BOT\`\`\``
}

exports.badmin = () => {
	return`\`\`\`AKUNYA HARUS JADI ADMIN KAKAK\`\`\``
}

exports.nimu = () => {
	return`*「MODE ANIME BELOM AKTIF BAKA!!」*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`\`\`\`「GAK GITU KONSEPNYA」\`\`\``
}

exports.baned = () => {
	return`\`\`\`${pushname} SUDAH DI BANNED DAN TIDAK BISA MENGGUNAKAN BOT INI TERIMAKASIH SILAHKAN CHAT OWNER UNTUK MEMBUKA BANNED\`\`\``
}

exports.clears = () => {
	return`*CLEAR ALL SUCCES*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n\`\`\`jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot\`\`\`
	`
}

exports.registered = (pushname, serialUser, time, sender) => {
	return`
\`\`\` 「DATABASE BOT」
╔═════════════════❍
║Nama :${pushname}
║Nomer:wa.me/${sender.split("@")[0]}
║Waktu Pendaftaran
║${time}
║No.Rekening
║${serialUser}
║Thank You 
╚═════════════════❍
NOTE:\`\`\`
untuk mendapatkan uang bot bisa #adventure
gunakan sebijak mungkin
kamu sudah terdaftar dengan data
jangan sampai lupa No.Rekeningmu karena ini penting:v
`
}

exports.levelup = (pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role, bars) => {
	return`
 \`\`\`「 LEVEL UP 」*
╔═════════════════❍
║Nama :${pushname}
║Nomer:${sender.split("@")[0]}
║Xp:${getLevelingXp(sender)}
║bares:${bars}
║Role:${role}
║Limit:+10
║PremLimit:+5
║Level:${getLevel} > ${getLevelingLevel(sender)}
╚═════════════════❍
\`\`\`
`
}

exports.limitend = () => {
	return`\`\`\`maaf ${pushname} limit hari ini habis*\nbeli limit dengan cara ${prefix}buylimit/ naik level\`\`\`
`
}

exports.premlimitend = () => {
	return`\`\`\`maaf ${pushname} premium limit hari ini habis\nbeli premlimit dengan cara ${prefix}buypremlimit/ naik level\`\`\`
`
}

exports.healender = () => {
	return`\`\`\`maaf ${pushname} energy kamu tidak cukup\ntambah energy dengan cara ${prefix}usepotion/${prefix}usemegapotion\`\`\`
`
}




