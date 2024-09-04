require("../setup/module")

async function welcome1(a, b, c, d, e, f) {
const imeg = await new ling.Welcome()
    .setUsername(a)
    .setGuildName(b)
    .setGuildIcon(c)
    .setMemberCount(d)
    .setAvatar(e)
    .setBackground(f)
    .toAttachment();
    
  dat = imeg.toBuffer();
  await fs.writeFileSync('./startup/media/welcome1.png', dat)
}

async function goodbye1(g, h, i, j, k, l) {
const image = await new ling.Goodbye()
    .setUsername(g)
    .setGuildName(h)
    .setGuildIcon(i)
    .setMemberCount(j)
    .setAvatar(k)
    .setBackground(l)
    .toAttachment();
  
  tad = image.toBuffer();
  await fs.writeFileSync('./startup/media/goodbye1.png', tad)
}

global.welcome = welcome1
global.goodbye = goodbye1

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})