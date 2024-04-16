// by using useContext

import { useContext } from "react";
import { FirstName, LastName } from "../App";

const ComB = () => {
  const First = useContext(FirstName);
  const Last = useContext(LastName);
  return (
    <h1>
      My name is {First} {Last}
    </h1>
  );
};

export default ComB;
