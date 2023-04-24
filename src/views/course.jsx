function Courses(){
    return(
        <><div classname='block'style={{backgroundColor:"#8c64d8",color:"#ffffff"}} ><div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-body-secondary">Toggleable via the navbar brand.</span>
            </div>
        </div>
            <nav class="navbar"> 
                <div class="container-fluid">
                    <button class="navbar-toggler" style={{backgroundColor:"#ffffff"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="mx-auto">
                Мой профиль
                    </div>
                </div>
            </nav>
        </div>
        <div class="card" style={{}}>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Имя:</li>
                <li class="list-group-item">Фамилия:</li>
                <li class="list-group-item">Почта:</li>
                <li class="list-group-item">Номер телефона:</li>
            </ul>
        </div></>
        )
  }
  export default Courses