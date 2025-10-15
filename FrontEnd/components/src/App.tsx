const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema
        name={cinema1Name}
        movie1Title={cinema1Movie1Title}
        director1={cinema1Movie1Director}
        movie2Title={cinema1Movie2Title}
        director2={cinema1Movie2Director}
      />

      <Cinema
        name={cinema2Name}
        movie1Title={cinema2Movie1Title}
        director1={cinema2Movie1Director}
        movie2Title={cinema2Movie2Title}
        director2={cinema2Movie2Director}
      />
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
  movie1Title: String;
  director1: String;
  movie2Title: String;
  director2: String;
}) => {
  return (
    <header>
      <h2>{cinema.name}:</h2>
      <h3>
        {cinema.movie1Title}
        <br />
        de {cinema.director1}
      </h3>
      <h3>
        {cinema.movie2Title}
        <br />
        de {cinema.director2}
      </h3>
      <br />
    </header>
  );
};

export default App;
