import React from "react";
import DigiLogo from "../images/brand.png";
import axios from "axios";

const Main = () => {
  const [data, setData] = React.useState({});
  const [list, setList] = React.useState([]);
  const [selected, setSelected] = React.useState("");
  const [cardImg, setCardImg] = React.useState(null);
  const [cardName, setCardName] = React.useState(null);
  const [cardLvl, setCardLvl] = React.useState(null);
  const [cardState, setCardState] = React.useState(false);
  const [randomNum, setRandomNum] = React.useState(0)

  React.useEffect(() => {
    axios.get("https://digimon-api.vercel.app/api/digimon").then((data) => {
      const digimons = data.data.map((item) => item.name);
      setData(data.data);
      setList(digimons);
      setRandomNum(Math.floor(Math.random() * 50));
    });
  }, []);

  const submit = (event) => {
    event.preventDefault();
    setCardImg(data[selected].img);
    setCardName(data[selected].name);
    setCardLvl(data[selected].level);
    setCardState(true);
  };

  const random = (event) =>{
    event.preventDefault();
    setRandomNum(Math.floor(Math.random()*list.length));
    setCardImg(data[randomNum].img);
    setCardName(data[randomNum].name);
    setCardLvl(data[randomNum].level);
    setCardState(true);
  }

  return (
    <main>
      {!cardState && (
        <div id="main--logo">
          <img id="main--logo--img" src={DigiLogo} alt="logo" />
        </div>
      )}
      {/* dropdown select */}
      <form onSubmit={submit}>
        <select
          id="main--select"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option>Elige tu Digimon</option>
          {list.map((item) => (
            <option value={list.indexOf(item)} key={list.indexOf(item)}>
              {item}
            </option>
          ))}
        </select>
        {/* buttons */}
        <div id="main--buttons">
          <button type="submit" className="main--buttons-button">
            Buscar
          </button>
          <button onClick={random} className="main--buttons-button">
            Random
          </button>
        </div>
      </form>
      {/* card */}
      {cardState && (
        <div id="card">
          <div id="card--img">
            <img id="card--pic" src={cardImg} alt="digimon image" />
          </div>
          <hr />
          <div id="card--name">{cardName}</div>
          <hr />
          <div id="card--lvl">{cardLvl}</div>
        </div>
      )}
    </main>
  );
};

export default Main;
