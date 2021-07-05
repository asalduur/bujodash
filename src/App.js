import routes from './routes'
import { ToastContainer } from 'react-toastify'
import './style/main.scss'

const App  = () => {
  return (
    <div className="App">
      {routes}

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
