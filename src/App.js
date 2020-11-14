import { useState } from "react";

function App() {
  const [state, setState] = useState('teste')
  return (
    <div>
        { state }
    </div>
  );
}

export default App;
