import ShiftBoardScreen from "./ShiftBoardScreen";
import { data } from "./ShiftBoardScreen/customDataForTesting";
import "./ShiftBoardScreen/style.css";

function App() {
  return (
    <div className="container">
      <ShiftBoardScreen data={data} />
    </div>
  );
}

export default App;
