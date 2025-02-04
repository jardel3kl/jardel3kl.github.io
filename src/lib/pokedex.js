export const pokedex = Array.from({ length: 151 }, (_, i) => ({
    nome: getPokemonName(i + 1),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
    tipo: getPokemonType(i + 1) || "Tipo desconhecido"
}));

function getPokemonName(id) {
    const names = [
        'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
        'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree',
        'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate',
        'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash',
        'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy',
        'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat',
        'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett',
        'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe',
        'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop',
        'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel',
        'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite',
        'Magneton', 'Farfetch’d', 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder',
        'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler',
        'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan',
        'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan',
        'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx',
        'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee',
        'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops',
        'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite',
        'Mewtwo', 'Mew'
    ];
    return names[id - 1] || "Nome desconhecido";
}

function getPokemonType(id) {
    const types = [
        'Grama/Venenoso', 'Grama/Venenoso', 'Grama/Venenoso', 'Fogo', 'Fogo', 'Fogo/Voador',
        'Agua', 'Agua', 'Agua', 'Inseto', 'Inseto', 'Inseto/Voador',
        'Inseto/Venenoso', 'Inseto/Venenoso', 'Inseto/Venenoso', 'Normal/Voador', 'Normal/Voador', 'Normal/Voador',
        'Normal', 'Normal', 'Normal/Voador', 'Normal/Voador', 'Venenoso', 'Venenoso',
        'Eletrico', 'Eletrico', 'Terra', 'Terra', 'Venenoso', 'Venenoso', 'Venenoso/Terra', 'Venenoso', 'Venenoso', 'Venenoso/Terra',
        'Fada', 'Fada', 'Fogo', 'Fogo', 'Normal/Fada', 'Normal/Fada', 'Venenoso/Voador', 'Venenoso/Voador',
        'Grama/Venenoso', 'Grama/Venenoso', 'Grama/Venenoso', 'Inseto/Grama', 'Inseto/Grama', 'Inseto/Venenoso', 'Inseto/Venenoso', 'Terra',
        'Terra', 'Normal', 'Normal', 'Agua', 'Agua', 'Lutador', 'Lutador', 'Fogo',
        'Fogo', 'Agua', 'Agua', 'Agua/Lutador', 'Psiquico', 'Psiquico', 'Psiquico', 'Lutador',
        'Lutador', 'Lutador', 'Grama/Venenoso', 'Grama/Venenoso', 'Grama/Venenoso', 'Agua/Venenoso', 'Agua/Venenoso',
        'Pedra/Terra', 'Pedra/Terra', 'Pedra/Terra', 'Fogo', 'Fogo', 'Agua/Psiquico', 'Agua/Psiquico', 'Eletrico/Aço',
        'Eletrico/Aço', 'Normal/Voador', 'Normal/Voador','Normal/Voador', 'Agua', 'Agua/Gelo', 'Venenoso', 'Venenoso',
        'Agua', 'Agua/Gelo', 'Fantasma/Venenoso', 'Fantasma/Venenoso', 'Fantasma/Venenoso', 'Pedra/Terra', 'Psiquico', 'Psiquico',
        'Agua', 'Agua', 'Eletrico', 'Eletrico', 'Grama/Psiquico', 'Grama/Psiquico', 'Terra', 'Terra',
        'Lutador', 'Lutador', 'Normal', 'Venenoso', 'Venenoso', 'Pedra/Terra', 'Pedra/Terra', 'Normal',
        'Grama', 'Normal', 'Agua', 'Agua', 'Agua', 'Agua', 'Agua', 'Agua/Psiquico', 'Psiquico/Fada','Inseto/Voador',
        'Gelo/Psiquico', 'Eletrico', 'Fogo', 'Normal', 'Normal', 'Agua', 'Agua', 'Agua/Gelo',
        'Normal', 'Normal','Agua','Eletrico','Fogo','Normal','Pedra/Agua','Pedra/Agua','Pedra/Agua','Pedra/Agua','Pedra/Voador',
        'Normal','Gelo/Voador', 'Eletrico/Voador', 'Fogo/Voador', 'Dragao', 'Dragao', 'Dragao/Voador',
        'Psiquico', 'Psiquico'
    ];
    return types[id - 1] || "Tipo desconhecido";
}
