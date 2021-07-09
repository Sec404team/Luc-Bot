const fs = require('fs') 
const _pohoncactus = JSON.parse(fs.readFileSync('./database/adventure/pohon/pohoncactus.json'))
const _pohonnatal = JSON.parse(fs.readFileSync('./database/adventure/pohon/pohonnatal.json'))
const _pohoncemara = JSON.parse(fs.readFileSync('./database/adventure/pohon/pohoncemara.json'))
const _pohon = JSON.parse(fs.readFileSync('./database/adventure/pohon/pohon.json'))
const _bambu = JSON.parse(fs.readFileSync('./database/adventure/pohon/bambu.json'))
const _padi = JSON.parse(fs.readFileSync('./database/adventure/pohon/padi.json'))
const _pohonkelapa = JSON.parse(fs.readFileSync('./database/adventure/pohon/pohonkelapa.json'))
/********** FUNCTION pohoncactus ***************/
const addPohonCactus = (sender) => {
        	const obj = {id: sender, pohoncactus : 0}
            _pohoncactus.push(obj)
            fs.writeFileSync('./database/adventure/pohon/pohoncactus.json', JSON.stringify(_pohoncactus))
        }

        const addPohonCactusUser = (sender, amount) => {
        	let position = false
            Object.keys(_pohoncactus).forEach((i) => {
                if (_pohoncactus[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohoncactus[position].pohoncactus += amount
                fs.writeFileSync('./database/adventure/pohon/pohoncactus.json', JSON.stringify(_pohoncactus))
            }
        }
		
		const checkPohonCactususer = (sender) => {
        	let position = false
            Object.keys(_pohoncactus).forEach((i) => {
                if (_pohoncactus[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pohoncactus[position].pohoncactus
            }
        }
         
         const confirmPOHONCACTUS = (sender, amount) => {
             let position = false
            Object.keys(_pohoncactus).forEach((i) => {
                if (_pohoncactus[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohoncactus[position].pohoncactus -= amount
                fs.writeFileSync('./database/adventure/pohon/pohoncactus.json', JSON.stringify(_pohoncactus))
            }
        }
	/********** FUNCTION pohonnatal ***************/
const addPohonNatal = (sender) => {
        	const obj = {id: sender, pohonnatal : 0}
            _pohonnatal.push(obj)
            fs.writeFileSync('./database/adventure/pohon/pohonnatal.json', JSON.stringify(_pohonnatal))
        }

        const addPohonNatalUser = (sender, amount) => {
        	let position = false
            Object.keys(_pohonnatal).forEach((i) => {
                if (_pohonnatal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohonnatal[position].pohonnatal += amount
                fs.writeFileSync('./database/adventure/pohon/pohonnatal.json', JSON.stringify(_pohonnatal))
            }
        }
		
		const checkPohonNataluser = (sender) => {
        	let position = false
            Object.keys(_pohonnatal).forEach((i) => {
                if (_pohonnatal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pohonnatal[position].pohonnatal
            }
        }
         
         const confirmPOHONNATAL = (sender, amount) => {
             let position = false
            Object.keys(_pohonnatal).forEach((i) => {
                if (_pohonnatal[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohonnatal[position].pohonnatal -= amount
                fs.writeFileSync('./database/adventure/pohon/pohonnatal.json', JSON.stringify(_pohonnatal))
            }
        }
/********** FUNCTION pohoncemara ***************/
const addPohonCemara = (sender) => {
        	const obj = {id: sender, pohoncemara : 0}
            _pohoncemara.push(obj)
            fs.writeFileSync('./database/adventure/pohon/pohoncemara.json', JSON.stringify(_pohoncemara))
        }

        const addPohonCemaraUser = (sender, amount) => {
        	let position = false
            Object.keys(_pohoncemara).forEach((i) => {
                if (_pohoncemara[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohoncemara[position].pohoncemara += amount
                fs.writeFileSync('./database/adventure/pohon/pohoncemara.json', JSON.stringify(_pohoncemara))
            }
        }
		
		const checkPohonCemarauser = (sender) => {
        	let position = false
            Object.keys(_pohoncemara).forEach((i) => {
                if (_pohoncemara[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pohoncemara[position].pohoncemara
            }
        }
         
         const confirmPOHONCEMARA = (sender, amount) => {
             let position = false
            Object.keys(_pohoncemara).forEach((i) => {
                if (_pohoncemara[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohoncemara[position].pohoncemara -= amount
                fs.writeFileSync('./database/adventure/pohon/pohoncemara.json', JSON.stringify(_pohoncemara))
            }
        }
/********** FUNCTION pohon ***************/
const addPohon = (sender) => {
        	const obj = {id: sender, pohon : 0}
            _pohon.push(obj)
            fs.writeFileSync('./database/adventure/pohon/pohon.json', JSON.stringify(_pohon))
        }

        const addPohonUser = (sender, amount) => {
        	let position = false
            Object.keys(_pohon).forEach((i) => {
                if (_pohon[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohon[position].pohon += amount
                fs.writeFileSync('./database/adventure/pohon/pohon.json', JSON.stringify(_pohon))
            }
        }
		
		const checkPohonuser = (sender) => {
        	let position = false
            Object.keys(_pohon).forEach((i) => {
                if (_pohon[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pohon[position].pohon
            }
        }
         
         const confirmPOHON = (sender, amount) => {
             let position = false
            Object.keys(_pohon).forEach((i) => {
                if (_pohon[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohon[position].pohon -= amount
                fs.writeFileSync('./database/adventure/pohon/pohon.json', JSON.stringify(_pohon))
            }
        }	
/********** FUNCTION bambu ***************/
const addBambu = (sender) => {
        	const obj = {id: sender, bambu : 0}
            _bambu.push(obj)
            fs.writeFileSync('./database/adventure/pohon/bambu.json', JSON.stringify(_bambu))
        }

        const addBambuUser = (sender, amount) => {
        	let position = false
            Object.keys(_bambu).forEach((i) => {
                if (_bambu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bambu[position].bambu += amount
                fs.writeFileSync('./database/adventure/pohon/bambu.json', JSON.stringify(_bambu))
            }
        }
		
		const checkBambuuser = (sender) => {
        	let position = false
            Object.keys(_bambu).forEach((i) => {
                if (_bambu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bambu[position].bambu
            }
        }
         
         const confirmBAMBU = (sender, amount) => {
             let position = false
            Object.keys(_bambu).forEach((i) => {
                if (_bambu[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bambu[position].bambu -= amount
                fs.writeFileSync('./database/adventure/pohon/bambu.json', JSON.stringify(_bambu))
            }
        }	
/********** FUNCTION padi ***************/
const addPadi = (sender) => {
        	const obj = {id: sender, padi : 0}
            _padi.push(obj)
            fs.writeFileSync('./database/adventure/pohon/padi.json', JSON.stringify(_padi))
        }

        const addPadiUser = (sender, amount) => {
        	let position = false
            Object.keys(_padi).forEach((i) => {
                if (_padi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _padi[position].padi += amount
                fs.writeFileSync('./database/adventure/pohon/padi.json', JSON.stringify(_padi))
            }
        }
		
		const checkPadiuser = (sender) => {
        	let position = false
            Object.keys(_padi).forEach((i) => {
                if (_padi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _padi[position].padi
            }
        }
         
         const confirmPADI = (sender, amount) => {
             let position = false
            Object.keys(_padi).forEach((i) => {
                if (_padi[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _padi[position].padi -= amount
                fs.writeFileSync('./database/adventure/pohon/padi.json', JSON.stringify(_padi))
            }
        }	

/********** FUNCTION pohonkelapa ***************/
const addPohonKelapa = (sender) => {
        	const obj = {id: sender, pohonkelapa : 0}
            _pohonkelapa.push(obj)
            fs.writeFileSync('./database/adventure/pohon/pohonkelapa.json', JSON.stringify(_pohonkelapa))
        }

        const addPohonKelapaUser = (sender, amount) => {
        	let position = false
            Object.keys(_pohonkelapa).forEach((i) => {
                if (_pohonkelapa[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohonkelapa[position].pohonkelapa += amount
                fs.writeFileSync('./database/adventure/pohon/pohonkelapa.json', JSON.stringify(_pohonkelapa))
            }
        }
		
		const checkPohonKelapauser = (sender) => {
        	let position = false
            Object.keys(_pohonkelapa).forEach((i) => {
                if (_pohonkelapa[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pohonkelapa[position].pohonkelapa
            }
        }
         
         const confirmPOHONKELAPA = (sender, amount) => {
             let position = false
            Object.keys(_pohonkelapa).forEach((i) => {
                if (_pohonkelapa[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pohonkelapa[position].pohonkelapa -= amount
                fs.writeFileSync('./database/adventure/pohon/pohonkelapa.json', JSON.stringify(_pohonkelapa))
            }
        }			

module.exports = {
	addPohonCactus,
	addPohonCactusUser,
	checkPohonCactususer,
	confirmPOHONCACTUS,
	addPohonNatal,
	addPohonNatalUser,
	checkPohonNataluser,
	confirmPOHONNATAL,
	addPohonCemara,
	addPohonCemaraUser,
	checkPohonCemarauser,
	confirmPOHONCEMARA,
	addPohon,
	addPohonUser,
	checkPohonuser,
	confirmPOHON,
	addBambu,
	addBambuUser,
	checkBambuuser,
	confirmBAMBU,
	addPadi,
	addPadiUser,
	checkPadiuser,
	confirmPADI,
	addPohonKelapa,
	addPohonKelapaUser,
	checkPohonKelapauser,
	confirmPOHONKELAPA
}