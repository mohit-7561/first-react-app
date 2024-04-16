import { FirstName, LastName } from "../App";

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(first) => {
          return (
            <LastName.Consumer>
              {(second) => {
                return (
                  <h1>
                    My name is {first} {second}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
