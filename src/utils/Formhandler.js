import React,{ useState } from 'react'
export default function Formhandler() {
    const [inputs,setInputs] = useState();
    const handleForm = (e)=>{
        e.preventDefault();
        setInputs({...inputs,[e.target.name]:e.target.value});
    }
    return ([inputs,handleForm]);
}
