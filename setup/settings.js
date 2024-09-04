require("./module")

global.owner = "6289617554095"
global.namabot = "RezzX V12"
global.namaCreator = "RezzX"
global.rezzurl = "Https://wa.me/6289617554095"
global.rezzurl2 = "Https://heylink.me/rezzx-website"
global.autoJoin = false 
global.antilink = false 
global.versisc = 'V12'
global.packname = "RezzX V12"
global.author = "© RezzX" 
global.wlcm = []
global.wlcmm = []
global.jumlah = "5" 

global.limitawal = {
    premium: "Infinity",
    free: 10
    }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})