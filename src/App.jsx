import { useEffect, useState } from "react";
import Header from "./components/header";



function App() {

  const [gettheme, settheme] = useState(false);
  const [getcreate, setcreate] = useState(false);

  useEffect(() => { document.body.classList.toggle("dark"); }

    , [gettheme])

  return (
    <>
      <Header gettheme settheme={settheme} setcreate={setcreate} />
    </>
  )
}

export default App
