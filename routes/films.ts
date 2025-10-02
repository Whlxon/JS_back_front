import { Router } from "express";
import { Film } from "../types";
import { createFilm, deleteFilm, readAllFilm, readFilmById, updateCreatefilm, updateFilm } from "../services/films";



let counter = 0;



/*
We create a middleware which count every request we're doing
*/

const filmRouter = Router();

filmRouter.use((_req, _res, next) => {
    counter++;
    console.log(
        "Server Request Counter : ",
        counter
    );
    next();
});

/*
We create a get path, to take every films we have in the db, and if there is a filter we apply it to the research
*/

filmRouter.get("/", (req, res) => {
    console.log("GET film/")
    let film;

    if(req.query["minimum-duration"]){
      film = readAllFilm(req.query["minimum-duration"])
    }else{
      film  = readAllFilm(undefined);
    }

    if(film == undefined){

    }
    return res.status(200).json(film);

    
});

/*
We create a get path to get every film we have with the specific id
*/

filmRouter.get("/:id", (req, res) => {
  console.log('GET /film/:id')

  const id: number = parseInt(req.params.id);
  const film = readFilmById(id);

  if(!film){
    return res.status(409).send("Anything here, sorry try again :/")
  };

  return res.status(200).json(film);

});

/*
We create a post path, to add a film in the db, if there is the same, we send an error
*/

filmRouter.post("/", (req, res) => {
  console.log("POST /film")

  let newFilm: Film = req.body;
  newFilm.id = readAllFilm.length+1;

  if(newFilm.id === undefined &&
    newFilm.title === undefined &&
    newFilm.duration === undefined &&
    newFilm.director === undefined
  ){
    return res.status(400).send("Your body isn't a film, Try again :/");
  }

  if(!createFilm(newFilm)){
    return res.status(409).send("the film is maybe already in the DB")
  }

  return res.status(204);
})

/*
We create a delete path the delete the fil with the specific id
*/

filmRouter.delete('/:id', (req, res) => {
  const id= Number(req.params.id);

  const deletedElement = deleteFilm(id);

  if(!deletedElement){
    return res.status(400).send("somthing went wrong, try again :/");
  }

  return res.status(200).json(deletedElement[0]);
});

/*
We create a patch path to modify a specific film with the specific id and if he doesn't exist
create one
*/

filmRouter.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
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

  const film = updateFilm(id, body);

  if(!film){
    return res.status(400).send("Something went wrong, try again :/")
  }

  return res.json(film);

});

/*
We create a put path to modify all specifications that we set in the body
*/

filmRouter.put('/:id', (req, res) => {
  let id = Number(req.params.id); /* We Take the id of the objet who we want to modify */
  
  const body: Object = req.body; /* We take the object in the body and we save it in the variable */

  id --;

  const film = updateCreatefilm(id, body);

  if(!film){
    res.status(400).send("Seomthing went wrong, try again :/");
  }

  return res.status(200).json(film);

})

export { filmRouter }