import './App.css'
import { name1, age1, name2, age2, name3, age3 } from '../Peoples/Peoples';

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h2>{name1}</h2>
        <p>Age: {age1}</p>
      </div>
      <div>
        <h2>{name2}</h2>
        <p>Age: {age2}</p>
      </div>
      <div>
        <h2>{name3}</h2>
        <p>Age: {age3}</p>
      </div>
      <footer>{footerText}</footer>
    </div>
  );
};

export default App;
