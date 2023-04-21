import { wait } from "@testing-library/user-event/dist/utils"
import { useEffect, useState, useRef, } from "react"


function Login(){
  const first_nameRef=useRef()
  const last_nameRef=useRef()
  const emailRef=useRef()
  const phoneRef=useRef()
  
  const onSubmit= async (ev) =>{
    ev.preventDefault()
    const payload={
      first_name: first_nameRef.current.value,
      last_name: last_nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    }
    debugger
    const response = await fetch("http://192.168.237.14:8000/user/createUser",{
      method:"POST",
      headers:{
        'Content-Type': "application/json",
      },
      body:{
        "data": payload
      }
    })
    debugger
    const res = await response.json()
  }


  return(
    <div className="container text-center">
      <div className="row">
        <img src="https://nethammer.online/images/logo.png" alt="" />
      </div>
      <div className="row">
      <div>
      <label for="exampleFormControlInput1" class="form-label">Чтобы оставить отзыв или обратиться необходимо зарегистрироваться.</label>
      </div>
        <div class="mb-1 mt-3">
          <input ref={first_nameRef} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Имя"/>
        </div>
        <div class="mb-2 mt-3">
      <input ref={last_nameRef} type="text"  class="form-control" id="exampleFormControlInput2" placeholder="Фамилия"/>
          </div>
          <div class="mb-3 mt-3">
      <input ref={emailRef} type="email" class="form-control" id="exampleFormControlInput3" placeholder="email@"/>
        </div>
        <div class="mb-4 mt-1">
      <input ref={phoneRef} type="number" class="form-control" id="exampleFormControlInput4" placeholder="Номер телефона"/>
      </div>
      </div>
      <div class="d-grid gap-2">
        <button type="button" class="btn "onClick={ev => {onSubmit(ev)}} style={{background: '#6f42c1',color:"#ffffff"}} >Отправить</button>

      </div>
    </div>   
  )
}
export default Login