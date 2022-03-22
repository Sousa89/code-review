// App.js

import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import YawningGirl from "./Yawn.png";
import UserOptionsForm from "./UserOptionsForm";
import GeneratedContentSection from "./GeneratedContentSection";
import Footer from "./Footer";

function App() {
  const [bafData, setBafData] = useState({});

  const [friends, setFriends] = useState(!true);

  // this recall function lets the user re-submit form, getting new data each time
  const [recall, setRecall] = useState(true);
  useEffect(() => {
    axios({
      url: "https://www.boredapi.com/api/activity",
      params: {
        participants: friends,
      },
    }).then((apiData) => {
      setBafData(apiData.data);
    });
  }, [recall, friends]);

  const selectNumberOfFriends = function (event, chosenFriends) {
    event.preventDefault();
    setRecall(!recall);
    setFriends(chosenFriends);
  };

  return (
    <div className="App">
      <h1>Bored As Fudge</h1>
      <div className="wrapper">
        <header>
          <div className="imgContainer">
            <img src={YawningGirl} alt="girl yawning" />
          </div>
        </header>
        <section className="intro">
          <p>
            Look at you sitting there. You haven't moved in 3 hours, have you?
            Probably distracting yourself with cute cat pictures, or thinking
            about how terrifyingly vast the universe is.
          </p>
          <p>You must be Bored, As, Fudge.</p>

          <p>Let us fix that for you! </p>
        </section>
        <UserOptionsForm userSubmit={selectNumberOfFriends} />
        {/* this ternary operators prevents generated section from displaying before user clicks on submit button (on app start, a random option is rendered) */}
        {friends === false ? null : (
          <GeneratedContentSection generatedData={bafData} />
        )}
        <a href="https://pngtree.com/so/Yawning">
          Yawning png from pngtree.com/
        </a>
        <Footer />
      </div>
    </div>
  );
}

export default App;
