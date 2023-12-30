import React, { useState } from "react";
import Register from "../Register";
import Login from "../Login";
export default function Form() {
  const [have, setHave] = useState(false);
  return (
    <>
      {have ? (
        <>
          <Login setHave={setHave}/>
        </>
      ) : (
        <>
          <Register setHave={setHave}/>
        </>
      )}
    </>
  );
}
