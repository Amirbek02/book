import React from 'react'


import './avtor.scss'

function Avtor() {
  return (
    <div className="container">
      <div className='about'>
        <div className="about__titles">
          <img className='about__img' src="img/фото.jpg" alt="" />
          <h2 className='about__title'>КАЗБЕКОВА ГУЛНУР НАГИМЕТОВНА</h2>
        </div>
        <div className="about__inner">
          <ul className="about__menu">
            <li className="about__item">
              <h3 className="about__item-title">БІЛІМІ</h3>
              <p className="about__descr">№1 В.И.Ленин атындағы орта мектеп, алтын медаль;
              Қорқыт ата атындағы Қызылорда пединституты (1994ж.), мамандығы: «Информатика және есептеу техникасы», үздік.
              </p>
            </li>
            <li className="about__item">
              <h3 className="about__item-title">ҒЫЛЫМИ ДӘРЕЖЕСІ, АТАҒЫ</h3>
              <p className="about__descr">Техника ғылымдарының кандидаты (26.03.2010ж.)</p>
            </li>
            <li className="about__item">
              <h3 className="about__item-title">МАҚСАТЫ</h3>
              <p className="about__descr">Перспективті жоғары оқу орнында жұмыс жасап, Қазақстанның өркендеуіне және IT-индустриясын дамытатын студенттерді дайындауда өз үлесімді қосу</p>
            </li>
            <li className="about__item">
              <h3 className="about__item-title">ЕРЕКШЕ ҚАСИЕТІ</h3>
              <p className="about__descr">Қарапайымдылық, көппен тіл таба алу, коллективті басқара алу, IT саласында үнемі іздену</p>
            </li>
          </ul>
          <ul className="about__menu">
            <li className="about__item">
              <h3 className="about__item-title">ЖҰМЫС ТƏЖІРИБЕСІ</h3>
              <p className="about__descr">
                <li>2020-қазіргі уақытта - Қожа Ахмет Ясауи атындағы Халықаралық қазақ-түрік университеті, кафедра меңгерушісі</li>
                <li>2017-2020ж. – С.Баишев атындағы Ақтөбе университеті,
                «Ақпараттық	коммуникациялық	технологиялар»	кафедрасының меңгерушісі, т.ғ.к., доцент
                </li>
                <li>2014– 2017ж. ҚОХУ, «Техникалық жəне ғылыми-жаратылыстану пəндері» кафедрасының меңгерушісі, т.ғ.к., доцент</li>
                <li>2013-2014ж.-Ақтөбе	өңірлік	мемлекеттік	университеті,	физика- математика факультеті, т.ғ.к.</li>
                <li>2007-2013ж.-Ақтөбе мемлекеттік педагогикалық институты, физика- математика факультеті, т.ғ.к.</li>
                <li>2004-2007ж. М.Тынышпаев атындағы ҚжБҚА АФ, аға оқытушы. </li>
                <li>2000-2004ж. ҚҰТУ АФ, аға оқытушы</li>
                <li>1994-2000ж. Жаңаөзен мұнай жəне газ колледжі, информатика жəне есептеу техникасы пəндерінің оқытушысы</li>
              </p>
            </li>
            <li className="about__item">
              <h3 className="about__item-title">ҒЫЛЫМИ ЕҢБЕКТЕРІ</h3>
              <p className="about__descr">Ғылыми мақалалары халықаралық, республикалық конференция жинақтарында, Отандық және халықаралық ғылыми журналдарда, Қазақстан Республикасы Білім және ғылым министрлігінің Білім және ғылым саласындағы бақылау комитетімен (ҚР БҒМ ККСОН) ұсынылған басылымдарында, Scopus-тың индекстелген импакт-факторлы журналдарында жарияланды.</p>
            </li>
            <li className="about__item">
              <h3 className="about__item-title">ҚОСЫМША АҚПАРАТ</h3>
              <p className="about__descr">«Ақпараттық-коммуникациялық технологиялар» бағыты бойынша Республикалық оқу-әдістемелік бірлестікке (УМО РУМС)</p>
            </li>
          </ul>
        </div>
        <div className="about__icons">
          <li>
            <img src="img/icon2.png" alt="" />
            <p>gulnur.kazbekova@ayu.edu.kz</p>
          </li>
          <li>
          <img src="img/icon1.png" alt="" />
            <p>+7 (775) 1333354</p>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Avtor