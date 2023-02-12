import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import Avatar from '../img/perfil.jpg';

import '../styles/components/sidebar.sass';


const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Daniel Filipe" />
      <p className='title'>Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="Daniel%20Filipe%20Dantas%20da%20Silva.pdf" target="_blank" className='btn'>Download currículo</a>
    </aside>
  )
}

export default Sidebar