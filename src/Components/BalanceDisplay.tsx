import Balance from "./Balance";
import FormAuthDisplay from "./FormAuthDisplay";
import Change from "./Change";
import {Link} from "react-router-dom";
import SpendsDisplay from "./SpendsDisplay";

function BalanceDisplay(){
    const formDataString = localStorage.getItem('balanceData')
    const formData = formDataString ? JSON.parse(formDataString) : {}


    return(
        <>
            <FormAuthDisplay/>
            <p>На вашем счету:{formData.money} руб.</p>
            <Link to='edit'><button>Изменить</button></Link>
            <Link to='add'><button>Добавить трату</button></Link>
            <Link to='reminder'><button>Напоминания</button></Link>
            <SpendsDisplay/>

        </>
    )
}
export default BalanceDisplay