import mostrarPokemon from '../pokemon.js';
import fixture from '../../__tests__/pokedex.fixture.js';
import pokemon from './bulbasaur.json';

test('Prueba mostrar un pokemon', ()=>{
    document.body.innerHTML= fixture;
    mostrarPokemon(pokemon);

    expect(document.querySelector('#pokemon-nombre').textContent)
        .toEqual('bulbasaur');

    expect(document.querySelector('#pokemon-id').textContent)
        .toEqual('1');

    expect(document.querySelector('#pokemon-imagen').getAttribute('src'))
        .toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
    
    expect(document.querySelector('#pokemon-imagen').getAttribute('alt'))
        .toEqual('Imagen frontal del pokemon bulbasaur');  

    let typeSpans = document.querySelectorAll('#tipos span'); //Selecciona los spans y comprueba que esten dentro de '#tipos' al mismo tiempo
    
    expect(typeSpans)
        .toHaveLength(2)
    
    expect(typeSpans[0].textContent)
        .toEqual('grass')
    
    expect(typeSpans[0].classList)
        .toContain('grass') 

    expect(typeSpans[1].textContent)
        .toEqual('poison')
    
    expect(typeSpans[1].classList)
        .toContain('poison') 
    
    let habilitySpans=document.querySelectorAll('#habilidades span'); //Selecciona los spans y comprueba que esten dentro de '#habilidades' al mismo tiempo

    expect(habilitySpans)
        .toHaveLength(2)

    expect(habilitySpans[0].textContent)
        .toEqual('overgrow')

    expect(habilitySpans[1].textContent)
        .toEqual('chlorophyll')

    let movementsRows = document.querySelectorAll('#movimientos tr');
    
    expect(movementsRows)
        .toHaveLength(78)

    expect(movementsRows[0].querySelectorAll('th'))
        .toHaveLength(1)
    
    expect(movementsRows[0].querySelector('th').textContent)   
        .toEqual('razor-wind')

    expect(movementsRows[0].querySelectorAll('td'))
        .toHaveLength(1)

    let firstVersions = movementsRows[0].querySelectorAll('td span');
    expect(firstVersions)
        .toHaveLength(2)
    
    expect(firstVersions[0].textContent)
        .toEqual('gold-silver')

    expect(firstVersions[1].textContent)
        .toEqual('crystal')
    
    expect(movementsRows[movementsRows.length-1].querySelector('th').textContent)   
        .toEqual('confide')

    expect(movementsRows[0].querySelectorAll('td'))
        .toHaveLength(1)

    let lastVersions = movementsRows[movementsRows.length-1].querySelectorAll('td span');
    expect(lastVersions.length)
        .toBeGreaterThan(2)
    
    expect(lastVersions[0].textContent)
        .toEqual('x-y')

    expect(lastVersions[lastVersions.length-1].textContent)
        .toEqual('ultra-sun-ultra-moon')
    
})