import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { calculateInvestmentResults, formatter } from "./util/investment.js";

function App() {
  const [dataValue, setDataValue] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 300,
    duration: 12,
  });

  function handleDataValue(typeValue, newValue) {
    setDataValue((prevDataValue) => {
      let data = {
        ...prevDataValue,
        [typeValue]: +newValue,
      };
      return data;
    });
  }

  const isValid = dataValue.duration > 0;
  const resultData = isValid && calculateInvestmentResults(dataValue);
  const initialInvestment =
    isValid &&
    resultData[0].valueEndOfYear -
      resultData[0].interest -
      resultData[0].annualInvestment;

  return (
    <>
      <Header />
      <UserInput dataValue={dataValue} onChangeFunc={handleDataValue} />

      {isValid ? (
        <Results
          resultData={resultData.map((data, index) => {
            const totalInterest =
              data.valueEndOfYear -
              data.annualInvestment * data.year -
              initialInvestment;
            const totalAmountInvested = data.valueEndOfYear - totalInterest;

            return (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{data.annualInvestment}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        />
      ) : (
        <p className="center">Please Enter Valid Duration</p>
      )}
    </>
  );
}

export default App;
