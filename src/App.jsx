import { Suspense, lazy, useEffect, useState } from "react";
import Load from "./components/Load";
const Header = lazy(() => import("./components/header"));


function App() {

  const [gettheme, settheme] = useState(false);
  const [getcreate, setcreate] = useState(false);

  useEffect(() => { document.body.classList.toggle("dark"); }, [gettheme])

  return (
    <>
      <Suspense fallback={<Load />}>
        <Header gettheme settheme={settheme} setcreate={setcreate} />
      </Suspense>
    </>
  )
}

export default App
