interface Movie {
  title: string,
  director: string
}

interface PageTitleProps {
  title: string
}

interface CinemaProps {
  title: string
}

const App = () => {

  const pageTitle: PageTitleProps = { title: "Informations sur les films dans les cinémas" };

  const cinema1Name: CinemaProps = { title: "UGC DeBrouckère"};

  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name: CinemaProps = { title: "UGC Toison d'Or"};
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle.title} />

      <Cinema name={cinema1Name.title} movie1={movie1} movie2={movie2} />

      <Cinema name={cinema2Name.title} movie1={movie3} movie2={movie4} />
    </div>
  );
};

const PageTitle = (page: { title: String }) => {
  return (
    <header>
      <h1>{page.title}</h1>
    </header>
  );
};

const Cinema = (cinema: {
  name: String;
  movie1: Movie,
  movie2: Movie
}) => {
  return (
    <header>
      <h2>{cinema.name}:</h2>
      <h3>
        {cinema.movie1.title}
        <br />
        de {cinema.movie1.director}
      </h3>
      <h3>
        {cinema.movie2.title}
        <br />
        de {cinema.movie2.director}
      </h3>
      <br />
    </header>
  );
};

export default App;
