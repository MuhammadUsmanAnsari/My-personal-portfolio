import 'App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from 'pages/frontend/Home/Index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </div>
  );
}

export default App;
