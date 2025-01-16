import { Outlet } from "react-router-dom"
import MainLayout from "./Components/layout/MainLayout"



function App() {


  return (
    <>
<MainLayout></MainLayout>
<div>
  <Outlet></Outlet>
</div>
    </>
  )
}

export default App
