export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResoursce = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };

    getAllCharacters = async() => {
        const res = await this.getResoursce(`/characters?page=5&pageSize=10`);
        return (
            res.map(this._transformCharacter)
        )
    }
    
    getCharacter = async(id) => {
        const character = await this.getResoursce(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks = async() => {
        const res = await this.getResoursce(`/books/`);
        return res.map(this._transformBook)
    }

    getBook = async(id) => {
        const book = await this.getResoursce(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllHouses = async() => {
        const res = await this.getResoursce(`/houses/`);
        return res.map(this._transformHouse)
    }

    getHouse = async(id) => {
        const house = await this.getResoursce(`/houses/${id}`);
        return this._transformBook(house);
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1]; 
    }

    //функция для вынесения сбора параметров персонажей
    _transformCharacter(char) {
        return{
            id: char.url.slice(char.url.length - 3, char.url.length),
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        }
    }

    _transformHouse(house) {
        return {
            id: house.url.slice(house.url.length - 2, house.url.length),
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            id: book.url.slice(book.url.length - 2, book.url.length),
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}

