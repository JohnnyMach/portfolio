import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/notFound"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
    <ToastContainer toastStyle={{
              backgroundColor: 'var(--background)',
              color: 'var(--foreground)',
            }} />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>   
    </>
  )
}

export default App
