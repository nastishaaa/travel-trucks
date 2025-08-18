import s from './HomePage.module.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className={s.mainContainer}>
            <div className={s.homeContainer}>
                <div className={s.titlesContainer}>
                    <h1 className={s.mainTitle}>
                        Campers of your dreams
                    </h1>
                    <h5 className={s.subTitle}>You can find everything you want in our catalog</h5>
                </div>
                <div className={s.linkContainer}>
                    <Link to='/catalog' className={s.linkViewNow}>View Now</Link>
                </div>
            </div>
        </div>
    );
}
