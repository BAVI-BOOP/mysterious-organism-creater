// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory= (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate () {
      while (true) {
        var item_num = Math.floor(Math.random() * 15);
        const dnaBases = ['A', 'T', 'C', 'G'];
        var newItem = dnaBases[Math.floor(Math.random()*dnaBases.length)];
        if (this.dna[item_num] != newItem) {
         this.dna[item_num] = newItem
          break;
        }
      }
    },
  compareDna: function(anotherPAequor){
    var percent = 0;
    for (let i = 0; i < this.dna.length; i++) {
      if ( this.dna[i] === anotherPAequor.dna[i]) {
        percent += 6.66666667;
      }
    }
    console.log(`specimen #${this.specimenNum} and specimen #${this.anotherPAequor.dna} have #${percent}% DNA in common`)
  },
  willLikelySurvive: function() {
    let percent = 0;
    for (let i = 0; i < this.dna.length; i++) {
      if ( this.dna[i] === 'C' || this.dna[i] === 'G') {
        percent += 6.66666667;
      }
    }
    if(percent >= 60) {
      return true
    } else {
      return false
    }
  }
  }


};



const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)



