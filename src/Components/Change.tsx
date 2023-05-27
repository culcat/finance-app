import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import FormAuthDisplay from "./FormAuthDisplay";

function Change(){
    const history = useNavigate();
    const [balanceData,SetBalance ] = useState({
        money:''
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetBalance({
            ...balanceData,
            [name]: value,
        });
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        localStorage.setItem('balanceData',JSON.stringify(balanceData))
        SetBalance({
            money:''
        })
        history('/account/balance');
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <p>Введите ваш текущий счет:</p>
                <input name='money' onChange={handleChange}/>
                <button type='submit'>Сохранить</button>
            </form>
        </>
    )
}

export default Change