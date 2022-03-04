import { useState } from "react";
import "./Meme.css";
import data from "../data.js";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(data);

  function handleClick() {
    const randomNumber = Math.floor(
      Math.random() * allMemeImages.data.memes.length
    );

    const randomMemeImage = allMemeImages.data.memes[randomNumber].url;

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: randomMemeImage,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="meme--input"
          type="text"
          name="topText"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="meme--input"
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleClick} className="meme--btn" type="submit">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--img" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
