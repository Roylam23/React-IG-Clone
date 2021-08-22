import icon from "../../img/54209307_376978876477713_2662263082180411392_n.jpg";
import { Post } from "./Post/Post";
function MainCon() {
  return (
    <div className="home-main-con">
      <div className="left-con">
        <div className="story">
          <ul className="story-in">
            <li className="icon-empty"></li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
            <li>
              <div className="icon-con">
                <img src={icon} alt="" />
              </div>
              rl_930
            </li>
          </ul>
        </div>
        <Post />
        <Post />
        <Post />
      </div>
      <div className="right-con">
        <div className="right-con-in">
          <div className="right-profile-con">
            <img src={icon} alt="" />
            <div className="right-profile-title">
              <span id="main-t">rl_930</span>
              <span>RL930</span>
            </div>
            <div className="btn-sub">切換</div>
          </div>
          <div className="col-rec">
            <div>建議用戶</div>
            <div id="all">查看全部</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MainCon };
