function App(){
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
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Имя" aria-describedby="validationServerUsernameFeedback" required/>
        </div>
        <div class="mb-2 mt-3">
      <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Фамилия"/>
          </div>
          <div class="mb-3 mt-3">
      <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="email@"/>
        </div>
        <div class="mb-4 mt-1">
      <input type="number" class="form-control" id="exampleFormControlInput4" placeholder="Номер телефона"/>
      </div>
      </div>
      <div>
        <button type="button" class="btn" style={{background: '#6f42c1',color:"#ffffff"}} >Отправить</button>

      </div>
    </div>   
  )
}
export default App