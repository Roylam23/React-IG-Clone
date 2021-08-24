import icon from "../../img/54209307_376978876477713_2662263082180411392_n.jpg";
import { Post } from "./Post/Post";
import Icon from "./Icon/Icon";
function MainCon() {
  return (
    <div className="home-main-con">
      <div className="left-con">
        <div className="story">
          <ul className="story-in">
            <li className="icon-empty" id="icon-empty"></li>
            <Icon img={require("../../img/img1.jpg").default} name="rl_930" />
            <Icon img={require("../../img/img2.jpg").default} name="kobe_123" />
            <Icon
              img={require("../../img/img3.jpg").default}
              name="winky_721"
            />
            <Icon
              img={
                require("../../img/54209307_376978876477713_2662263082180411392_n.jpg")
                  .default
              }
              name="cha_001"
            />
            <Icon img={require("../../img/img1.jpg").default} name="rl_930" />
            <Icon img={require("../../img/img2.jpg").default} name="kobe_123" />
            <Icon
              img={require("../../img/img3.jpg").default}
              name="winky_721"
            />
            <Icon
              img={
                require("../../img/54209307_376978876477713_2662263082180411392_n.jpg")
                  .default
              }
              name="cha_001"
            />
            <Icon img={require("../../img/img1.jpg").default} name="rl_930" />
            <Icon img={require("../../img/img2.jpg").default} name="kobe_123" />
            <Icon
              img={require("../../img/img3.jpg").default}
              name="winky_721"
            />
            <Icon
              img={
                require("../../img/54209307_376978876477713_2662263082180411392_n.jpg")
                  .default
              }
              name="cha_001"
            />
          </ul>
        </div>
        <Post img={require("../../img/img1.jpg").default} title="diudiudiu" />
        <Post img={require("../../img/img2.jpg").default} title="gdfhdhg" />
        <Post img={require("../../img/img3.jpg").default} title="werwgdf" />
        <Post
          img={require("../../img/img4.jpg").default}
          title="diudiudiudiu"
        />
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
