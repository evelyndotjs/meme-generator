import { useState, useEffect } from "react";
import "./Meme.css";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const randomMemeImage = allMemes[randomNumber].url;

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
