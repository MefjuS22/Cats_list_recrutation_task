import "./styles.css";
import { CatsProvider } from "./CatsContext";
import { CatListWithScroll } from "./CatListWithScroll";

export default function App() {
  return (
    <div className="App">
      <h1 id="top">Lista kotów</h1>
      <CatsProvider>
        <CatListWithScroll />
      </CatsProvider>
    </div>
  );
}
