import fixture from '../../__tests__/pokedex.fixture.js';
import pokemonsList from './pokemonsList.json';
import {actualizarTextoIndicePokemones, mostrarListadoPokemones} from '../listado.js'

beforeEach(()=>{
    document.body.innerHTML= fixture;
})

test('Tests update index text', ()=>{
    actualizarTextoIndicePokemones('test');
    expect(document.querySelector('#indice').textContent).toEqual('test')
})

test('Showing pokemons list', ()=>{
    let pokemonNames = pokemonsList.nombresPokemones;
    let callbackTest = jest.fn()
    mostrarListadoPokemones(pokemonNames,callbackTest);

    let pokemons = document.querySelectorAll('a.list-group-item.list-group-item-action');

    expect(pokemons).toHaveLength(20)

    pokemons[5].click();

    expect(callbackTest).toHaveBeenCalledTimes(1);
})