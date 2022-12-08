import React, {useState} from 'react';
import "./Image.css"

export default function Image() {
  const [addImageDisabled, setAddImageDisabled] = useState(false)
  const [increaseImageDisabled, setIncreaseImageDisabled] = useState(true)
  const [reduceImageDisabled, setReduceImageDisabled] = useState(true)
  const [removeImageDisabled, setRemoveImageDisabled] = useState(true)
  
  const [imageSize, setImageSize] = useState(600)

  function add() {
    setAddImageDisabled(true)
    setIncreaseImageDisabled(false)
    setReduceImageDisabled(false)
    setRemoveImageDisabled(false);
  }

  function increase() {
    if (imageSize < 800) {
      setImageSize(imageSize + 20)
      setReduceImageDisabled(false)
    } else {
      setIncreaseImageDisabled(true)
      alert("Ви досягли максимального значення зображення!")
    }
  }

  function reduce() {
    if (imageSize > 400) {
      setImageSize(imageSize - 20)
      setIncreaseImageDisabled(false)
    } else {
      setReduceImageDisabled(true)
      alert("Ви досягли мінімального значення зображення!")
    }
  }

  function remove() {
    setAddImageDisabled(false)
    setIncreaseImageDisabled(true)
    setReduceImageDisabled(true)
    setRemoveImageDisabled(true);
  }
  
  return (
    <div>
      <button className="buttonImage" onClick={add} disabled={addImageDisabled}>Додати</button>
      <button className="buttonImage" onClick={increase} disabled={increaseImageDisabled}>Збільшити</button>
      <button className="buttonImage" onClick={reduce} disabled={reduceImageDisabled}>Зменшити</button>
      <button className="buttonImage" onClick={remove} disabled={removeImageDisabled}>Видалити</button>
      <p>
        <img id="picture"
        src="https://www.poland.travel/images/ru-RU/Miasta/poznan_stare_miasto_2_1170.jpg"
        alt="Фото м. Познань"
        hidden={!addImageDisabled}
        width={imageSize} />
      </p>
    </div>
  )
}