// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
    const pAequor = {
    _specimenNum: specimenNum,
    _dna: dna,
  
    mutate() {
      const randBaseIndex = Math.floor(Math.random() * 15);
      const dnaBases = ['A', 'T', 'C', 'G'];
      this._dna[randBaseIndex] = dnaBases.filter(base => base !== this._dna[randBaseIndex])[Math.floor(Math.random() * 3)];
      return this._dna;
    },
  
    compareDNA(pAequor) {
      const matches = this._dna.reduce((accumulator, currentValue, currentIndex) => {
        if(currentValue === pAequor._dna[currentIndex]) {
          accumulator++;
        }
        return accumulator;
      }, 0);
      console.log(`${matches/this._dna.length * 100}% match`);
    },
  
    willLikelySurvive() {
      return (this._dna.filter(base => base === 'C' || base === 'G').length / this._dna.length * 100) >= 60;
    }
  
  }
  return pAequor;
  }
  
  const pAequorArr = [];
  for(let i = 0; i < 30; i++) {
    pAequorArr.push(pAequorFactory(i, mockUpStrand()));
  }