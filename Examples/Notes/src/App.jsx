import { createContext } from "react";
import ComA from "./components/ComA";
import UseState from "./components/useState";
import UseReducer from "./components/useReducer";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      {/* <FirstName.Provider value={"Mohit"}>
        <LastName.Provider value={"Singhania"}>
          <ComA></ComA>
        </LastName.Provider>
      </FirstName.Provider> */}
      {/* <UseState></UseState> */}
      <UseReducer></UseReducer>
    </>
  );
}

export default App;
export { FirstName, LastName };
