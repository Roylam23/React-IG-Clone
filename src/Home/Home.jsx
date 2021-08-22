import { Nav } from "../Nav/Nav";
import "./Home.css";
import { MainCon } from "./MainCon/MainCon";

function Home() {
  return (
    <div className="home-con">
      <Nav />
      <MainCon />
    </div>
  );
}

export { Home };
