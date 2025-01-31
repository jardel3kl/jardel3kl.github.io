export const pokedex = Array.from({ length: 151 }, (_, i) => ({
    nome: getPokemonName(i + 1),
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
    tipo: getPokemonType(i + 1)
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
    return names[id - 1];
}

function getPokemonType(id) {
    const types = [
        'Grama/Venenoso', 'Grama/Venenoso', 'Grama/Venenoso', 'Fogo', 'Fogo', 'Fogo/Voador',
        'Água', 'Água', 'Água', 'Inseto', 'Inseto', 'Inseto/Voador',
        'Inseto/Venenoso', 'Inseto/Venenoso', 'Inseto/Venenoso', 'Normal/Voador', 'Normal/Voador', 'Normal/Voador',
        'Normal', 'Normal', 'Normal/Voador', 'Normal/Voador', 'Venenoso', 'Venenoso',
        'Elétrico', 'Elétrico', 'Terra', 'Terra', 'Venenoso', 'Venenoso', 'Venenoso/Terra', 'Venenoso', 'Venenoso', 'Venenoso/Terra',
        'Fada', 'Fada', 'Fogo', 'Fogo', 'Normal/Fada', 'Normal/Fada', 'Venenoso/Voador', 'Venenoso/Voador',
        'Grama/Venenoso', 'Grama/Venenoso', 'Grama/Venenoso', 'Inseto/Grama', 'Inseto/Grama', 'Inseto/Venenoso', 'Inseto/Venenoso', 'Terra',
        'Terra', 'Normal', 'Normal', 'Água', 'Água', 'Lutador', 'Lutador', 'Fogo',
        'Fogo', 'Água', 'Água', 'Água/Lutador', 'Psíquico', 'Psíquico', 'Psíquico', 'Lutador',
        'Lutador', 'Lutador', 'Grama/Venenoso', 'Grama/Venenoso', 'Grama/Venenoso', 'Água/Venenoso', 'Água/Venenoso',
        'Pedra/Terra', 'Pedra/Terra', 'Pedra/Terra', 'Fogo', 'Fogo', 'Água/Psíquico', 'Água/Psíquico', 'Elétrico',
        'Elétrico', 'Normal/Voador', 'Normal/Voador', 'Água', 'Água/Gelo', 'Venenoso', 'Venenoso',
        'Água', 'Água/Gelo', 'Fantasma/Venenoso', 'Fantasma/Venenoso', 'Fantasma/Venenoso', 'Pedra/Terra', 'Psíquico', 'Psíquico',
        'Água', 'Água', 'Elétrico', 'Elétrico', 'Grama/Psíquico', 'Grama/Psíquico', 'Terra', 'Terra',
        'Lutador', 'Lutador', 'Normal', 'Venenoso', 'Venenoso', 'Pedra/Terra', 'Pedra/Terra', 'Normal',
        'Grama', 'Água', 'Água', 'Água', 'Água/Gelo', 'Normal', 'Água/Voador', 'Água/Gelo', 'Normal',
        'Água', 'Elétrico', 'Fogo', 'Normal', 'Pedra/Água', 'Pedra/Água', 'Pedra/Água', 'Pedra/Voador',
        'Pedra/Voador', 'Normal', 'Gelo/Voador', 'Elétrico/Voador', 'Fogo/Voador', 'Dragão', 'Dragão', 'Dragão/Voador',
        'Psíquico', 'Psíquico'
    ];
    return types[id - 1];
}