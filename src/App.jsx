import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration >= 1;

  function handleChange(nameIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [nameIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input onValueChange={handleChange} userInput={userInput} />
      {isValid ? <Results input={userInput} /> :
      <p className="center">Please enter duration greater than 0.</p>}
    </>
  );
}

export default App;
