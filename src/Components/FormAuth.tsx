import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function FormAuth(){
    const history = useNavigate();
    const [authData,SetAuth ] = useState({
        name:''
    })
    useEffect(()=>{
        const storedData = localStorage.getItem('authData')
        if(storedData){
            history('/account');
        }
    },[history])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        SetAuth({
            ...authData,
            [name]: value,
        });
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        localStorage.setItem('authData',JSON.stringify(authData))
        SetAuth({
            name:''
        })
        history('/account');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={handleChange} />
            <button type='submit'>Отправить</button>
        </form>
    )
}
export default FormAuth