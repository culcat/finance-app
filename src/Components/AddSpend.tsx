import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormAuthDisplay from "./FormAuthDisplay";

interface SpendData {
  spends: string;
  minusmoney: number;
  date: string;
}

function AddSpend() {
  const [balance, setBalance] =useState({
    money: 0,
  });
  const history = useNavigate();
  const [spendData, setSpend] = useState<SpendData>({
    spends: "",
    minusmoney: 0,
    date: "",
  });

  const [formList, setFormList] = useState<SpendData[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("formList");
    if (savedData) {
      setFormList(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpend((prevData) => ({
      ...prevData,
      [name]: name === "minusmoney" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFormList = [...formList, spendData];
    const formDataString = localStorage.getItem('balanceData')
    const formData = formDataString ? JSON.parse(formDataString) : {}
    setFormList(newFormList);
    localStorage.setItem("formList", JSON.stringify(newFormList));
    setSpend({ spends: "", minusmoney: 0, date: "" });
    setBalance({money:Number(formData.money) - Number(spendData.minusmoney)});
    localStorage.setItem("balanceData", JSON.stringify({money:Number(formData.money) - Number(spendData.minusmoney)}));
    history("/account/balance");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
         name="spends"
         placeholder="Название"
         value={spendData.spends} 
         onChange={handleChange}
          />
        <input
          name="minusmoney"
          placeholder="Цена"
          type="number"
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          value={spendData.date}
          onChange={handleChange}
        />
        <button type="submit">Сохранить</button>
      </form>
    </>
  );
}

export default AddSpend;
