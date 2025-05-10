import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Item from "./Item";
import Typed from "typed.js";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("storedData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(data));
  }, [data]);


  const del = (v) => {
    const x = data.filter((val, ind) => ind !== v);
    setData(x);
  };

  const addName = () => {
    if (name.trim() !== "") {
      setData([...data, name]);
      setName("");
    }
  };

  const clearInput = () => {
    setName("");
  };

  const update = (item, index) => {
    const newData = [...data];
    newData[index] = item;
    setData(newData);
  };

  const setcheked = () => {
    setData([]);
    localStorage.clear();
  };

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Don’t watch the clock 🕓 do what it does. Keep going.",
        " ✍️ You may delay, but time will not.",
        "⭐ Time is a created thing. To say ‘I don’t have time’ is to say ‘I don’t want to.",
        "🏃🏻 The way to get started is to quit talking and begin doing.",
        "📚 Success usually comes to those who are too busy to be looking for it.",
        "✨ Lost time is never found again.",
        "💥 Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
        "🫵 The future depends on what you do today 🔮.",
      ],
      typeSpeed: 50,
    } );
    

    return () => {
      typed.destroy();
    };
  }, []);

  const handleKeyDown = (e) => {
    if(e.key === "Enter")
        {
          console.log("key pressed")

    }} //for future update, to add task after clickling enter button.


  return (
    <>
      <div className="all">
        <header className="heading">
          <span  id="hd">#___Just Do It!</span>
        </header>

        <h1>My-Todo-List</h1>

        <hr />
        <div className="App">
          <span ref={el} />
        </div>
        <div className="main">
          <div className="list">
            <div className="moto">"Stay Organized, One Task at a Time"</div>

            <div className="task">
              <li>Add Task</li>
            </div>

            <div className="input">
              <input
                type="text" onKeyDown={handleKeyDown}
                placeholder="✍️Enter Your To-Do"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                style={{
                  width: 300,
                  height: 25,
                  borderRadius: 5,
                  fontSize: 15,
                  fontWeight: 700,
                  border: "none",
                }}
              ></input>
              <button id="x" onClick={clearInput}>
                X
              </button>
              <button id="add" onClick={addName}>
                Add
              </button>
              <div className="checkbox">
                <input type="checkbox" onChange={setcheked}></input>Completed
              </div>
              <hr />
              <div className="todo-list">
                {data.map((val, index) => {
                  return (
                    <Item
                      update={update}
                      val={val}
                      index={index}
                      del={del}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
