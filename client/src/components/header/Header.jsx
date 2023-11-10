import './header.css';
import bgImg from './../../assets/images/sunset.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node JS</span>
        <span className='headerTitleLg'>Blogs</span>
      </div>
      <img className='headerImg' src={bgImg} alt="bg" />
    </div>
  )
}

export default Header