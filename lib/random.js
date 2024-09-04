const axios = require('axios')
const jsobfus = require('javascript-obfuscator')
const fs = require('fs')
const cheerio = require("cheerio");
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

    async function upvidey(buffer) {
      const { ext } = await fromBuffer(buffer)
      let form = new FormData
      form.append('file', buffer, 'tmp.' + ext)
      let res = await fetch('https://videy.co/api/upload', {
        method: 'POST',
        body: form
      })
      let vid = await res.json()
      if (vid.error) throw vid.error
      return 'https://cdn.videy.co/'+vid.id+'.mp4';
    }
function msToTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

function formatBytes(sizeInBytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let size = sizeInBytes, unitIndex = 0
    while (size >= 1024 && unitIndex < units.length - 1) size /= 1024, unitIndex++
    return size.toFixed(2) + " " + units[unitIndex]
}

async function random_mail() {
    const link = "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"

    try {
        let response = await fetch(link)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function get_mails(id, domain) {
    const link = `https://www.1secmail.com/api/v1/?action=getMessages&login=${id}&domain=${domain}`

    try {
        let response = await fetch(link)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function DanbooruRandom() {
    try {
      let response = await axios.get('https://danbooru.donmai.us/posts.json')
      let results = response.data

      if (!Array.isArray(results) || results.length === 0) {
        throw new Error('No images found')
      }

      let randomImage = results[Math.floor(Math.random() * results.length)]
      let imageUrl = randomImage.url || randomImage.sample_url || randomImage.file_url

      if (!imageUrl) {
        throw new Error('Image URL not found')
      }

      return { status: 200, imageUrl }
    } catch (error) {
      console.error('Error:', error)
      return { status: 500, error: error.message }
    }
  }

  async function sendRandomDanbooruImage(m) {
    try {
      let response = await DanbooruRandom()
      if (response.status !== 200) {
        throw new Error(response.error)
      }

      let imageUrl = response.imageUrl

      return imageUrl
      
    } catch (e) {
      m.reply(e.message)
    }
  }
  
  async function YandereRandom() {
    try {
      let response = await axios.get('https://yande.re/post.json?api_version=2')
      let results = response.data.posts // Pastikan untuk mengakses data posts

      if (!Array.isArray(results) || results.length === 0) {
        throw new Error('No images found')
      }

      let randomImage = results[Math.floor(Math.random() * results.length)]
      let imageUrl = randomImage.jpeg_url || randomImage.sample_url || randomImage.file_url

      if (!imageUrl) {
        throw new Error('Image URL not found')
      }

      return { status: 200, imageUrl }
    } catch (error) {
      console.error('Error:', error)
      return { status: 500, error: error.message }
    }
  }

  async function sendRandomYandereImage(m) {
    try {
      let response = await YandereRandom()
      if (response.status !== 200) {
        throw new Error(response.error)
      }

      let imageUrl = response.imageUrl
      
      return imageUrl

    } catch (e) {
      m.reply(e.message)
    }
  }
  
const totalFitur = () =>{
            var mytext = fs.readFileSync("./rezzx.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
//wllp
async function wpp(q) {
let mann = await require("axios").get("https://api.manaxu.my.id/api/internet/wallpaper?query=" + q)
return mann.data.result[Math.floor(mann.data.result.length * Math.random())]
}

//enc
async function obfus(query) {
  return new Promise((resolve, reject) => {
  try {
  const obfuscationResult = jsobfus.obfuscate(query, {
    compact: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true, 
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1
  });
  const result = {
    status: 200,
    author: `Shannz`,
    result: obfuscationResult.getObfuscatedCode()
  }
  resolve(result)
  } catch (e) {
      reject(e)
    }
  })
}

async function Llama3WithSesi(q, username, logic) {
 try {
 const response = await require('axios').post("https://luminai.siputzx.my.id/", {
 content: q,
 user: username,
 prompt: logic,
 webSearchMode: false 
 });
 return response.data.result;
 } catch (error) {
 console.error('Error fetching:', error);
 throw error;
 }
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

async function standings(league) {
const leagues = {
  "france": "https://www.bola.net/klasemen/prancis.html",
  "prancis": "https://www.bola.net/klasemen/prancis.html",
  "perancis": "https://www.bola.net/klasemen/prancis.html",
  "ligue 1": "https://www.bola.net/klasemen/prancis.html",
  "german": "https://www.bola.net/klasemen/jerman.html",
  "germany": "https://www.bola.net/klasemen/jerman.html",
  "bundes liga": "https://www.bola.net/klasemen/jerman.html",
  "bundesliga": "https://www.bola.net/klasemen/jerman.html",
  "jerman": "https://www.bola.net/klasemen/jerman.html",
  "indonesia": "https://www.bola.net/klasemen/indonesia.html",
  "indo": "https://www.bola.net/klasemen/indonesia.html",
  "ind": "https://www.bola.net/klasemen/indonesia.html",
  "inggris": "https://www.bola.net/klasemen/inggris.html",
  "premier league": "https://www.bola.net/klasemen/inggris.html",
  "english": "https://www.bola.net/klasemen/inggris.html",
  "premier": "https://www.bola.net/klasemen/inggris.html",
  "england": "https://www.bola.net/klasemen/inggris.html",
  "italia": "https://www.bola.net/klasemen/italia.html",
  "italy": "https://www.bola.net/klasemen/italia.html",
  "serie a": "https://www.bola.net/klasemen/italia.html",
  "spain": "https://www.bola.net/klasemen/spanyol.html",
  "spanyol": "https://www.bola.net/klasemen/spanyol.html",
  "la liga": "https://www.bola.net/klasemen/spanyol.html",
  "laliga": "https://www.bola.net/klasemen/spanyol.html",
  "ucl": "https://www.bola.net/klasemen/champions.html",
  "champion": "https://www.bola.net/klasemen/champions.html",
  "champions": "https://www.bola.net/klasemen/champions.html"
};

  try {
    const liga = league.toLowerCase();
    const url = leagues[liga];

    if (!url) {
      throw new Error("Invalid league name");
    }

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const result = [];

    if (liga === "ucl" || liga === "champion" || liga === "champions") {
      $("div.box-group > div").each(function () {
        const group = $(this).find("h3").text();
        result[group] = [];
        $(this)
          .find("div > table > tbody > tr")
          .each(function () {
            result[group].push({
              rank: $(this).find("th > div > span:nth-child(1)").text(),
              name: $(this).find("th > div > span:nth-child(2) a > span:nth-child(2)").text(),
              match: $(this).find("td:nth-child(2)").text(),
              point: $(this).find("td:nth-child(3)").text(),
              win: $(this).find("td:nth-child(4)").text(),
              draw: $(this).find("td:nth-child(5)").text(),
              lose: $(this).find("td:nth-child(6)").text(),
              goals: $(this).find("td:nth-child(7)").text(),
              gd: $(this).find("td:nth-child(8)").text()
            });
          });
      });
    } else {
      $("table.main-table > tbody > tr").each(function () {
        result.push({
          name: $(this).find("th > div > span:nth-child(2) > a > span:nth-child(2)").text(),
          rank: $(this).find("th > div > span:nth-child(1)").text(),
          match: $(this).find("td:nth-child(2)").text(),
          point: $(this).find("td:nth-child(3)").text(),
          win: $(this).find("td:nth-child(4)").text(),
          draw: $(this).find("td:nth-child(5)").text(),
          lose: $(this).find("td:nth-child(6)").text(),
          goals: $(this).find("td:nth-child(7)").text(),
          gd: $(this).find("td:nth-child(8)").text()
        });
      });
    }

    return result;
  } catch (err) {
    console.log(err);
    return String(err);
  }
}
  
module.exports = { 
sendRandomDanbooruImage,
sendRandomYandereImage,
totalFitur,
wpp,
obfus,
Llama3WithSesi,
randomNomor,
standings,
upvidey,
random_mail,
get_mails
}