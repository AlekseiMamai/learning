// const getResoursce = async (url) => {
//     const res = await fetch(url);

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }

//     const some = await res.json();

//     return some;
// };

// getResoursce('https://jsonplaceholder.typicode.com/posts')
// .then((res) => console.log('Success', res))
// .catch(console.error(error));

class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResoursce(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };

    getAllCharacters() {
        return this.getResoursce('/characters?page=5&pageSize=10')
    }
    
    getCharacter(id) {
        return this.getResoursce(`/characters/${id}`)
    }
}

const got = new GotService();

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name));     
    });

got.getCharacter(130)
    .then(res => console.log(res));