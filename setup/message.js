require("./module")

global.mess = {
    admin: `*AKSES TERLARANG!! PESAN :*\n> *Khusus Admin Group!*`,
    botAdmin: `*AKSES TERLARANG!! PESAN :*\n> *XBOT Bukan Admin!*`,
    owner: `*AKSES TERLARANG!! PESAN :*\n> *Fitur Khusus Owner!*`,
    prem: `*AKSES TERLARANG!! PESAN :*\n> *Fitur Khusus Premium!*`,
    group: `*AKSES TERLARANG!! PESAN :*\n> *Fitur Khusus Di Group!*`,
    error: `*FITUR BERMASALAH!! PESAN :*\n> *Lapor Ke Owner Atau Coba Lagi Nanti!*`,
    priv: `*AKSES TERLARANG!! PESAN :*\n> *Fitur Khusus Di Privat Chat*`,
    ban: `*AKSES TERLARANG!! PESAN :*\n> *Kamu dibanned oleh owner*`,
    rpg: `*AKSES TERLARANG!! PESAN :*\n> *Kamu belum daftar di database rpg, ketik .joinrpg untuk mendaftar*`,
    reg: `*AKSES TERLARANG!! PESAN :*\n> *Kamu belum terdaftar, ketik .daftar nama untuk mendaftar*`,
    wait: `_*Processing....*_`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})