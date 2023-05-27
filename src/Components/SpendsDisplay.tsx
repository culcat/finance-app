import { useState,useEffect } from "react";

function SpendsDisplay() {
    const [formList, setFormList] = useState<{spends: string; minusmoney: number; date: string}[]>([]);
   
    useEffect(() => {
    const savedData = localStorage.getItem("formList");
    if (savedData) {
    setFormList(JSON.parse(savedData));
    }
    }, []);
    
    function formatDate(dateString: string): string {
    
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = date.toLocaleDateString('ru-RU', options);
    return `${dateStr}`;
    }
    
   
    return (
    <div>
    {formList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((spendData: {spends: string; minusmoney: number; date: string}, index) => (
    <div key={index}>
    <p>Название: {spendData.spends}</p>
    <p>Цена: {spendData.minusmoney}руб.</p>
    <p>Когда: {formatDate(spendData.date)}</p>
    </div>
    ))}
    </div>
    );
   }
   
   export default SpendsDisplay;
   