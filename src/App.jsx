import { Suspense, lazy, useEffect, useState } from "react";
import Load from "./components/Load";
const Header = lazy(() => import("./components/header"));


function App() {

  const [gettheme, settheme] = useState(() => {
    const theme = localStorage.getItem('theme');
    if (theme == "true") document.body.classList.add("dark");
    return theme == "true";
  });
  const [getcreate, setcreate] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark");
    setLocalStorage('theme', gettheme)
  }, [gettheme])




  const getLocalStorage = (localitem) => localStorage.getItem(localitem);
  const setLocalStorage = (setlocalitem, setlocalitemvlaue) => localStorage.setItem(setlocalitem, setlocalitemvlaue);


  return (
    <>
      <Suspense fallback={<Load />}>
        <Header gettheme settheme={settheme} setcreate={setcreate} />
      </Suspense>
    </>
  )
}

export default App
