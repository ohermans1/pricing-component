import "./App.scss";
import { useEffect } from "react";
import Header from "./components/UI/Header";
import Card from "./components/UI/Card";
import Slider from "./components/counter/Slider";
import Info from "./components/UI/Info";

function App() {
  //Setting Page Title
  useEffect(() => {
    document.title = "Ollie Hermans | Pricing Component";
  });

  return (
    <main className="main">
      <Header />
      <Card>
        <Slider />
        <Info />
      </Card>
    </main>
  );
}

export default App;
