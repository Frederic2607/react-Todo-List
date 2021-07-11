import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import { useState } from "react";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

library.add(faListAlt, faTrashAlt);

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <main className="container">
        <Form
          className="form"
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
        />

        <Tasks className="tasks" tasks={tasks} />
      </main>
    </div>
  );
}

export default App;
