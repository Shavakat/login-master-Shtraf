import './MainUser.css'

function App() {

  return (
    <>
      <div className="header">

        <img className='logo' src="./src/assets/logo.png" alt="logo" /><div className="title">
          Штрафам - Да!
        </div>
      </div>
      <div className="btn_nav">
        <button className='btn_main txt' type='sumbit'>
          Заяви
        </button>
        <button className='btn_main txt' type='sumbit'>
          Кабинет
        </button>
      </div>
      <div className="form_">
        <input type="date" />
        <input type="location" />
        <input type="text" />
        <input type="image" />
        <form action="#">
          <button className='btn_main txt' type='sumbit'>
            Заявить
          </button>
        </form>
      </div>

    </>
  )
}

export default App
