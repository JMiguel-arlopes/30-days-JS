const heroes = [
    {first: 'Incrivel', last: 'Hulk', year: 1879, comic: 'marvel'},
    {first: 'Doutor', last: 'Estranho', year: 1879, comic: 'marvel'},
    {first: 'Pantera', last: 'Negra', year: 1879, comic: 'marvel'},
    {first: 'Homem', last: 'Aranha', year: 1879, comic: 'marvel'},
    {first: 'Capitão', last: 'América', year: 1879, comic: 'marvel'},
]

const peoples = ['Fiasda, Belegziso', 'Wiaon, Bokaszu',
    'Yasmei, Dunlaun', 'Gorgnowu, Olurwayco', 'Reyxiowu, Cunuydis',
    'Luynua, Zimuizua', 'Riemusoa, Vumun', 'Riemusoa, Tiolosoe', 'Digor, John']

let numbers = [0, 3, 21, 2, 1, 5, 13, 34, 1, 8]

// 01. Filtre as pessoas com mais de 6 letras no nome:
const filterLetter = peoples.filter(people => people.length > 6)
console.table(filterLetter);

// 02. Adicione o nome completo em Heroes:
const completeName = heroes.map(hero => `${hero.first} ${hero.last}`);
console.table(completeName)

// 03. Coloque os números em ordem:
const orderned = numbers.sort((a, b) => a - b)
console.log(orderned)

// 04. Faça média dos números:
let mediaNumbers = numbers.reduce((total, number, index, array) => {
    total += number;
    if(index == array.length - 1) {
        return total/array.length;
    } else {
        return total;
    }
})
console.log(mediaNumbers)

// 06. Mantenha os nomes em ordem alfabética com base em seu primeiro nome:
const alpha = peoples.sort((a, b) => {
    const [aFirstName, aLastName] = a.split(', ')
    const [bFirstName, bLastName] = b.split(', ')

    return aFirstName > bFirstName ? 1 : -1
})

console.log(alpha)
