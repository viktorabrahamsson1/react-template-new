import { useEffect, useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Listener for message event
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "openUI") {
        setVisible(true);
      }
    };

    window.addEventListener("message", handleMessage);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []); // Empty array ensures this effect runs only once when the component mounts

  // Return UI based on the "visible" state
  return (
    <>
      {visible ? (
        <div>
          {/* This is where you render content after the message event */}
          <h1>UI is now visible!</h1>
        </div>
      ) : (
        <div className="w-24 h-24 flex items-center justify-center bg-green-950">
          <h1 className="text-4xl text-white">Tailwind Works?</h1>
        </div>
      )}
    </>
  );
}

export default App;
