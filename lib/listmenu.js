const { color, bgcolor } = require('../setup/color')
const db_saldo = JSON.parse(fs.readFileSync("./setup/database/saldo.json"));
const { cekSaldo } = require('./topup.js')

function toRupiah(angka) {
  var saldo = '';
  var angkarev = angka.toString().split('').reverse().join('');
  for (var i = 0; i < angkarev.length; i++)
  if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
  return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

exports.menuislam = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾I☽☾S☽☾L☽☾A☽☾M☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .AYATKURSI*
丼─⌲ .ASMAULHUSNA*
丼─⌲ .QUOTESISLAM*
丼─⌲ .KISAHNABI*

> _© RezzX V12_`
}

exports.menuowner = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽ ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾O☽☾W☽☾N☽☾E☽☾R☽   ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .ADDPREM*
丼─⌲ .DELPREM*
丼─⌲ .LISTPREM*
丼─⌲ .ADDOWNER*
丼─⌲ .DELOWNER*
丼─⌲ .ADDSALDO*
丼─⌲ .MINSALDO*
丼─⌲ .KONFIRM*
丼─⌲ .GETSESSION*
丼─⌲ .DELSESI*
丼─⌲ .CREATEPOLL*
丼─⌲ .LISTDB*
丼─⌲ .HAPUSDB*
丼─⌲ .SETPPBOT*
丼─⌲ .LISTBAN*
丼─⌲ .BAN*
丼─⌲ .UNBAN*
丼─⌲ .GETCASE*
丼─⌲ .ADDCASE*
丼─⌲ .DELCASE*
丼─⌲ .SELF*
丼─⌲ .PUBLIC*
丼─⌲ .SHUTDOWN*
> * =x*
> * >*
> * $*

> _© RezzX V12_`
}

exports.menustore = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾S☽☾T☽☾O☽☾R☽☾E☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .CEKSALDO*
丼─⌲ .TFSALDO*
丼─⌲ .TOPUP*
丼─⌲ .TOPUPPIN*
丼─⌲ .BUKTI*
丼─⌲ .OWNER*
丼─⌲ .SCRIPT*

> _© RezzX V12_`
}

exports.menufun = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾F☽☾U☽☾N☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .CERPEN*
丼─⌲ .QUOTESDAY*
丼─⌲ .QUOTESANIME*
丼─⌲ .SHORTQUOTE*
丼─⌲ .CEKKHODAM*
丼─⌲ .CEKKHODAMV2*
丼─⌲ .COUPLE*
丼─⌲ .TTS*
丼─⌲ .ASUPAN*

> _© RezzX V12_`
}

exports.menugroup = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾G☽☾R☽☾O☽☾U☽☾P☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .HIDETAG*
丼─⌲ .PROMOTE*
丼─⌲ .DEMOTE*
丼─⌲ .KICK*
丼─⌲ .ADD*
丼─⌲ .SENDLINKGC*
丼─⌲ .RESETLINKGC*
丼─⌲ .LINKGC*
丼─⌲ .GROUP OPEN*
丼─⌲ .GROUP CLOSE*
丼─⌲ .TAGALL*
丼─⌲ .READVO*
丼─⌲ .EDITDESK*
丼─⌲ .LISTON*
丼─⌲ .BCGC*
丼─⌲ .TOTALMEM*

> _© RezzX V12_`
}

exports.menutools = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾T☽☾O☽☾O☽☾L☽☾S☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .TOURL*
丼─⌲ .SSWEB*
丼─⌲ .KALKULATOR*
丼─⌲ .TOIMG*
丼─⌲ .TOONCE*
丼─⌲ .TOTALFITUR*
丼─⌲ .LISTCASE*
丼─⌲ .SHORTLINK*
丼─⌲ .GITCLONE*
丼─⌲ .UPTIME*
丼─⌲ .MENFESS*
丼─⌲ .REPORT*
丼─⌲ .PING*
丼─⌲ .DISK*
丼─⌲ .TRANSLATE*
丼─⌲ .KODEBAHASA*
丼─⌲ .WM*
丼─⌲ .JARAK*
丼─⌲ .DELETE*
丼─⌲ .ENCRYPT*
丼─⌲ .CCGENERATOR*
丼─⌲ .GET*
丼─⌲ .CUACA*

> _© RezzX V12_`
}

exports.menudownload = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾D☽☾O☽☾W☽☾N☽☾L☽☾O☽☾A☽☾D☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .YTMP3*
丼─⌲ .TTDL*
丼─⌲ .IG*
丼─⌲ .FB*
丼─⌲ .TWITTER*
丼─⌲ .CAPCUT*
丼─⌲ .SNACKVID*
丼─⌲ .TTMP3*
丼─⌲ .PLAYVID*
丼─⌲ .PLAY*
丼─⌲ .YTMP4*
丼─⌲ .YTMP3*
丼─⌲ .MEDIAFIRE*
丼─⌲ .GDRIVE*
丼─⌲ .VIDEY*
丼─⌲ .DOWNFILM*

> _© RezzX V12_`
}

exports.menuai = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾C☽☾H☽☾A☽☾T☽  ☾B☽☾O☽☾T☽*

丼─⌲ .GPT*
丼─⌲ .GPT4*
丼─⌲ .SHANNZ*
丼─⌲ .LLAMA3*
丼─⌲ .SIMI*
丼─⌲ .DEGREE*
丼─⌲ .COPILOT*
丼─⌲ .METAAI*

*☾A☽☾I☽  ☾I☽☾M☽☾A☽☾G☽☾E☽*

丼─⌲ .DALLE3*
丼─⌲ .TXT2IMG*
丼─⌲ .IMG2TXT*
丼─⌲ .EMI*
丼─⌲ .PHOTOLEAP*
丼─⌲ .PIXELART*
丼─⌲ .REMINI*
丼─⌲ .TOZOMBIE*
丼─⌲ .TOANIME*
丼─⌲ .TOGTA*
丼─⌲ .REMOVEBG*
丼─⌲ .GPICT*

> _© RezzX V12_`
}

exports.menuanime = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾A☽☾N☽☾I☽☾M☽☾E☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .RANDOMANIME*
丼─⌲ .STORYANIME*
丼─⌲ .AKIRA*
丼─⌲ .AKIYAMA*
丼─⌲ .ANA*
丼─⌲ .ASUNA*
丼─⌲ .AYUZAWA*
丼─⌲ .BORUTO*
丼─⌲ .CHIHO*
丼─⌲ .CHITOGE*
丼─⌲ .COSPLAY*
丼─⌲ .COSPLAYLOLI*
丼─⌲ .COSPLAYSAGIRI*
丼─⌲ .DEIDARA*
丼─⌲ .DORAEMON*
丼─⌲ .ELAINA*
丼─⌲ .EBA*
丼─⌲ .EMILIA*
丼─⌲ .ERZA*
丼─⌲ .GREMORY*
丼─⌲ .HESTIA*
丼─⌲ .HINATA*
丼─⌲ .HUSBU*
丼─⌲ .INORI*
丼─⌲ .ISUZU*
丼─⌲ .ITACHI*
丼─⌲ .ITORI*
丼─⌲ .KAGA*
丼─⌲ .KAGURA*
丼─⌲ .KAKASIH*
丼─⌲ .KAORI*
丼─⌲ .KENEKI*
丼─⌲ .KOTORI*
丼─⌲ .KURUMI*
丼─⌲ .LOLI*
丼─⌲ .MADARA*
丼─⌲ .MEGUMI*
丼─⌲ .MIKASA*
丼─⌲ .MIKEY*
丼─⌲ .MIKU*
丼─⌲ .MINATO*
丼─⌲ .NARUTO*
丼─⌲ .NEKO*
丼─⌲ .NEKONIME*
丼─⌲ .NEZUKO*
丼─⌲ .ONEPIECE*
丼─⌲ .POKEMON*
丼─⌲ .RANDOMNIME*
丼─⌲ .RANDOMNIME2*
丼─⌲ .RANDOMYANDE*
丼─⌲ .RANDOMDANBO*
丼─⌲ .RIZE*
丼─⌲ .SAGIRI*
丼─⌲ .SAKURA*
丼─⌲ .SASUKE*
丼─⌲ .SHINA*
丼─⌲ .SHINKA*
丼─⌲ .SHINOMIYA*
丼─⌲ .SHIZUKA*
丼─⌲ .SHOTA*
丼─⌲ .TEJINA*
丼─⌲ .WAIFU*
丼─⌲ .TOUKACHAN*
丼─⌲ .TSUNADE*
丼─⌲ .YOTSUBA*
丼─⌲ .YUKI*
丼─⌲ .YULIBOCIL*
丼─⌲ .YUMEKO*
丼─⌲ .HUSBANDO*
丼─⌲ .KITSUNE*

> _© RezzX V12_`
}

exports.menusticker = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

* ☾S☽☾T☽☾I☽☾C☽☾K☽☾E☽☾R☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .STICKERANIME*
丼─⌲ .STICKER*
丼─⌲ .SMEMEV1*
丼─⌲ .SMEMEV2*
丼─⌲ .SMEMEV3*
丼─⌲ .ATTP*
丼─⌲ .TTP*
丼─⌲ .TRIGGER*
丼─⌲ .QC*
丼─⌲ .EMOJIMIX*
丼─⌲ .QCBG*
丼─⌲ .BAKA*
丼─⌲ .BITE*
丼─⌲ .BLUSH*
丼─⌲ .BORED*
丼─⌲ .CRY*
丼─⌲ .CUDDLE*
丼─⌲ .DANCE*
丼─⌲ .FACEPALM*
丼─⌲ .FEED*
丼─⌲ .HANDHOLD*
丼─⌲ .HANDSHAKE*
丼─⌲ .HAPPY*
丼─⌲ .HIGHFIVE*
丼─⌲ .HUG*
丼─⌲ .KISS*
丼─⌲ .LAUGH*
丼─⌲ .LURK*
丼─⌲ .NOD*
丼─⌲ .NOM*
丼─⌲ .NOPE*
丼─⌲ .PAT*
丼─⌲ .PECK*
丼─⌲ .POKE*
丼─⌲ .POUT*
丼─⌲ .PUNCH*
丼─⌲ .SHOOT*
丼─⌲ .SHRUG*
丼─⌲ .SLAP*
丼─⌲ .SLEEP*
丼─⌲ .SMILE*
丼─⌲ .SMUG*
丼─⌲ .STARE*
丼─⌲ .THINK*
丼─⌲ .THUMBSUP*
丼─⌲ .TICKLE*
丼─⌲ .WAVE*
丼─⌲ .WINK*
丼─⌲ .YAWN*
丼─⌲ .YEET*

> _© RezzX V12_`
}

exports.menurandom = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾R☽☾A☽☾N☽☾D☽☾O☽☾M☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .RANDOMDOUYIN*
丼─⌲ .RANDOMTIKTOK*
丼─⌲ .RANDOMSTICK*
丼─⌲ .NOTNOT*
丼─⌲ .PANRIKA*
丼─⌲ .KAYES*
丼─⌲ .GHEA*
丼─⌲ .SANTUY*
丼─⌲ .UKHTI*
丼─⌲ .BOCIL*
丼─⌲ .GIRL*
丼─⌲ .RANDBLACKPINK*
丼─⌲ .JENNIE*
丼─⌲ .JISO*
丼─⌲ .LISA*
丼─⌲ .ART* 
丼─⌲ .CYBER*
丼─⌲ .KPOP*
丼─⌲ .BTS*
丼─⌲ .EXO*
丼─⌲ .GAMEWALLPAPER*
丼─⌲ .ISLAMIC*
丼─⌲ .MOUNTAIN*
丼─⌲ .PROGRAMMING*
丼─⌲ .SATANIC*
丼─⌲ .TECHNOLOGY*
丼─⌲ .WALLHP*
丼─⌲ .WALLML*
丼─⌲ .WALLNIME* 
丼─⌲ .PUBG*
丼─⌲ .FREEFIRE*
丼─⌲ .MOTOR*
丼─⌲ .KUCING*
丼─⌲ .BONEKA*

> _© RezzX V12_`
}

exports.menusearch = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾S☽☾E☽☾A☽☾R☽☾C☽☾H☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .WIKIPEDIA*
丼─⌲ .SEARCHANIME*
丼─⌲ .SEARCHDRAKOR*
丼─⌲ .SEARCHFILM*
丼─⌲ .DETAILFILM*
丼─⌲ .STREAMFILM*
丼─⌲ .SEARCHKUSONIME*
丼─⌲ .DETAILDRAKOR*
丼─⌲ .STREAMDRAKOR*
丼─⌲ .YTSEARCH*
丼─⌲ .TTSEARCH*
丼─⌲ .PINTEREST*

> _© RezzX V12_`
}

exports.menuephoto = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾E☽☾P☽☾H☽☾O☽☾T☽☾O☽   ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .GLITCHTEXT*
丼─⌲ .WRITETEXT*
丼─⌲ .ADVACEDGLOW*
丼─⌲ .TYPOGRAPHYTEXT* 
丼─⌲ .PIXELGLITCH*
丼─⌲ .NEONGLITCH*
丼─⌲ .FLAGTEXT*
丼─⌲ .FLAG3DTEXT*
丼─⌲ .DELETINGTEXT*
丼─⌲ .BLACKPINKSTYLE*
丼─⌲ .GLOWINGTEXT*
丼─⌲ .UNDERWATERTEXT*
丼─⌲ .LOGOMAKER*
丼─⌲ .CARTOONSTYLE*
丼─⌲ .PAPERCUTSTYLE*
丼─⌲ .WATERCOLORTEXT*
丼─⌲ .EFFECTCLOUDS*
丼─⌲ .BLACKPINKLOGO*
丼─⌲ .GRADIENTTEXT*
丼─⌲ .SUMMERBEACH*
丼─⌲ .LUXURYGOLD*
丼─⌲ .MULTICOLOREDNEON*
丼─⌲ .SANDSUMMER*
丼─⌲ .GALAXYWALLPAPER*
丼─⌲ .1917STYLE*
丼─⌲ .MAKINGNEON*
丼─⌲ .ROYALTEXT*
丼─⌲ .FREECREATE* 
丼─⌲ .GALAXYSTYLE*
丼─⌲ .LIGHTEFFECTS*

> _© RezzX V12_`
}

exports.menutextpro = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾T☽☾E☽☾X☽☾T☽☾P☽☾R☽☾O☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .FLUFFY*
丼─⌲ .COMICS*
丼─⌲ .CRAFTS*
丼─⌲ .RETRO*
丼─⌲ .BEEHIVE*
丼─⌲ .ART-DECO*
丼─⌲ .JUKEBOX*
丼─⌲ .HEAVY-METAL*
丼─⌲ .BIG-LOVE*
丼─⌲ .NEON*
丼─⌲ .GOOD-TIMES*
丼─⌲ .CLOSED*
丼─⌲ .GAMEZONE*
丼─⌲ .MATRIX*
丼─⌲ .STAR-WARS*
丼─⌲ .GODZILLA*
丼─⌲ .SAN-ANDREAS*
丼─⌲ .IRONIC-MAIDEN*
丼─⌲ .MOTORMOUTH*
丼─⌲ .WATER*
丼─⌲ .RUNNER*
丼─⌲ .BLACKBIRD*
丼─⌲ .SMURFS*
丼─⌲ .ALIEN-GLOW*
丼─⌲ .CRAZY*
丼─⌲ .BEAUTY*
丼─⌲ .MINIONS*
丼─⌲ .SPIDER-MEN*
丼─⌲ .FOOTBALL*
丼─⌲ .SKATE*
丼─⌲ .GALAXYWPP*

> _© RezzX V12_`
}

exports.menuhacking = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾H☽☾A☽☾C☽☾K☽☾I☽☾N☽☾G☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .DDOS-BIZZ*
丼─⌲ .DDOS-MIX*
丼─⌲ .DDOS-LOSS*
丼─⌲ .CEKIP*
丼─⌲ .LACAKIP*

> _© RezzX V12_`
}

exports.menurpg = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

*☾R☽☾P☽☾G☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .JOINRPG*
丼─⌲ .BUYLIMIT*
丼─⌲ .INVENTORY*
丼─⌲ .JELAJAH*
丼─⌲ .HUNT*
丼─⌲ .KILLSLIME*
丼─⌲ .KILLORC*
丼─⌲ .KILLDEMON*
丼─⌲ .KILLDEVIL*
丼─⌲ .NGOJEK*
丼─⌲ .MANCING*
丼─⌲ .ADVENTURE*
丼─⌲ .GOPLANET*
丼─⌲ .SELL*
丼─⌲ .BUY*
丼─⌲ .SELLIKAN*
丼─⌲ .SELLEMAS*
丼─⌲ .SELLBESI*
丼─⌲ .JUALBAHANKIMIA*
丼─⌲ .JUALKAYU*
丼─⌲ .LAST-SURVIVE*

> _© RezzX V12_`
}

exports.menubug = ( isPremium, prefix, ball, sender ) => {
return `*I N F O R M A S I U S E R*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

乄▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬乄

>>>>>>>> BUG DI TEMPAT <<<<<<<<<<
丼─⌲ ripper-anjg
丼─⌲ assalamualaikum
丼─⌲ sv-gw-bang
丼─⌲ bang-mau-tanya
丼─⌲ woy-peler
丼─⌲ mati-aja-lu
丼─⌲ dih-ripper
丼─⌲ misi-paket
丼─⌲ kntl-kau
丼─⌲ bang-aku-rezz

乄▭▬▭▬▭▬▭▬▭▬乄

>>>>>>>>>>>> BUG NOPE <<<<<<<<<<<<<
丼─⌲ auto-c1 628xxx
丼─⌲ bissmilah-c1 628xxx
丼─⌲ auto-crash 628xxx
丼─⌲ fatal-notip 628xxx
丼─⌲ spam-brutal 628xxx
丼─⌲ tanpa-henti 628xxx
丼─⌲ full-crash-ip 628xxx|jumlah
丼─⌲ bug-ios 628xxx|jumlah
丼─⌲ tembus-beta 628xxx|jumlah
丼─⌲ auto-delay-bug 628xxx|jumlah
丼─⌲ rezzx1 628xxx|jumlah
丼─⌲ rezzx2 628xxx|jumlah
丼─⌲ rezzx3 628xxx|jumlah
丼─⌲ rezzxinvinity 628xxx|jumlah
丼─⌲ biji-lu-pecah 628xxx
丼─⌲ 🔥 628xxx
丼─⌲ ☠️ 628xxx
丼─⌲ rezzxaby 628xxx
丼─⌲ rezz-gamon 628xxx
丼─⌲ mode-lawak 628xxx
丼─⌲ bugloc 628xxx
丼─⌲ bugpc 628xxx
丼─⌲ auto-mental 628xxx
丼─⌲ rezzxv12 628xxx


乄▭▬▭▬▭▬▭▬▭▬乄

>>>>>>>> BUG GRUP <<<<<<<<<<
丼─⌲ attackgc  _linkgc_
丼─⌲ wargc _linkgc_
丼─⌲ crash-gc _linkgc_
丼─⌲ killgc _linkgc_
丼─⌲ auto-crash-gc _linkgc_
丼─⌲ promosi-bkp _linkgc_
丼─⌲ rezzx-mode-badut _linkgc_
丼─⌲ bubarin-gcnya _linkgc_
丼─⌲ send-virus _linkgc_
丼─⌲ auto-mokad _linkgc_
丼─⌲ bissmilah-out _linkgc_


乄▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬乄

> _© RezzX V12_`
}

exports.menumaker = ( isPremium, prefix, ball, sender ) => {
return `*☾I☽☾N☽☾F☽☾O☽  ☾U☽☾S☽☾E☽☾R☽*

> *Statusmu : ${isPremium ? "Premium" : "Free"}*
> *Nomormu : ${m.sender.split('@')[0]}*
> *Saldomu : Rp ${ball}*

* ☾M☽☾A☽☾K☽☾E☽☾R☽  ☾M☽☾E☽☾N☽☾U☽*

丼─⌲ .WANTED*
丼─⌲ .INVERT*
丼─⌲ .RAINBOW*
丼─⌲ .BEAUTIFUL*
丼─⌲ .HACKER*
丼─⌲ .HACKER2*
丼─⌲ .CIRCLE-IMG*
丼─⌲ .CARBON*

> _© RezzX V12_`
}

exports.warnaqc = ( prefix ) => {
return `*BERIKUT DAFTAR LIST WARNA QC*

> *Pink*
> *Blue*
> *Red*
> *Green*
> *Yellow*
> *Purple*
> *Darkblue*
> *Lightblue*
> *Ash*
> *Orange*
> *Black*
> *White*
> *Teal*
> *Lightpink*
> *Chocolate*
> *Salmon*
> *Magenta*
> *Tan*
> *Wheat*
> *Deeppink*
> *Fire*
> *Skyblue*
> *Safron*
> *Brightskyblue*
> *Hotpink*
> *Lightskyblue*
> *Seagreen*
> *Darkred*
> *Orangered*
> *Cyan*
> *Violet*
> *Mossgreen*
> *Darkgreen*
> *Navyblue*
> *Darkorange*
> *Darkpurple*
> *Fuchsia*
> *Darkmagenta*
> *Darkgray*
> *Peachpuff*
> *Blackishgreen*
> *Darkishred*
> *Goldenrod*
> *Darkishgray*
> *Darkishpurple*
> *Gold*
> *Silver*

> _© RezzX V12_`
}

exports.kodebahasa = ( prefix ) => {
return `*BERIKUT LIST CODE NEGARA TRANSLATE*

> *Af: Afrikaans* 
> *Sq: Albanian*
> *Ar: Arabic*
> *Hy: Armenian*
> *Ca: Catalan* 
> *Zh: Chinese*
> *Zh-Cn: Chinese (Mandarin/China)*
> *Zh-Tw: Chinese (Mandarin/Taiwan)*
> *Zh-Yue: Chinese (Cantonese)*
> *Hr: Croatian*
> *Cs: Czech*
> *Da: Danish*
> *Nl: Dutch*
> *En: English*    
> *En-Au: English (Australia)*
> *En-Uk: English (United Kingdom)*
> *en-Us: English (United States)* 
> *Eo: Esperanto* 
> *Fi: Finnish* 
> *Fr: French*
> *De: German*
> *El: Greek* 
> *Ht: Haitian Creole* 
> *Hi: Hindi* 
> *Hu: Hungarian* 
> *Ss: Icelandic* 
> *Id: Indonesian* 
> *It: Italian*
> *Ja: Japanese*
> *Ko: Korean*
> *La: Latin*
> *Lv: Latvian*
> *Mk: Macedonian*
> *No: Norwegian*
> *Pl: Polish*
> *Pt: Portuguese*
> *Pt-Br: Portuguese (Brazil)*
> *Ro: Romanian*
> *Ru: Russian*
> *Sr: Serbian*
> *Sk: Slovak*
> *Es: Spanish* 
> *Es-Es: Spanish (Spain)*
> *Es-Us: Spanish (United States)*
> *Sw: Swahili*
> *Sv: Swedish*
> *Ta: Tamil*
> *Th: Thai*
> *Tr: Turkish*
> *Vi: Vietnamese* 
> *Cy: Welsh*

> _© RezzX V12_`
}

exports.lshelp = () => {
return `*last Suvive adalah game bertema adventure bertahan hidup, untuk cara bermain baca beberapa panduan berikut ini :*
  
*1. FUNGSI COMMAND*
*(.lsstart)* : Berfungsi untuk menjalankan game, game tidak akan berfungsi jika player tidak menjalankan perintah ini.
*(.lsexit)* : Berfungsi untuk menutup game yang sebelumnya berjalan, command ini harus dijalankan setiap ingin menutup game agar tidak crash saat ingin dimainkannya lagi.
*(.lssave)* : Berfungsi untuk melakukan save pencapaian player ke database, Player haruskan mejalankan command ini sebelum menutup game.
*(.pindah)* : Berfungsi untuk berpindah dari tempat ke tempat lainnya.
*(.cari)* : Berfungsi untuk mencari item disetiap tempatnya, command ini tidak mempunyai limit, Anda dapat mencari item sepuasnya
*(.ambil)* : Berfungsi untuk mengambil hasil item yang sebelumnya dicari.
*(.lawan)* : Berfungsi untuk melawan zombie yang menyerang player.
(.inventory atau .inv) : Berfungsi untuk melihat barang yang dimiliki sekaligus mengecek status keberadaan, health, dan damage yang dimiliki.
*(.craft)* : Berfungsi untuk melakukan crafting senjata dan barang-barang lainnya.
*(.gunakan)* : Berfungsi untuk menggunakan item hasil crafting bisa berupa senjata maupun obat-obatan dan barang-barang lainnya.
*(.lepas)* Berfungsi untuk melepas senjata yang sedang dipakai
*(.listcraft)* : Berfungsi untuk melihat daftar barang dan item yang diperlukan untuk melakukan crafting.
*(.listtepat)* : Berfungsi untuk melihat daftar tepat yang tersedia.

*2. SETUP AWAL*
Setiap ingin bermain player harus melakukan start terlebih dahulu, Dan jika ingin berhenti player disarankan untuk melakukan save terlebih dahulu agar pencapaian tidak hilang, Setelah melakukan save player bisa keluar dari permainan.

*3. SISTEM GAME PLAY*
Player akan berperan sebagai seorang survivor yang harus bertahan hidup di sebuah kota besar dari grombolan zombie yang mengisi seluruh kota, Player ditugaskan untuk pergi ke tempat-tempat tertentu yang disediakan oleh owner, Player juga harus mencari item-item disetiap tempat, Setiap tempat hasil pencarianya akan menghasilkan 3 item random dan player hanya bisa memilih satu, Player dapat mencari item terus menerus tanpa ada limit, Player akan diuji dengan adanya serangan-serangan oleh kumpulan zombie, Player bisa melawan para zombie, Zombie datang waktu player melaukan pencarian item, Player dapat melakukan crafting berbagai senjata namun hanya di basecamp karena alat crafting hanya tersedia di basecamp, Perlu diingat bahwa crafting akan membutuhkan item-item khusus dan anda bisa melihat daftar item yang diperlukan. Terakhir player dapat melihat semua item dan status health & damage di menu inventory.

*4. TUJUAN GAME*
Game ditujukan kepada player agar pandai mengolah situasi, berpikir sebelum bertindak, dan berusaha keras dalam mencapai sesuatu, Serta player di didik untuk mandiri dan ber-strategy.`
}

exports.listcraft = () => {
return `*( DAFTAR CRAFTING )*

¥ pisau : 2 tongkat, 3 batu, 1 kulit kayu.
¥ pistol : 1 senjata, 10 peluru, 1 pegangan, 2 besi.
¥ pedang : 6 besi, 2 pegangan, 1 kulit kayu.
¥ panah : 3 tongkat, 5 bulu, 2 batu, 1 tali.
¥ kapak : 4 besi, 2 tongkat, 1 kulit kayu.
¥ tombak : 3 tongkat, 3 besi, 1 tali.
¥ busur : 4 tongkat, 2 tali, 1 kulit kayu.
¥ perisai : 5 besi, 3 kayu, 2 kulit kayu.
¥ belati : 2 besi, 1 pegangan, 4 kulit kayu.
¥ granat : 3 besi, 2 bahan peledak, 1 tali.
¥ perban : 2 kain, 2 tali.
¥ antibody : 4 herbal, 3 perban, 2 suntikan.
¥ alkohol : 3 air, 2 herbal, 2 suntikan.`
}

exports.listtempat = () => {
return `*( DAFTAR TEMPAT )*

¥ basecamp
¥ taman
¥ mall
¥ sekolah
¥ rumahsakit
¥ kantorpolisi
¥ supermarket 
¥ tamanbermain 
¥ perpustakaan 
¥ bengkel
¥ restoran`
}

exports.lasts = ( pushname ) => {
return `halo ${pushname}, Selamat Datang di *Last Survive* game buatan owner ini bertema adventure dan menjadi game bertahan hidup pertama di platform bot WhatsApp, Enjoy guyss...

*( DASHBOARD LAST SURVIVE )*
╔────────────
¥ .lshelp
¥ .lsstart
¥ .lssave
¥ .lsexit
¥ .cari
¥ .ambil
¥ .backpack
¥ .pergi
¥ .lawan
¥ .craft
¥ .gunakan
¥ .lepas
¥ .listtempat
¥ .listcraft
╚────────────

Mulai perjalanan mu disini, sejauh mana kamu akan bertahan dari serangan mayat hidup!!.`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})