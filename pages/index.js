import Layout from "../components/Layout";
// import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faLess, faJsSquare, faNodeJs, faReact, faPhp } from '@fortawesome/free-brands-svg-icons';
import { ProjectGallery } from "../components/ProjectGallery";
// import projectsData from '../public/data/projects.json';
import featuredData from '../public/data/featured.json';
import NavLink from "../components/NavLink";
import { U_LINKEDIN, U_CV, DEV_FULLNAME } from "../config/constants";
import localIcons from "../assets/icons";
import { useLang, useLangLink } from "../utils/Lang";

function loadData(collectionName) {
  try {
    const data = require('../public/data/' + collectionName + '.json');
    return data;
  } catch (err) {
    console.error(`Error: couldn't load data file ${collectionName}.json`);
    return [];
  }
}

function selectFeatured(type) {
  const featList = featuredData[type];
  const objList = {};
  featList.forEach(element => {
    const data = loadData(element.collection);
    if (data) {
      if (data[element.id]) {
        objList[`${element.collection}_${element.id}`] = data[element.id];
      } else {
        console.error(`Error: can't get item of id '${element.id}' from '${element.collection}.json'`);
      }
    } else {
      console.error(`Error: can't get featured items from a non-existent list`);
    }
  });
  return objList;
}




export default function Home({ pageLang = "fr" }) {
  const lang = useLang(pageLang);
  const langLink = useLangLink(pageLang);

  function renderSkill(icon, text) {
    return (
      <div className="skill-item">
        {typeof icon === 'string' ? localIcons[icon] : <FontAwesomeIcon icon={icon} />}
        <label>{text}</label>
      </div>

    );
  }

  return (
    <Layout className="home-page" headTitle={`${DEV_FULLNAME} - ${lang('NAV_HOME')}`} pageLang={pageLang}>

      <section>
        {lang("HOME_WELCOME_TEXT")}
      </section>

      <hr />

      <section id="work-links">
        <a href={U_CV} target="_blank">{lang('CHECK_CV')}</a>
        <a href={U_LINKEDIN} target="_blank">{lang('CHECK_LINKEDIN')}</a>
      </section>

      <hr />

      <section>
        <h2>{lang('SKILLS')}</h2>
        <p className="skills-desc">
          {lang('SKILLS_DESC')}
        </p>
        <div className="skill-box">
          {renderSkill(faHtml5, 'HTML5')}
          {renderSkill(faCss3Alt, 'CSS3')}
          {renderSkill(faLess, 'LESS')}
          {renderSkill('responsive', 'Responsive')}

          {renderSkill(faJsSquare, 'Javascript')}
          {renderSkill(faReact, 'ReactJS')}
          {renderSkill(faNodeJs, 'NodeJS')}
          {renderSkill('nextjs', 'NextJS')}

          {renderSkill(faPhp, 'PHP')}
          {renderSkill('ruby', 'Ruby')}
          {renderSkill(faDatabase, 'SQL')}
          {renderSkill('godotEngine', 'Godot')}
        </div>
      </section>

      <hr />

      <section id="news">
        <h2>{lang('NEWS')}</h2>
        <p className="news-desc">
          {lang('NEWS_DESC')}
        </p>
        <ProjectGallery list={selectFeatured('home')} pageLang={pageLang} />

        <NavLink className="btn btn-blue see-more-btn" href={langLink("/projects")}>{lang('ACTION_SEE_ALL_PROJECTS')}</NavLink>

      </section>

      {/* Liste de clients */}

      {/* Retours clients */}

    </Layout>
  )
}
