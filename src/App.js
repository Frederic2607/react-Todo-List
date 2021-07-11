import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

library.add(faListAlt);

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />

      <Form
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
      />
      <div>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
