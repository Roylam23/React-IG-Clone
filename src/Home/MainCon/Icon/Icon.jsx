const Icon = (props) => {
  return (
    <li>
      <div className="icon-con">
        <img src={props.img} alt="" />
      </div>
      {props.name}
    </li>
  );
};
export default Icon;
