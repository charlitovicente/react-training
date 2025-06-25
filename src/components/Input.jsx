const Input = ({ title, onChangeFunc, dataValue }) => {
  return (
    <p>
      <label>{title}</label>
      <input type="number" required value={dataValue} onChange={onChangeFunc} />
    </p>
  );
};

export default Input;
