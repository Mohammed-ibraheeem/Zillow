import Bar from "./components/Bar";
import Finallycollection from "./components/Finallycollection";
import Firstcollection from "./components/Firstcollection";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Secendcollection from "./components/Secendcollection";
import "./App.css"
import End from "./components/End";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Firstcollection />
      <Secendcollection />
      <div className="b11">
        <Bar />
        <hr />
        <Finallycollection />
        <hr />
      </div>
      <End />
    </>
  );
}

export default App;
