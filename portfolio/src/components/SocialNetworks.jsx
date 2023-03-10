import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link:"https://www.linkedin.com/in/daniel-filipe-dantas-170422242/" },
    { name: "github", icon: <FaGithub />, link:"https://github.com/D4niel001" },
    { name: "instagram", icon: <FaInstagram />, link:"https://www.instagram.com/daniel.slip3" },
  ];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) =>(
            <a href={network.link} target="_blank" className="social-btn" id={network.name}key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
};

export default SocialNetworks;