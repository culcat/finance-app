import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function RemindersDisplay() {
    const [formList, setFormList] = useState<any[]>([]);
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
    
    function formatDate(dateString: string): string {
       
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = date.toLocaleDateString('ru-RU', options);
        return `${dateStr}`;
      }
      

    return (
        <div>
            <Link to='add'><button>Добавить</button></Link>
            {formList.map((spendData, index) => (
                <div key={index}>
                    <p>На что: {spendData.spends}</p>
                    <p>Сколько стоит: {spendData.minusmoney}руб.</p>
                    <p>Когда: {formatDate(spendData.date)}</p>
                </div>
            ))}
        </div>
    );
}

export default RemindersDisplay;
