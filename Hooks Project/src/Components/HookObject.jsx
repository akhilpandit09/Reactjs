import React, { useState } from "react";

function HookObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <label htmlFor="firstname">FirstName:</label>
        <input
          type="text"
          name=""
          id=""
          value={name.firstName}
          onChange={e => { setName({ ...name, firstName: e.target.value })}}
          />

          <label htmlFor="lastName">LastName:</label>
        <input
          type="text"
          name=""
          id=""
          value={name.lastName}
          onChange={e => { setName({ ...name, lastName: e.target.value })}}
        />
      </form>
      {name.firstName}
      {name.lastName}
    </div>
  );
}

export default HookObject;
