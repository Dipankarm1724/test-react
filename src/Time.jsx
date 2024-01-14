import React, { useState } from "react";

function Time() {
  const [time1, setTime1] = useState(0);
  function handleClickIn() {
    if (time1 >= 0) {
      setTime1(time1 + 1);
    }
  }
  function handleClickDe() {
    if (time1 >= 1) {
      setTime1(time1 - 1);
    }
  }
  return (
    <div>
      <h1>Dipankar Mandal</h1>
      {time1}
      <br />
      <button onClick={handleClickIn}>Increase</button>
      <button onClick={handleClickDe}>Decrease</button>
    </div>
  );
}

export default Time;
