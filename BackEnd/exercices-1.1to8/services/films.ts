import { Film } from "../types";
import { parse, serialize } from "../utils/json";
import { isNewFilm } from "../utils/type-guards";
const path: string = "./data/films.json";

/*
We create a list of film to have base to work on
*/

let films: Film[] = [
   { "id": 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148 
  },
  { id: 2,
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132 
  },
  { id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175
  },
  { id: 4,
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duration: 125
  },
  { id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169
  },
  { id: 6,
    title: "Whiplash",
    director: "Damien Chazelle",
    duration: 106
  },
  { id: 7,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    duration: 154
  },
  { id: 8,
    title: "Your Name",
    director: "Makoto Shinkai",
    duration: 112
    }
  ];

function readAllFilm(filter: any): Film[] | undefined {
    films = parse(path, films);

    if(filter != undefined){
        const filteredFilms = films.filter((film) => {
    
            if (typeof filter != "string"){
                return undefined;
            }
    
            const filterInt = parseInt(filter);
    
            return film.duration >= filterInt
        })
        
        serialize(path, films);
        return filteredFilms;
    }
    
    serialize(path, films)
    return films;
}

function readFilmById(id: number): Film | undefined{
    films = parse(path, films);

    if(id > films.length || id < 0){
        return undefined;
    }

    serialize(path, films);
    return films[id-1];
}

function createFilm(newFilm: Film): boolean {
    films = parse(path, films);

    for(let i = 0; i < films.length; i++){
        if((films[i].title == newFilm.title) &&
            (films[i].description == newFilm.description)){
            return false;
        }
    }

  films.push(newFilm);

  serialize(path, films);
  return true;
  
}

function deleteFilm(id: number): Film[] | undefined{
    films = parse(path, films);

    if(id > films.length || id < 0){
        return undefined;
    }

    const index = films.findIndex((film) => film.id === id);

    if(index === -1){
        return undefined;
    }

    const deletedElement = films.splice(index, 1);

    serialize(path, films);
    return deletedElement;
}

function updateFilm(id: number, body: Object): Film | undefined {
    films = parse(path, films);

    const film = films.find((film) => film.id === id);

    if (!film) {
        return undefined;
    }

    const { title, director, duration, budget, description, imageUrl }: Partial<Film> = body;
  
    if(title){
      film.title = title;
    }
    if(director){
      film.director = director;
    }
    if(duration){
      film.duration = duration;
    }
    if(budget) {
      film.budget = budget;
    }
    if(description){
      film.description = description;
    }
    if(imageUrl){
      film.imageUrl = imageUrl;
    }
    
    serialize(path, films);
    return film;
}

function updateCreatefilm(id:number, body: Object): Film | undefined{
    const film = films.find((film) => film.id === id); /* If the id is correct and the object exist we take it and we save it in the variable */

    if(isNewFilm(body)){
        if(!film){
            films.push(body);

            serialize(path, films);
            return undefined;
        }

        const filmf = updateFilm(id, body);

        serialize(path, films);

        return filmf;
    }

    return undefined;
}

export { readAllFilm, readFilmById, createFilm, deleteFilm, updateFilm, updateCreatefilm};