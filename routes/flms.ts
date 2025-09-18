import { Router } from "express";
import { Film } from "../types";

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

const router = Router();

router.get("/", (_req, res) => {
    return res.json(films);
});