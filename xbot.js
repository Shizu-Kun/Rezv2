require("./setup/xglobal")

const func = require("./setup/place")
const readline = require("readline");
const yargs = require('yargs/yargs')
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const _ = require('lodash')
const usePairingCode = true //true untuk pairing code


const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./setup/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`./setup/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)


async function startrezzx() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

const connectionOptions = {
version,
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
browser: ["Ubuntu", "Chrome", "20.0.04"]
}

const rezzx = func.makeWASocket(connectionOptions)
if(usePairingCode && !rezzx.authState.creds.registered) {
const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62\n');
const code = await rezzx.requestPairingCode(phoneNumber.trim())
console.log(`Pairing code: ${code}`)

}

store.bind(rezzx.ev);

rezzx.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
rezzx.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
rezzx.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startrezzx()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startrezzx()
}
} else if (connection === "connecting") {
start(`1`, `Connecting...`)
} else if (connection === "open") {
success(`1`, `Tersambung`)
if (autoJoin) {
rezzx.groupAcceptInvite(codeInvite)
}
}
})

rezzx.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return rezzx.readMessages([m.key])
if (!rezzx.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = func.smsg(rezzx, m, store)
require("./rezzx")(rezzx, m, store)
} catch (err) {
console.log(err)
}
})

rezzx.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = rezzx.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

rezzx.public = true

rezzx.ev.on('creds.update', saveCreds)
return rezzx
}

startrezzx()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})

const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bot is running\n');
}).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});