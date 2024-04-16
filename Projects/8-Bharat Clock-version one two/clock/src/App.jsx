import Heading from "./Components/heading";
import Phrase from "./Components/phrase";
import CurrentTime from "./Components/date and time";

function App() {
  return (
    <center id="clock-container">
      <Heading></Heading>
      <Phrase></Phrase>
      <CurrentTime />
    </center>
  );
}

export default App;
