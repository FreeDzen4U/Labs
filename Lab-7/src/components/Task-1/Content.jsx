import React from 'react';

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.setColor = this.setColor.bind(this);
    }
  
  getColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + ", " + y + ", " + z + ")";
  }

  setColor(event) {
    event.target.style.background = this.getColor();
    event.target.style.color = this.getColor();
  }
  
  render() {
    return (
      <div>
        <p>Хоббі:</p>
        <ul>
          <li style={{ cursor: 'pointer' }} onClick={this.setColor}>Карате</li>
          <li style={{ cursor: 'pointer' }} onClick={this.setColor}>Перегляд фільмів</li>
          <li>Читання книг</li>
          <li>Слухання музики</li>
          <li>Cтрільба</li>
          <li>Стрибки з парашутом</li>
        </ul>

        <p>Улюблені фільми:</p>
        <ul>
          <li>Викрасти за 60 секунд</li>
          <li>Ігри розуму</li>
          <li>Хоббіт</li>
          <li>Залізна людина</li>
          <li>Володар перснів</li>
          <li>1 + 1</li>
        </ul>

        <p>Улюблені книги:</p>
        <ul>
          <li>Відьмак: Останнє бажання</li>
          <li>Пікнік на узбіччі</li>
          <li>Метро 2033</li>
        </ul>
        <p>По́знань (пол. Poznań, лат. Posnania, нім. Posen) — місто на правах повіту в центральній частині західної Польщі, розташоване на Поозер'ї Великопольському, на річці Варта, в гирлі Цибіни. Історична столиця Великопольщі, від 1999 р. адміністративний центр Великопольського воєводства і познанського повіту.</p>
        <p>Місто є важливим автомобільним та залізничним вузлом, тут також функціонує міжнародне летовище Познань-Лавиця. Познань — великий осередок промисловості, технологій, торгівлі, логістики, спорту та туризму.</p>
        <p>Познань — єдине місто, яке згадується в словах польського гімну. Покровителями міста Познані є апостоли Петро і Павло, святі католицької церкви. Свято міста день та його покровителів відзначається 29 червня.</p>
        <a href="https://www.poland.travel/ru/glavnye-goroda/poznan" target="_blank" rel="noreferrer">
          <img
          src="https://www.poland.travel/images/ru-RU/Miasta/poznan_stare_miasto_2_1170.jpg"
          alt="Фото м. Познань"
          height="400px"
          width="600px" />
        </a>   
        <hr />
      </div>
    )
  }
}