interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface Film{
  id: number,
  title: String,
  director: String,
  duration: number,
  budget?: number,
  description?: String,
  imageUrl?: String,
}

type NewFilm = Omit<Film, "id">;

export type { Pizza, NewFilm, PizzaToUpdate, Film};
