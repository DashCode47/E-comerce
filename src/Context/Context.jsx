import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Context = (props) => {
  const [points, setpoints] = useState(6600);

  return (
    <MyContext.Provider value={{ points, setpoints }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
