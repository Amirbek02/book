import React from 'react'

import './content.scss'
import { Link } from 'react-router-dom'

function Content() {
  return (
    <div className="content">
      <div className="container">
        <div className="content__container">
          <div className="content__texts">
            <h1 className="content__title">
              AUTOCAD ОРТАСЫНДА МОДЕЛЬДЕУ НЕГІЗДЕРІ
            </h1>
            <p className="content__descr">
              AutoCAD2023 пакетіндегі жұмыс принциптері қажетті түсіндірмелермен және әдістемелік нұсқаулармен әр түрлі объектілердің 2D сызбалары мен 3D модельдерін құру мысалдарымен көрсетілген.
            </p>
            <Link to="/read" className="content__link">Электронды оқулық</Link>
          </div>
          <img src="img/book2.png" alt="" className="content__img" />
        </div>
        <div className="annotation">
          <h2 className="annotation__title">Электронды оқулықтың аннотациясы</h2>
          <p className="annotation__descr">Электронды оқулық  AutoCAD2023 жүйесінде қоршаған әлемнің нақты объектілерінің компьютерлік модельдерін екі өлшемді және үш өлшемді жобалаудың және құрудың негізгі әдістері көрсетілген. AutoCAD2023 пакетіндегі жұмыс принциптері қажетті түсіндірмелермен және әдістемелік нұсқаулармен әр түрлі объектілердің 2D сызбалары мен 3D модельдерін құру мысалдарымен көрсетілген. Оқу құралы ақпараттық коммуникациялық технологиялар бағытында білім алушыларға арналған. </p>
        </div>
        <div className="avtor">
          <h2 className="avtor__title">Автор туралы</h2>
          <div className="texts">
            <ul className="texts__menu">
              <li className="texts__item">
                <h3 className="texts__title">Аты-жөні:  КАЗБЕКОВА ГУЛНУР НАГИМЕТОВНА</h3>
                <p className="texts__descr"><b>Құрылымы</b> (бөлім, факультет, кафедра):    Инженерия факультеті, Компьютерлік инженерия кафедрасы </p>
              </li>
              <li className="texts__item">
                <p className="texts__descr"><b>Қызметі</b> (ғылыми дәрежесі, атағы): техника ғылымдарының кандидаты, кафедра меңгерушісі</p>
              </li>
              <li className="texts__item">
                <p className="texts__descr"><b>Оқыту курстары:</b></p>
                <ol className='lists'>
                  <li>Компьютерлік ойындарды жасау технологиясы</li>
                  <li>Java технологиясы</li>
                  <li>Бұлттық технологиялар</li>
                  <li>Ақпараттық процестерді модельдеу</li>
                  <li>AutoCad ортасында модельдеу</li>
                </ol>
              </li>
              <li className="texts__item">
                <p className="texts__descr"><b>Кампус: </b>  Кентау қаласы, Кентау қаласы, №1 ғимарат, №207 </p>
              </li>
              <li className="texts__item">
                <p className="texts__descr"><b>Телефон:</b>  +7 (775) 1333354</p>
              </li>
              <li className="texts__item">
                <p className="texts__descr"><b>Email:</b>    gulnur.kazbekova@ayu.edu.kz</p>
              </li>
            </ul>
            <img className='texts__img' src="/img/фото.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content