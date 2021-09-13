import mostrarPaginador from '../paginador.js'
import fixture from '../../__tests__/pokedex.fixture.js'

beforeEach(()=>{
    document.body.innerHTML=fixture;
})

test('Calls main fuction without urlAnterior', ()=>{
    mostrarPaginador(898,5,'https://asd.com/');
    let pager = document.querySelector('#paginador');
    let buttonAnterior = pager.querySelector('li');
    expect(buttonAnterior.textContent).toEqual('Anterior');
    expect(buttonAnterior.classList).toContain('disabled');   
})

test('Calls main function without urlSiguiente', ()=>{
    mostrarPaginador(898,5,"",'https://asd.com/');
    let pager = document.querySelector('#paginador');
    let buttons = pager.querySelectorAll('li');
    let buttonSiguiente = buttons[buttons.length-1];
    expect(buttonSiguiente.textContent).toEqual('Siguiente');
    expect(buttonSiguiente.classList).toContain('disabled');   
})

test('Calls main function', ()=>{
    mostrarPaginador(898,5,'https://asd.com/','https://asd.com/');
    let pager = document.querySelector('#paginador');
    let buttons = pager.querySelectorAll('li');
    
    let pagesQuantity = Math.ceil(898/20) + 2;
    expect(buttons.length).toEqual(pagesQuantity);
    
    let currentPage = buttons[5];
    expect(currentPage.textContent).toEqual('5');
    expect(currentPage.classList).toContain('active');

    expect(document.querySelectorAll('li.active')).toHaveLength(1);

    expect(currentPage.querySelector('a').dataset.pagina).toEqual('5');

    let buttonAnterior = buttons[0];
    expect(buttonAnterior.classList).not.toContain('disabled');
    expect(buttonAnterior.querySelector('a').href).toEqual('https://asd.com/');

    let buttonSiguiente = buttons[buttons.length-1];
    expect(buttonSiguiente.classList).not.toContain('disabled');
    expect(buttonSiguiente.querySelector('a').href).toEqual('https://asd.com/');

    buttonSiguiente.click();

    expect(document.querySelectorAll('li.active')).toHaveLength(1);
    expect(document.querySelectorAll('li.active')[0].textContent).toEqual('5');
})

test('Test main function with Callback function', ()=>{
    
    let callbackTest = function (text){
        document.querySelector('#ayuda').textContent=text;
    }

    mostrarPaginador(898,5,'https://asd.com/siguiente','https://asd.com/anterior', callbackTest);

    let buttonAnteriorAnchor = document.querySelectorAll('#paginador li a')[0];
    buttonAnteriorAnchor.click();

    let ayuda = document.querySelector('#ayuda');
    expect(ayuda.textContent).toEqual('https://asd.com/anterior');

    let buttonNumberPageAnchor= document.querySelectorAll('#paginador li a')[5];
    buttonNumberPageAnchor.click();
    expect(ayuda.textContent).toEqual('5');
})