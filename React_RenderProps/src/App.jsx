import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <>
      <Counter
        render={(count, increment) => {
          return <ClickCounter count={count} incrementCount={increment} />;
        }}
      />

      <Counter
        render={(count, increment) => {
          return <HoverCounter count={count} incrementCount={increment} />;
        }}
      />
    </>
  );
}

export default App;
