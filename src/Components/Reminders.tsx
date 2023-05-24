import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormAuthDisplay from "./FormAuthDisplay";

function Reminders() {
 const history = useNavigate();
 const [spendData, setSpend] = useState({
 spends: "",
 minusmoney: "",
 date: ""
 });
 const [formList, setFormList] = useState<any[]>([]);

 useEffect(() => {
 const savedData = localStorage.getItem("reminderList");
 if (savedData) {
 setFormList(JSON.parse(savedData));
 }
 }, []);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 const { name, value } = e.target;
 setSpend((prevData) => ({
 ...prevData,
 [name]: value
 }));
 };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 const newFormList = [...formList, spendData];
 setFormList(newFormList);
 localStorage.setItem("reminderList", JSON.stringify(newFormList));
 setSpend({
 spends: "",
 minusmoney: "",
 date: ""
 });
 history("/account/balance/reminder");
 };

 return (
 <>
 <FormAuthDisplay />
 <form onSubmit={handleSubmit}>
 <input
 name="spends"
 value={spendData.spends}
 onChange={handleChange}
 />
 <input
 name="minusmoney"
 value={spendData.minusmoney}
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

export default Reminders;