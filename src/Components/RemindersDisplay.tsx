import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RemindersDisplay() {
 const [formList, setFormList] = useState<any[]>([]);
 const [dateToDay, setDateToDay] = useState<Date>(new Date());

 const history = useNavigate()
 useEffect(() => {
 const savedData = localStorage.getItem("reminderList");
 if (savedData) {
 setFormList(JSON.parse(savedData));
 
 }
 else{
 history('/account/balance/reminder/add');
 }
 }, []);

 useEffect(() => {
 const savedDate = localStorage.getItem("date");
 if (savedDate) {
 setDateToDay(new Date(savedDate));
 }
 }, []);

 function formatDate(dateString: string): string {
 
 const date = new Date(dateString);
 const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
 const dateStr = date.toLocaleDateString('ru-RU', options);
 return `${dateStr}`;
 }
 

 return (
 <>
 <Link to='add'><button>Добавить</button></Link>
 <h3>Актуальные уведомления:</h3>
 {formList.map((spendData, index) => (
 (( new Date(spendData.date).getTime() - new Date(dateToDay).getTime() ) / (1000 * 60 * 60 * 24) >= 0 ? <div key={index}>
 <p>На что: {spendData.spends}</p>
 <p>Сколько стоит: {spendData.minusmoney}руб.</p>
 <p>Когда: {formatDate(spendData.date)}</p>
 </div>:null)))}
 <h3>Просроченные уведомления:</h3>
 {formList.map((spendData, index) => (
 ((new Date(spendData.date).getTime() - new Date(dateToDay).getTime()) / (1000 * 60 * 60 * 24) < 0 ? <div key={index}>
 <p>На что: {spendData.spends}</p>
 <p>Сколько стоит: {spendData.minusmoney}руб.</p>
 <p>Когда: {formatDate(spendData.date)}</p>
 </div>:null)))}
 </>
 );
}

export default RemindersDisplay;
