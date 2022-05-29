const movies = 
[
    {
        name: 'House of Cards',
        mini: 'img/mini/houseCards.jpg',
        desc:'Melhor série ficcional de política, só perde pro Brasil de 2016-2022',
        poster:'img/poster/house-cards.jpg',

    },
    {
        name: 'Breaking Bad',
        mini:'/img/mini/breakingBad.jpg',
        desc:'I am the one who knocks',
        poster:'img/poster/breaking-bad.jpg',

    },
    {
        name: 'Capitão America: Guerra Civil',
        mini:'/img/mini/civilWar.jpg',
        desc:'Nemvi e Nemverei',
        poster:'img/poster/civil-war.jpg',
    },
    {
        name: 'O Hobbit',
        mini:'/img/mini/hobbit.jpg',
        desc:'Tanto potencial desperdiçado, mas o dragão é legal',
        poster:'img/poster/the-hobbit.jpg',

    },
    {
        name: 'House MD',
        mini:'/img/mini/houseMd.jpg',
        desc:'Sherlock Holmes com um personagem ainda menos carismático e mais irritante. Assista ao mesmo episódio 400x com personagens e doenças diferentes!',
        poster:'img/poster/house-md.jpg',

    },
    {
        name: 'Pokémon',
        mini:'/img/mini/pokemon.jpg',
        desc:'Fofo, coerente, de qualidade',
        poster:'img/poster/pokemon-.jpg',

    },
    {
        name: 'Smallville',
        mini:'/img/mini/smallville.jpg',
        desc: 'Somebody save me',
        poster:'img/poster/smallvile-.jpg',

    },
    {
        name: 'Star Wars: A Ascenção Skywalker',
        mini:'/img/mini/starWars.jpg',
        desc:'Oh god please no...NO!.....NOOOOOOOO!',
        poster:'img/poster/star-wars.jpg',

    },
    {
        name: 'Supernatural',
        mini:'/img/mini/supernatural.jpg',
        desc:'Como ganhar dinheiro durante 20 anos com uma serie que acabou à 18 anos',
        poster:'img/poster/supernatural-.jpg',

    },
    {
        name: 'The Umbrella Academy',
        mini:'/img/mini/umbrella.jpg',
        desc:'10/10 Elliot Page',
        poster:'img/poster/avengers-endgame2.jpg',

    },
    {
        name: 'Avengers - Endgame',
        mini:'/img/mini/avengersEndgame.jpg',
        desc:'Assemble!',
        poster:'img/poster/avengers-endgame.jpg',

    },
]

const filmePrincipal = document.querySelector('.filme-principal');
const descricao = document.querySelector('.descricao');
const titulo = document.querySelector('.titulo');
filmePrincipal.style.backgroundImage = `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%),url(${movies[10].poster})`;
filmePrincipal.style.backgroundSize = 'content';

titulo.textContent = movies[10].name;
descricao.textContent = movies[10].desc;