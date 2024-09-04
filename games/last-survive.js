const fs = require('fs');
const path = require('path');

// Perbarui path ke file db-game.json di folder db-games
const dbFilePath = path.join(__dirname, 'dbgames', 'db-game.json');

const loadPlayerData = () => {
    if (fs.existsSync(dbFilePath)) {
        const data = fs.readFileSync(dbFilePath, 'utf-8');
        return JSON.parse(data);
    }
    return { started: true,
    health: 150,
    damage: 30,
    currentLocation: 'basecamp',
    inventory: {},
    craftedItems: {},
    currentWeapon: null };
};

const savePlayerData = (playerData) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(playerData, null, 2));
};

let player = loadPlayerData();

const places = {
    basecamp: { items: [], zombies: 0 },
    taman: { items: ['tongkat', 'batu', 'daun', 'bunga', 'jamur', 'ranting', 'kulit kayu', 'kain', 'tali'], zombies: 2 },
    mall: { items: ['makanan', 'air', 'pakaian', 'sepatu', 'tas', 'topi', 'sarung tangan', 'syal', 'jaket'], zombies: 3 },
    rumahsakit: { items: ['obat', 'antibiotik', 'suntikan', 'masker', 'sarung tangan medis', 'termometer', 'stetoskop', 'pisau bedah', 'kasa'], zombies: 1 },
    sekolah: { items: ['buku', 'pena', 'buku catatan', 'penghapus', 'penggaris', 'pensil', 'runcing pensil', 'kapur', 'spidol'], zombies: 1 },
    kantorpolisi: { items: ['bubuk mesium', 'peluru', 'borgol', 'pentungan', 'rompi', 'radio', 'senter', 'lencana', 'peluit'], zombies: 4 },
    supermarket: { items: ['makanan', 'minuman', 'alat kebersihan', 'alat masak', 'peralatan mandi', 'obat-obatan', 'pakaian', 'mainan', 'elektronik'], zombies: 2 },
    tamanbermain: { items: ['mainan', 'permen', 'balon', 'buku cerita', 'krayon', 'kertas gambar', 'boneka', 'mobil-mobilan', 'puzzle'], zombies: 1 },
    perpustakaan: { items: ['buku', 'majalah', 'koran', 'pena', 'pensil', 'penghapus', 'penggaris', 'map', 'stapler'], zombies: 1 },
    bengkel: { items: ['alat', 'oli', 'ban', 'kunci inggris', 'obeng', 'tang', 'palang', 'dongkrak', 'lem'], zombies: 3 },
    restoran: { items: ['makanan', 'minuman', 'alat masak', 'piring', 'gelas', 'sendok', 'garpu', 'serbet', 'bumbu'], zombies: 2 }
};

const craftingRecipes = {
    'pisau': { 'tongkat': 2, 'batu': 3, 'kulit kayu': 1, damage: 10 },
    'pistol': { 'bubuk mesium': 1, 'peluru': 10, 'pegangan': 1, 'besi': 2, damage: 50 },
    'pedang': { 'besi': 6, 'pegangan': 2, 'kulit kayu': 1, damage: 30 },
    'panah': { 'tongkat': 3, 'bulu': 5, 'batu': 2, 'tali': 1, damage: 15 },
    'kapak': { 'besi': 4, 'tongkat': 2, 'kulit kayu': 1, damage: 25 },
    'tombak': { 'tongkat': 3, 'besi': 3, 'tali': 1, damage: 20 },
    'busur': { 'tongkat': 4, 'tali': 2, 'kulit kayu': 1, damage: 15 },
    'perisai': { 'besi': 5, 'kayu': 3, 'kulit kayu': 2, damage: 5 },
    'belati': { 'besi': 2, 'pegangan': 1, 'kulit kayu': 1, damage: 8 },
    'granat': { 'besi': 3, 'bahan peledak': 2, 'tali': 1, damage: 60 },
    'perban': { 'kain': 2, 'tali': 2, healthRestored: 15 },
    'antibody': { 'herbal': 4, 'perban': 2, 'suntikan': 2, healthRestored: 30 },
    'alkohol': { 'air': 3, 'herbal': 2, 'suntikan': 2, healthRestored: 50 }
};

// Fungsi untuk membuat item
const craftItem = (item) => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_";
    }

    const recipe = craftingRecipes[item];
    if (!recipe) {
        return `*Item ${item} tidak dapat dibuat.*`;
    }

    // Cek apakah pemain memiliki bahan yang cukup
    for (const [bahan, jumlah] of Object.entries(recipe)) {
        if (bahan !== 'healthRestored' && bahan !== 'damage' && (!player.inventory[bahan] || player.inventory[bahan] < jumlah)) {
            return `*Anda tidak memiliki bahan yang cukup untuk membuat ${item}. Lihat daftar crafting untuk melihat bahan yang dibutuhkan.*`;
        }
    }

    // Kurangi bahan dari inventory pemain
    for (const [bahan, jumlah] of Object.entries(recipe)) {
        if (bahan !== 'healthRestored' && bahan !== 'damage') {
            player.inventory[bahan] -= jumlah;
        }
    }

    // Tambahkan item ke inventory pemain
    if (!player.inventory[item]) {
        player.inventory[item] = 0;
    }
    player.inventory[item] += 1;
    savePlayerData(player);

    return `*Anda telah berhasil membuat ${item} dan menambahkannya ke inventaris Anda.*`;
};

// Fungsi untuk menggunakan item dan memulihkan health atau menambah damage
const useItem = (item) => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_";
    }

    if (!player.craftedItems[item] || player.craftedItems[item] <= 0) {
        return `*Anda tidak memiliki ${item} dalam inventaris Anda.*`;
    }

    const recipe = craftingRecipes[item];
    if (!recipe) {
        console.log(`Item ${item} tidak ditemukan dalam craftingRecipes`);
        return `*Item ${item} tidak dapat digunakan.*`;
    }

    if (recipe.healthRestored) {
        if (player.health >= 150) {
            return "*Health Anda mencapai max, Anda tidak bisa menambahnya lagi.*";
        }
        player.health = Math.min(player.health + recipe.healthRestored, 150); // Asumsikan health maksimal adalah 150
        player.craftedItems[item] -= 1;
        savePlayerData(player);
        return `*Anda telah menggunakan ${item} dan memulihkan ${recipe.healthRestored} health. Health Anda sekarang: ${player.health}*`;
    } else if (recipe.damage) {
        if (player.currentWeapon) {
            return `*Saat ini Anda sedang menggunakan ${player.currentWeapon}. Lepaskan senjata tersebut terlebih dahulu sebelum menggunakan senjata lain.*`;
        }
        player.damage = (player.damage || 0) + recipe.damage;
        player.currentWeapon = item;
        player.craftedItems[item] -= 1;
        savePlayerData(player);
        return `*Anda telah menggunakan ${item} dan menambah damage sebesar ${recipe.damage}. Damage Anda sekarang: ${player.damage}*`;
    } else {
        return `*Item ${item} tidak dapat digunakan.*`;
    }
};

const releaseWeapon = (item) => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_";
    }

    if (!player.currentWeapon) {
        return `*Anda tidak sedang menggunakan senjata apapun.*`;
    }

    if (player.currentWeapon !== item) {
        return `*Anda tidak sedang menggunakan ${item}. Anda sedang menggunakan ${player.currentWeapon}.*`;
    }

    const recipe = craftingRecipes[item];
    if (!recipe || !recipe.damage) {
        return `*Item ${item} bukan senjata dan tidak bisa dilepas.*`;
    }

    player.damage -= recipe.damage;
    player.currentWeapon = null;
    savePlayerData(player);

    return `*Anda telah melepas ${item}. Damage Anda sekarang: ${player.damage}*`;
};

const startGame = () => {
    if (player.started) {
        return '*Selamat datang kembali survivor!!, Entah apa yang akan terjadi kedepannya anda harus selalu waspada dan hati-hati!!*';
    } else {
        player = { started: true, health: 1000, damage: 25, inventory: {}, searchCount: 0, currentSearchItems: [], currentLocation: 'basecamp', hasMoved: false, hasSearched: false, underAttack: false, craftedItems: {} };
        savePlayerData(player);
        return '*Permainan dimulai! Anda adalah seorang yang selamat dari wabah zombie yang meyerang kota, Anda tersadar disebuah rumah yang bisa dibilang aman, Anda memutuskan untuk menjadikan rumah tersebut sebagai basecamp tempat anda berlindung, Tetapi apakah anda hanya akan berlindung hingga mati kelaparan??*\n*Mulailah pergi menjelajah berbagai tempat untuk menemukan item yang berguna*\n\n\n*Note :* _Gunakan Perintah *.lshelp* untuk bantuan dalam bermain_';
    }
};

const exitGame = () => {
    player.started = false;
    savePlayerData(player);
    return '*Permainan dihentikan. Pastikan anda sudah sudah save game sebelumnya dengan memasukkan* _.lssave_';
};

const searchPlace = () => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_.";
    }

    if (!player.hasMoved) {
        return "*Anda harus menjelajahi tempat terlebih dahulu menggunakan perintah* _.pergi_ *sebelum bisa mencari.*";
    }

    const place = player.currentLocation;
    const placeData = places[place];

    if (!placeData) {
        return `*Tempat ${place} tidak ditemukan, Gunakan perintah* _.listtempat_ *untuk melihat daftar tempat*`;
    }

    if (place === 'basecamp') {
        return "*Ini adalah basecamp kamu telah mentapkanya sebagai markasmu. Kamu tidak bisa mencari item di sini, Pergilah menjelajah untuk mencari item yang penting*";
    }

    player.searchCount += 1;
    player.currentSearchItems = randomSample(placeData.items, 3);
    player.hasSearched = true;
    savePlayerData(player);

    if (player.searchCount % 4 === 0) {
        player.underAttack = true;
        savePlayerData(player);
        return `*Bahayaa!! ada ${placeData.zombies} zombie melihatmu saat melakukan pencarian, Gunakan perintah* _.lawan_ *untuk melawan zombie*`;
    }

    return `*Anda melakukan pencarian di ${place} dan menemukan* _${player.currentSearchItems.join(', ')}_, *Gunakan perintah* _.ambil_ *untuk mengambil salah satu.*`;
};

const takeItem = (item) => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_";
    }

    if (!player.hasSearched) {
        return "*Anda belum melakukan pencarian gunakan perintah* _.cari_  *sebelum bisa mengambil item.*";
    }

    if (player.currentSearchItems.includes(item)) {
        if (player.inventory[item]) {
            player.inventory[item]++;
        } else {
            player.inventory[item] = 1;
        }
        player.currentSearchItems = [];
        player.hasSearched = false;
        savePlayerData(player);
        return `*Anda berhasil mengambil:* _${item}_, *Gunakan perintah* _.inv_ *untuk melihat inventory*`;
    } else {
        return "*Item yang anda ambil tidak ada dihasil pencarian*";
    }
};

const getPlayerInventory = () => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_";
    }

    // Pastikan player.inventory dan player.craftedItems selalu didefinisikan
    player.inventory = player.inventory || {};
    player.craftedItems = player.craftedItems || {};

    let inventoryList = `*Health: ${player.health}*\n*Damage: ${player.damage}*\n*Lokasi Saat Ini: ${player.currentLocation}*\n\n*Inventaris Anda :*\n\n*Item Hasil Pencarian:*\n`;
    for (const [item, count] of Object.entries(player.inventory)) {
        inventoryList += `${item} : ${count}\n`;
    }

    inventoryList += `\n*Item Hasil Crafting:*\n`;
    for (const [item, count] of Object.entries(player.craftedItems)) {
        inventoryList += `${item} : ${count}\n`;
    }

    return inventoryList.trim();
};

const movePlayer = (place) => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_'.";
    }

    if (!places[place]) {
        return `*Tempat* _${place}_ *tidak ditemukan, gunakan perintah* _.listtempat_ *untuk melihat daftar tempat*`;
    }

    player.currentLocation = place;
    player.hasMoved = true;
    player.hasSearched = false;
    player.underAttack = false;
    savePlayerData(player);
    return `*Anda berhasil pergi ke ${place} dengan selamat, Disini tampak menarik, Mungkin anda bisa menemukan sesuatu item disini*`;
};

const fightZombie = () => {
    if (!player.started) {
        return "*Tidak ada sesi game saat ini, Buat sesi baru dengan memasukkan* _.lsstart_'.";
    }

    if (!player.underAttack) {
        return "*Saat ini tidak ada zombie yang ingin menyerangmu, Namun tetap waspada mereka memiliki insting yang bagus*";
    }
    
   const placeData = places[player.currentLocation];
    if (!placeData) {
        return "*Anda tidak berada di suatu pertarungan!!*";
    }

    const zombie = { health: 170, damage: 8 };
    let fightLog = '*Pertarungan dimulai!*\n';

    while (player.health > 0 && zombie.health > 0) {
        // Player attacks zombie
        zombie.health -= player.damage;
        fightLog += `*Anda menyerang zombie dan memberikan ${player.damage} damage*\n*health zombie tersisa : ${zombie.health}*\n`;

        if (zombie.health <= 0) {
            fightLog += '*Anda berhasil mengalahkan zombie!!, Namun anda juga terluka*\n';
            player.underAttack = false;
            savePlayerData(player);
            return fightLog;
        }

        // Zombie attacks player
        player.health -= zombie.damage;
        fightLog += `Zombie menyerang anda menggunakan cakarnya dan memberikan ${zombie.damage} damage.\nHealth Anda: ${player.health}\n`;

        if (player.health <= 0) {
            savePlayerData(player);
            return '*Anda kelelahan dan zombie berhasil mengigit anda, GAME OVER!!*';
        }
    }

    savePlayerData(player);
    return fightLog;
};

const zombieAttack = (zombies) => {
    player.health -= zombies * 10;
    if (player.health <= 0) {
        savePlayerData(player);
        return '*Anda kelelahan dan zombie berhasil mengigit anda, GAME OVER!!*';
    }
    savePlayerData(player);
    return `Anda diserang oleh ${zombies} zombie dan kehilangan ${zombies * 10} health.\nHealth Anda: ${player.health}`;
};

const randomSample = (array, size) => {
    const shuffled = array.slice();
    let i = array.length;
    const min = i - size;
    let temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
};

module.exports = { startGame, releaseWeapon, craftItem, useItem, exitGame, searchPlace, takeItem, getPlayerInventory, movePlayer, fightZombie, loadPlayerData };
