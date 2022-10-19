const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = pokemons => pokemons.reduce((accumulator, { name, id, types }) => {
    const elementTypes = types.map(typeInfo => typeInfo.type.name)

    accumulator += `
                <li class="card ${elementTypes[0]}">
                <img class="card-image" alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"/>
                    <h2 class="title">${id}. ${name}</h2>
                    <p class="card-subtitle">${elementTypes.join(" | ")}</p>
                </li>`
    return accumulator
}, '')
//quando precisamos reduzir um array a outro tipo de dado, utiliza-se o Reduce   

const insertPokemonIntoPage = pokemons => {
    const ul = document.querySelector("[data-js='pokedex']")

    ul.innerHTML = pokemons
}


const pokemonPromises = generatePokemonPromises()

Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insertPokemonIntoPage)


// THEN? Recebe como parâmetro o retorno da promisse acima
// AJAX? JavaScript assíncrono sem recarregar a página
// PROMISES? Objeto que representa o sucesso ou a falha de uma reprodução assíncrona

const numbers = [1, 2, 3]

const sum = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sum)


const cart = [
    { name: "Dark Souls III", price: 95.03 },
    { name: "Tomb Raider", price: 101.19 },
    { name: "Sekiro", price: 179.99 },
    { name: "Resident Evil 2", price: 119.90 },
    { name: "Death Stranding", price: 149.99 },
]


const productList = cart.reduce((accumulator, { name }) => `${accumulator} - ${name}\n`, "")

console.log(productList)


const people = [
    { id: 5, name: "Patrick", age: 24, federativeUnit: "Paraná" },
    { id: 81, name: "André", age: 24, federativeUnit: "Paraná" },
    { id: 47, name: "Erickson", age: 24, federativeUnit: "Santa Catarina" },
    { id: 87, name: "Eliza", age: 26, federativeUnit: "Rio Grande do Sul" },
    { id: 9, name: "Bianca", age: 24, federativeUnit: "São Paulo" },
    { id: 73, name: "Romarinho", age: 3, federativeUnit: "Minas Gerais" },
]

const agesFrequency = people.reduce((accumulator, { age }) => {
    accumulator[age] = accumulator[age] + 1 || 1
    //essa atribuição cria uma nova propriedade se ela não existir

    return accumulator
}, {})

console.log(agesFrequency)