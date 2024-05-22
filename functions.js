
let studants = [
  {
    name: 'Gabriela',
    note1: 10,
    note2: 4.4,
  },
  {
    name: 'Lucas',
    note1: 6.2,
    note2: 5.3,
  },
  {
    name: 'Pedro',
    note1: 7.0,
    note2: 10,
  },
  {
    name: 'Mateus',
    note1: 6.0,
    note2: 6.6,
  },
  {
    name: 'Isac',
    note1: 10,
    note2: 10,
  },
  {
    name: 'Gabriel',
    note1: 5.0,
    note2: 0,
  },
  {
    name: 'Kaique',
    note1: 9,
    note2: 5,
  },

]


function sum (mediaStudant) {
  return`
  A média do(a) aluno(a) ${mediaStudant.name} é: ${((mediaStudant.note1 + mediaStudant.note2) / 2)} `
}

for(let mediaStudant of studants) {
  let mediaNotes = sum(mediaStudant)
  let verify = (mediaStudant.note1 + mediaStudant.note2) / 2 >= 7 ? `Parabéns ${mediaStudant.name} você passou!` : `Infelizmente ${mediaStudant.name} você não passou!`
  alert(`${mediaNotes} \n ${verify}`)

}


