import { textAtoms } from "./App.css";

function App() {
  return (
    <>
      <div className={textAtoms({ fontSize: "large" })}>Large text</div>
      <div className={textAtoms({ fontSize: "small" })}>Small text</div>
    </>
  );
}

export default App;
