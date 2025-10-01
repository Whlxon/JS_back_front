import { Router } from "express";
import { Film } from "../types";
import { isNewFilm } from "../utils/type-guards";

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
        "Server Request Counter : ",
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

  if(id > films.length || id < 0){
    return res.status(400).send('The id is out of range ! \ntry again :/');
  }

  return res.status(200).json(films[id-1]);

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
    return res.status(400).send("Your body isn't a film, Try again :/");
  }

  for(let i = 0; i < films.length; i++){
    if(films[i].title == newFilm.title &&
      films[i].description == newFilm.description){
      return res.status(409).send("The film is already in the DataBase :/");
    }
  }

  films.push(newFilm);

  return res.status(204);
})

filmRouter.delete('/:id', (req, res) => {
  const id= Number(req.params.id);

  if(id > films.length || id < 0){
    return res.status(400).send('The id is out of range ! \nTry again :/');
  }

  const index = films.findIndex((film) => film.id === id);
  if(index === -1){
    return res.status(404).send('Wrong id, try again :/');
  }

  const deletedElement = films.splice(index, 1);
  return res.status(200).json(deletedElement[0]);
  
  
});

filmRouter.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body && 
      (typeof body.title !== "string")) ||
    (("director" in body) && 
      (typeof body.director !== "string")) ||
    (("duration" in body) &&
      (typeof body.duration !== "number"))
  ) {
    return res.sendStatus(400);
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

  return res.json(film);

})

filmRouter.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  const body: unknown = req.body;

  if(!isNewFilm(body)){
    res.status(400).send("Your body isn't correct !\nTry again :/");
  }

  

})

export { filmRouter }