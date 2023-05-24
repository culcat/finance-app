function FormAuthDisplay(){
    const formDataString = localStorage.getItem('authData')
    const formData = formDataString ? JSON.parse(formDataString) : {}
    const helloMsg = ['Добро пожаловать','Здравствуй','С возвращением']
    function random(min:number,max:number):number{
        return Math.floor( Math.random()*(max-min+1))+min
    }
   const rand = random(0,helloMsg.length-1)

    const hello = helloMsg[rand]
    return(
        <>
            <p>{hello}, {formData.name}</p>

        </>
    )
}
export default FormAuthDisplay