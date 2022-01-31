function trier_genre(gens){
  let h = []
  let f = []
  for(let personne of gens){
    if(personne.gender === 'male'){
      h.push(personne)
    }else{
      f.push(personne)
    }
  }
  return {hommes: h, femmes: f}
}

function plus_vieux(gens){
  let le_plus_vieux = gens[0]
  for(let personne of gens){
    if(le_plus_vieux.dob.age < personne.dob.age){
      le_plus_vieux = personne
    }
  }
  return le_plus_vieux
}

function plus_jeune(gens){
  let p = gens[0]
  for(let personne of gens){
    if(p.dob.age > personne.dob.age){
      p = personne
    }
  }
  return p
}

function filtre_tranche_age(gens, ageMin, ageMax){
  let tranche = [];
  for(let personne of gens){
    if (personne.dob.age <= ageMax && personne.dob.age >= ageMin) {
      tranche.push(personne);
    }
  }
  return tranche;
}

function pa_plus(gens, pa) {
  let tranche = [];
  for(let personne of gens){
    if (personne.pa > pa) {
      tranche.push(personne);
    }
  }
  return tranche;
}

module.exports = {
  trier_genre: trier_genre,
  plus_vieux: plus_vieux,
  plus_jeune: plus_jeune,
  filtre_tranche_age: filtre_tranche_age,
  pa_plus: pa_plus
}