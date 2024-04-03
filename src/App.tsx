import "./App.css";
import { MetaTag } from "./MetaTag";

function App() {
  return (
    <div className="App">
      <MetaTag
        title="GLAM"
        description="복잡하고 어려운 사랑을 누구나 쉽고 재미있게 할 수 있다면요? 외로움은 욕망을 충족시킬 수 없어요 사랑만이 사람들의 욕망을 충족시키고 삶을 지속하는 원동력이 될거예요"
        url="https://seoglam.netlify.app/"
        img="https://i.ytimg.com/vi/fF4UF6VaBSc/maxresdefault.jpg"
      />
      <h1>This is the home page 🏡 </h1>
    </div>
  );
}

export default App;
