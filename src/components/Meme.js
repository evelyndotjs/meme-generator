import "./Meme.css";
import data from "../data.js";

function Meme() {
  function handleClick() {
    const memeData = data.data.memes;

    const randomIndex = Math.floor(Math.random() * memeData.length);

    const randomMemeUrl = memeData[randomIndex].url;

    console.log(randomMemeUrl);
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
    </main>
  );
}

export default Meme;
