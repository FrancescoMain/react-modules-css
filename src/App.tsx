import Button from "./components/Button/Button";
import Like from "./components/Like/Like";

import "./App.css";

function App() {
  return (
    <>
      <Button> My Button</Button>
      <Like onClick={() => console.log("clicked")}></Like>
    </>
  );
}

export default App;
