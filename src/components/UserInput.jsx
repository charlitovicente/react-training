import Input from "./Input.jsx";
const UserInput = ({ dataValue, onChangeFunc }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          title="Investment Amount"
          onChangeFunc={(event) =>
            onChangeFunc("initialInvestment", event.target.value)
          }
          dataValue={dataValue.initialInvestment}
        />
        <Input
          title="Annual Investment"
          onChangeFunc={(event) =>
            onChangeFunc("annualInvestment", event.target.value)
          }
          dataValue={dataValue.annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          title="Expected Return"
          onChangeFunc={(event) =>
            onChangeFunc("expectedReturn", event.target.value)
          }
          dataValue={dataValue.expectedReturn}
        />
        <Input
          title="Duration"
          onChangeFunc={(event) => onChangeFunc("duration", event.target.value)}
          dataValue={dataValue.duration}
        />
      </div>
    </section>
  );
};

export default UserInput;
