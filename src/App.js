import styled from "@emotion/styled";
import "./App.css";

function App() {
  const Button = styled.button`
    color: hotpink;
    padding: 10px;
  `;
  return (
    <div className="App">
      <Button>This is a hotpink button.</Button>
    </div>
  );
}

export default App;
