import { Nav } from "../Nav/Nav";
import { BNav } from "../Nav/BNav";
import "./Home.css";
import { MainCon } from "./MainCon/MainCon";
import { gsap } from "gsap";

//Loading screen
const Load = () => {
  return (
    <div className="load">
      <span
        class="iconify"
        data-icon="akar-icons:instagram-fill"
        style={{ color: "white" }}
        data-width="50"
      ></span>
    </div>
  );
};
function Home() {
  document.addEventListener("load", () => {
    gsap.to(".load", { opacity: 1 });
  });
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      gsap.to(".load", 1, { opacity: 0, display: "none" });
    },
    false
  );
  return (
    <>
      <Load />
      <Nav />
      <BNav />
      <MainCon />
    </>
  );
}

export { Home };
