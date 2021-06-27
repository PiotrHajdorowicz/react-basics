import Name from "./Name";
import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("Tytuł nowej strony");
  useEffect(() => {
    alert("Teraz był efekt!");
  }, [title]);
  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => setTitle("Zmieniony tytuł strony")}>
        Zmień tytuł
      </button>
      <Name name="Peter" />
    </div>
  );
}

export default App;
