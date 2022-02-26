import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/pro-solid-svg-icons';

export default function Logo({ className }) {
  return <FontAwesomeIcon icon={faMountain} className={className} />;
}
