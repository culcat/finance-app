import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormAuthDisplay from "./FormAuthDisplay";

function Balance() {
  const history = useNavigate();
  const [balanceData, SetBalance] = useState({
    money: 0,
  });
  useEffect(() => {
    const storedData = localStorage.getItem("balanceData");
    if (storedData) {
      history("/account/balance");
    }
  }, [history]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    SetBalance({
      ...balanceData,
      [name]: Number(value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("balanceData", JSON.stringify(balanceData));
    SetBalance({
      money: 0,
    });
    history("/account/balance");
  };
  return (
    <>
      <FormAuthDisplay />
      <form onSubmit={handleSubmit}>
        <input name="money" onChange={handleChange} />
        <button type="submit">Сохранить</button>
      </form>
    </>
  );
}

export default Balance;
