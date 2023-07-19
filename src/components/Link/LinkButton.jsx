import './link.css';
import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg";

const LinkButton = ({ name }) => {
  return (
    <a href='#top' className="flex link link-button uppercase">
      <span className="link-name">{name}</span>
      <Arrow />
    </a>
  )
}

export default LinkButton