// UserOptionsForm.js

import { useState } from "react";

function UserOptionsForm(props) {
  const [peopleValue, setPeopleValue] = useState("");

  const peopleHandleChange = function (event) {
    setPeopleValue(event.target.value);
  };

  return (
    <div className="formSection">
      <form
        action=""
        onSubmit={(event) => {
          props.userSubmit(event, peopleValue);
        }}
        onChange={peopleHandleChange}
        value={peopleValue}
      >
        <select name="amountOfPeople" id="amountOfPeople">
          <option value="">Random</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>

        <button>Free me from the clutches of existential dread!</button>
      </form>
      {console.log(`Hell, you must be REALLY bored if you're looking in here`)}
    </div>
  );
}

export default UserOptionsForm;
