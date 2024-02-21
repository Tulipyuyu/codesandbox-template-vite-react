import { Styled } from "./styled";
export default () => {
  const list = [
    { name: "首页", enname: "Home", id: "1", icon: "" },
    { name: "好玩", enname: "Fun", id: "2", icon: "" },
    { name: "关于", enname: "About", id: "3", icon: "" },
  ];
  return (
    <Styled>
      <nav id="nav">
        {list.map((item) => (
          <div key={item.id} className="item">
            {item.name}
          </div>
        ))}
      </nav>
    </Styled>
  );
};
