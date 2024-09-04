const fs = require('fs')
const uang = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const ikan = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const planet = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const coal = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const stone = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const ore = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const ingot = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const kayu = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
const _level = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))
let besiAwal = 15;
  let goldAwal = 10;
  let emeraldAwal = 5;
  let umpanAwal = 5;
  let potionAwal = 1;


let _RPG = JSON.parse(fs.readFileSync('./games/rpg/inventory.json'))

const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./games/rpg/invetory.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
const obj = { id: sender, xp: 1, level: 1 }
_level.push(obj)
fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_level))
}

const addATM = (sender) => {
	const objo = {id: sender, uang : 0}
	_RPG.push(objo)
	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
}
        
const addKoinUser = (sender, amount) => {
    let position = false
    Object.keys(_RPG).forEach((i) => {
        if (_RPG[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _RPG[position].uang += amount
        fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    }
}
    
const checkATMuser = (sender) => {
	let position = false
    Object.keys(_RPG).forEach((i) => {
        if (_RPG[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _RPG[position].uang
    }
}

const addIkan = (sender, amount) => {
        let position = false
        Object.keys(_RPG).forEach((i) => {
    	    if (_RPG[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
        _RPG[position].fish += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    	}
    }
    
const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].fish
	}
}

const getMancingId = (sender) => {
    let position = false
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].id
    }
}
    
const addMancingId = (sender) => {
    const ovj = {id: sender, fish: 0}
    _RPG.push(ovj)
    fs.writeFileSync('./games/rpg/limit.json', JSON.stringify(_RPG))
    }

const jualIkan = (sender, amount) => {
    	let position = false
        Object.keys(_RPG).forEach((i) => {
            if (_rpg[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            _rpg[position].fish -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }
    
const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(planet))
    	}
    }
    
const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
const addPlaneId = (sender) => {
    const ovj = {id: sender, hape: 0}
    planet.push(ovj)
    fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(planet))
    }

const jualbahankimia = (sender, amount) => {
    	let position = false
        Object.keys(planet).forEach((i) => {
            if (planet[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            planet[position].hape -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }
 
 const addCoal = (sender, amount) => {
        let position = false
        Object.keys(_RPG).forEach((i) => {
    	    if (_RPG[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	_RPG[position].arang += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].id
    }
}
    
const addMiningId = (sender) => {
    const ovj = {id: sender, arang: 0}
    _RPG.push(ovj)
    fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    }

const jualcoal = (sender, amount) => {
    	let position = false
        Object.keys(_RPG).forEach((i) => {
            if (_RPG[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            _RPG[position].arang -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }
    
 
const addStone = (sender, amount) => {
        let position = false
        Object.keys(_RPG).forEach((i) => {
    	    if (_RPG[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	_RPG[position].batu += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    	}
    }
    
const getMiningstone = (sender) => {
    let position = false 
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].id
    }
}
    
const addBatuId = (sender) => {
    const ovj = {id: sender, batu: 0}
    _RPG.push(ovj)
    fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(stone))
    }

const jualstone = (sender, amount) => {
    	let position = false
        Object.keys(_RPG).forEach((i) => {
            if (_RPG[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            _RPG[position].batu -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }

const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(ore))
    	}
    }
    
const getMiningore = (sender) => {
    let position = false 
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].copperore
	}
}

const getOreId = (sender) => {
    let position = false
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].id
    }
}
    
const addOreId = (sender) => {
    const ovj = {id: sender, copperore: 0}
    _RPG.push(ovj)
    fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    }

const jualore = (sender, amount) => {
    	let position = false
        Object.keys(_RPG).forEach((i) => {
            if (_RPG[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            _RPG[position].copperore -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }
    
const addIngot = (sender, amount) => {
        let position = false
        Object.keys(_RPG).forEach((i) => {
    	    if (_RPG[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	_RPG[position].copperingot += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    	}
    }
    
const getMiningingot = (sender) => {
    let position = false 
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].copperingot
	}
}

const getIngotId = (sender) => {
    let position = false
    Object.keys(_RPG).forEach((i) => {
	if (_RPG[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return _RPG[position].id
    }
}
    
const addIngotId = (sender) => {
    const ovj = {id: sender, copperingot: 0}
    _RPG.push(ovj)
    fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    }

const jualingot = (sender, amount) => {
    	let position = false
        Object.keys(_RPG).forEach((i) => {
            if (_RPG[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            _RPG[position].copperingot -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }

const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(kayu))
    	}
    }
    
const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
const addNebangId = (sender) => {
    const ovj = {id: sender, wood: 0}
    kayu.push(ovj)
    fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(kayu))
    }

const jualKayu = (sender, amount) => {
    	let position = false
        Object.keys(kayu).forEach((i) => {
            if (kayu[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            kayu[position].wood -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }
  
const checkPetualangUser = (sender) => {
            let status = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    status = true
                }
            })
            return status
        } 
const addInventori = (sender) => {
            var obj = {id: sender, emas: goldAwal, diamond: 0, ikan: 0, besi: besiAwal, gold: goldAwal, emerald: emeraldAwal, umpan: umpanAwal, potion: potionAwal}
            _RPG.push(obj)
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        } 
const sellBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
  const addBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi += amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
  const kurangBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
  const getBesi = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].besi
            }
        }     
 const addDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond += amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
        
const sellDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
const getDm = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].diamond
            }
        }
const addEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas += amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].gold -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getEmas = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].emas
            }
        }             
        const sellEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
 const addEmerald = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emerald += amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangEmerald = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emerald -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getEmerald = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].emerald
            }
        }     
 const addUmpan = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].umpan += amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangUmpan = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].umpan -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getUmpan = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].umpan
            }
        }  
const addPotion = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].potion += amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const kurangPotion = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].potion -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
   const getPotion = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].potion
            }
        }       
var addFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].fish += amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        }
        
       var sellFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].fish -= amount
                fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
            }
        } 
               
       var getFish = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].fish
            }
        }
        var addBatu = (sender, amount) => {
        let position = false
        Object.keys(_RPG).forEach((i) => {
    	    if (_RPG[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	_RPG[position].batu += amount
    	fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
    	}
    }
    var jualStone = (sender, amount) => {
    	let position = false
        Object.keys(_RPG).forEach((i) => {
            if (_RPG[i].id === sender) {
                position = i
            }
        })
        if (position !== false) {
            _RPG[position].batu -= amount
            fs.writeFileSync('./games/rpg/inventory.json', JSON.stringify(_RPG))
        }
    }
 module.exports = { addBesi, 
                     addEmas, 
                     addEmerald, 
                     addUmpan,
                     addPotion,
                     kurangBesi, 
                     kurangEmas, 
                     kurangEmerald, 
                     kurangUmpan,
                     kurangPotion,
                     getBesi, 
                     getEmas, 
                     getEmerald,
                     getUmpan,
                     getPotion,
					getFish, sellFish, addFish, sellEmas, addEmas, getDm, addDm, sellDm, sellBesi, addInventori, checkPetualangUser,  getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addBatu,getMiningstone,getBatuId,addBatuId,jualStone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu }
 