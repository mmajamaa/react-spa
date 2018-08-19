import React, { Component } from "react";
import fi from './fi.png';
import gb from './gb.png';
import ru from './ru.png';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import ResponsiveMenu from 'react-responsive-navbar';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'fi',
    }
  }


  getContent(lang, index) {
    if (lang === 'fi') {
      document.title = "Mikko Majamaa";
      const strings = {
        'main' : 'Etusivu',
        'mainContent': 'Näillä nettisivuilla esittelen itseni sekä joitain ohjelmointiprojektejani.',
        'aboutme' : 'Esittely',
        'aboutme_intro': 'Olen laskennallisen tekniikan toisen vuoden opiskelija Lappeenrannan teknillisessä yliopistossa. Pääaineeni on teknillinen matematiikka ja sivuaineeni tietotekniikka. Olen erityisen kiinnostunut ohjelmoinnista.',
        'aboutme_p_langs': 'Minulla on osaamista seuraavilla ohjelmointimenetelmillä:',
        'aboutme_langs' : 'Kielitaito:',
        'aboutme_fi' : 'suomi (äidinkieli)',
        'aboutme_en' : 'englanti',
        'aboutme_swe' : 'ruotsi',
        'aboutme_ru' : 'venäjä (alkeet)',
        'aboutme_projects': 'Toteutuksia em. kielillä: ',
        'projects' : 'Projekteja',
        'this_site_project': 'Tämä sivusto',
        'this_site': 'Tämä Single-Page Applikaatio luotiin react-create-app -komentorivityökalulla.',
        'name_file_analyzer': "Ohjelma lukee ja analysoi väestörekisterikeskuksen julkaisemia nimitiedostoja. Projektin repository:",
        'compute_taxes_by_year_and_emission_classes' : 'Tämä ohjelma lukee ja analysoi Trafin julkaisemia tiedostoja Suomessa rekisteröidyistä autoista. Projektin repository:',
        'SmartPostApp': "Applikaatio kuvitteelliselle SmartPost-asiakkaalle pakettien luontia ja lähetystä varten. Projektin repository:",
        'testdatacreator' : 'Tämä ohjelma lukee txt, csv yms. tiedostoja ja mahdollistaa käyttäjän luoda niistä pienempiä tiedostoja esim. testausta varten. Projektin repository: ',
        'contact' : 'Yhteystiedot',
        'contactEmail' : 'Sähköposti:',
        'contactPhone' : 'Puhelinnummero:'
      }
      return strings[index]
    } else if (lang === 'en') {
      document.title = "Mikko Majamaa";
      const strings = {
        'main' : 'Main page',
        'mainContent': "On this website I'll introduce myself and some of my programming projects.",
        'aboutme' : 'About me',
        'aboutme_intro' : "I'm a second year student of computational engineering at Lappeenranta university of technology with technomathemathics as my major and Information Technology as my minor. I'm especially interested in programming.",
        'aboutme_p_langs': 'Programming skills:',
        'aboutme_langs' : 'Language skills:',
        'aboutme_fi' : 'Finnish (native)',
        'aboutme_en' : 'English',
        'aboutme_swe' : 'Swedish',
        'aboutme_ru' : 'Russian (the basics)',
        'aboutme_projects': 'Implementations with the languages listed above: ',
        'projects' : 'Projects',
        'this_site_project': 'This site',
        'this_site': 'This Single-Page Application was made using react-crete-app -command line tool.',
        'name_file_analyzer': "Program that reads and analyzes name files provided by Finland's Population Register Centre. See the project repo on",
        'compute_taxes_by_year_and_emission_classes' : 'This program reads and analyzes csv files provided by Trafi that include data on cars registered in Finland. See the project repo on',
        'SmartPostApp': "Application for imaginary SmartPost customer to create and send packages. See the project repo on",
        'testdatacreator' : 'This program reads txt, csv etc. files with data and allows the user to create smaller files for testing purposes. See the project repo on',
        'contact' : 'Contact',
        'contactEmail' : 'Email:',
        'contactPhone' : 'Phone number:'
      }
      return strings[index]
    } else if (lang === 'ru') {
      document.title = "Микко Майамаа";
      const strings = {
        'main' : 'фронт',
        'mainContent': "На этом веб-сайте я представим себя и некоторые из моих программных проектов.",
        'aboutme' : 'обо мне',
        'aboutme_intro' : "Я студент второго курса вычислительной техники в университете технологии Лаппеенранта с техномагематологией, как мои основные и информационные технологии в качестве моего несовершеннолетнего. Меня особенно интересует программирование.",
        'aboutme_p_langs': 'Навыки программирования:',
        'aboutme_langs' : 'Языковые навыки:',
        'aboutme_fi' : 'Финский (родной)',
        'aboutme_en' : 'английский',
        'aboutme_swe' : 'шведский',
        'aboutme_ru' : 'русский',
        'aboutme_projects': 'Реализации с перечисленными выше языками: ',
        'projects' : 'проектов',
        'name_file_analyzer': "см. в репозитории проекта и",
        'compute_taxes_by_year_and_emission_classes' : 'см. в репозитории проекта и',
        'SmartPostApp': "см. в репозитории проекта и",
        'testdatacreator' : 'см. в репозитории проекта и',
        'contact' : 'контакт',
        'contactEmail' : 'е-мейл:',
        'contactPhone' : 'номер телефона:'
      }
      return strings[index]
    }
  }

  render() {
    return (
      <HashRouter>
      <div>
        <ResponsiveMenu
                menuOpenButton={<div />}
                menuCloseButton={<div />}
                changeMenuOn="500px"
                largeMenuClassName="large-menu-classname"
                smallMenuClassName="small-menu-classname"
                menu={
                <ul className="header">
                    <li><NavLink exact to="/" className="link">{this.getContent(this.state.lang, 'main')}</NavLink></li>
                    <li><NavLink to="/aboutme" className="link">{this.getContent(this.state.lang, 'aboutme')}</NavLink></li>
                    <li><NavLink to="/projects" className="link">{this.getContent(this.state.lang, 'projects')}</NavLink></li>
                    <li><NavLink to="/contact" className="link">{this.getContent(this.state.lang, 'contact')}</NavLink></li>
                    <li className="flag-li" onClick={() => {if (this.state.lang !== 'ru'){this.setState({lang:'ru'})}}}>
                        <img src={ru} alt="RU" className="flag"/>
                    </li>
                    <li className="flag-li" onClick={() => {if (this.state.lang !== 'fi'){this.setState({lang:'fi'})}}}>
                          <img src={fi} alt="FI" className="flag"/>
                    </li>
                    <li className="flag-li" onClick={() => {if (this.state.lang !== 'en'){this.setState({lang:'en'})}}}>
                        <img src={gb} alt="EN" className="flag"/>
                    </li>
                  </ul>
                }
              />
          <div className="content">
            <Route exact path="/" render={()=><Home lang={this.state.lang} getContent={this.getContent}/>}/>
            <Route path="/aboutme" render={()=><About lang={this.state.lang} getContent={this.getContent}/>}/>
            <Route path="/projects" render={()=><Projects lang={this.state.lang} getContent={this.getContent}/>}/>
            <Route path="/contact" render={()=><Contact lang={this.state.lang} getContent={this.getContent}/>}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
