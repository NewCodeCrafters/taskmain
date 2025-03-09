import flash from "./assets/flash.svg";
import eye from "./assets/eye.svg";
import Input from "./components/Input";
function App() {
  return (
    <div>
      <Input
        placeholder="Placeholder"
        lefticon={
          <div>
            <img src={flash} />
          </div>
        }
        rightIcon={
          <div>
            <img src={eye} />
          </div>
        }
        label={"Label"}
        hint={"This is a hint"}
      />
    </div>
  );
}

export default App;
