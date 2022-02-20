import { useState } from "react";
import "./Meme.css";
import data from "../data.js";

function Meme() {
  const [memeImage, setMemeImage] = useState("");
  function handleClick() {
    const memeData = data.data.memes;
    const randomIndex = Math.floor(Math.random() * memeData.length);

    return setMemeImage(memeData[randomIndex].url);
  }

  return (
    <main>
      <div className="form">
        <input
          className="meme--input"
          type="text"
          name="firstInput"
          placeholder="Top Text"
        />
        <input
          className="meme--input"
          type="text"
          name="secondInput"
          placeholder="Bottom Text"
        />
        <br />
        <button onClick={handleClick} className="meme--btn" type="submit">
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={memeImage} alt="meme" className="meme--img" />
    </main>
  );
}

export default Meme;
