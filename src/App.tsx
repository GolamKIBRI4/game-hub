import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div>
      {isLoading && (
        <Button loading loadingText="loading">
          Click me
        </Button>
      )}
      <Button onClick={toggle}>Click Me!</Button>
    </div>
  );
}

export default App;
