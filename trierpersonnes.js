const data = require('./data.js')
const outils = require('./util.js')
const les_gens = data.results

for (let personne of les_gens) {
  let pa = 800 + (Math.random() * (2500 - 800))
  personne.pa = pa
}

let les_genres = outils.trier_genre(les_gens)
les_femmes = les_genres.femmes
let les_menageres = outils.filtre_tranche_age(les_femmes, 45, 60)
let ratio_menageres = les_menageres.length / data.results.length
let les_menageres_riches = outils.pa_plus(les_menageres, 2000)
console.log(les_menageres_riches);
