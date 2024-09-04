const fs = require('fs');

const addSaldo = (userId, amount, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === userId) {
            position = x;
        }
    });
    if (position !== null) {
        _dir[position].saldo += amount;
        fs.writeFileSync('./setup/database/saldo.json', JSON.stringify(_dir, null, 3));
    } else {
        var object_add = { id: userId, saldo: amount };
        _dir.push(object_add);
        fs.writeFileSync('./setup/database/saldo.json', JSON.stringify(_dir, null, 3));
    }
};

const minSaldo = (userId, amount, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === userId) {
            position = x;
        }
    });
    if (position !== null) {
        _dir[position].saldo -= amount;
        fs.writeFileSync('./setup/database/saldo.json', JSON.stringify(_dir, null, 3));
    }
};

const cekSaldo = (userId, _dir) => {
    let position = null;
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === userId) {
            position = x;
        }
    });
    if (position !== null) {
        return _dir[position].saldo;
    } else {
        return 0;
    }
};

const transferSaldo = (fromUserId, toUserId, amount, _dir) => {
    let fromPosition = null;
    let toPosition = null;

    // Mencari posisi pengguna pengirim dan penerima dalam direktori
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === fromUserId) {
            fromPosition = x;
        }
        if (_dir[x].id === toUserId) {
            toPosition = x;
        }
    });

    // Memeriksa apakah kedua pengguna ditemukan
    if (fromPosition !== null && toPosition !== null) {
        // Memeriksa apakah saldo pengirim cukup
        if (_dir[fromPosition].saldo >= amount) {
            _dir[fromPosition].saldo -= amount;
            _dir[toPosition].saldo += amount;
            fs.writeFileSync('./setup/database/saldo.json', JSON.stringify(_dir, null, 3));
            return `Transfer berhasil: Rp${amount} dari @${fromUserId.split("@")[0]} ke @${toUserId.split("@")[0]}`;
        } else {
            return `Saldo tidak cukup untuk transfer. Saldo saat ini: Rp${_dir[fromPosition].saldo}`;
        }
    } else {
        return `Pengguna tidak ditemukan.`;
    }
};

const sellItem = (userId, playerInventory, itemName, _dir) => {
    const itemIndex = playerInventory.findIndex(i => i.name === itemName);
    if (itemIndex !== -1) {
        const item = playerInventory[itemIndex];
        playerInventory.splice(itemIndex, 1);
        addSaldo(userId, item.price, _dir);
        return {
            message: `Anda telah menjual ${itemName} seharga ${item.price}. Saldo Anda sekarang: ${cekSaldo(userId, _dir)}`,
            balance: cekSaldo(userId, _dir)
        };
    } else {
        return {
            message: "Item tidak ditemukan di inventori Anda.",
            balance: cekSaldo(userId, _dir)
        };
    }
};

module.exports = {
    addSaldo,
    minSaldo,
    cekSaldo,
    transferSaldo,
    sellItem
};