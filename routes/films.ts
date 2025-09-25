import { Router } from "express";
import { Film } from "../types";

let counter = 0;

const films: Film[] = [
  { id: 1,
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
}];

const filmRouter = Router();

filmRouter.use((_req, _res, next) => {
    counter++;
    console.log(
        "GET counter : ",
        counter
    );
    next();
});

filmRouter.get("/", (req, res) => {
    console.log("GET film/")

    if(req.query["minimum-duration"] != undefined){
      const filteredFilms = films.filter((film) => {
        const filter = req.query["minimum-duration"]

        if (typeof filter != "string"){
          return res.send("Your query must be a string !").status(400);
        }

        const filterInt = parseInt(filter);

        return film.duration >= filterInt

      })
      return res.json(filteredFilms).status(200);
    }

    return res.status(200).json(films);

    
});



filmRouter.get("/:id", (req, res) => {

  console.log('GET /film/:id')

  const id: number = parseInt(req.params.id);

  try{
    console.log(id);
    return res.status(200).json(films[id]);
  }catch(e){
    console.log(e)
    return res.status(400);
  }

});

filmRouter.post("/", (req, res) => {
  console.log("POST /film")

  let newFilm: Film = req.body;
  newFilm.id = films.length;

  if(newFilm.id === undefined &&
    newFilm.title === undefined &&
    newFilm.duration === undefined &&
    newFilm.director === undefined
  ){
    return res.status(400).send("Your body isn't a film, try again :/");
  }

  for(let i = 0; i < films.length; i++){
    if(films[i].title == newFilm.title){
      return res.status(401).send("The film is already in the dataBase :/");
    }
  }

  films.push(newFilm);

  return res.status(204);


})

export { filmRouter }