import { Link } from 'react-router-dom';
import s from './Button.module.css';

export default function Button({ link, text }) {
    return (
        <div>
            <Link to={link} className={s.btn}>{ text}</Link>
        </div>
    ) 
}
