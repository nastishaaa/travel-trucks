import { NavLink, Outlet } from 'react-router-dom';
import s from './FeaturesReviews.module.css'
import { useSelector } from 'react-redux';
import { selectItem } from '../../redux/selectors';
import { Suspense } from 'react';

import FormComtainer from '../FormComtainer/FormComtainer';
import Loader from '../Loader/Loader';

export default function FeaturesReviews() {
    const item = useSelector(selectItem);
    return (
        <div>
            <div className={s.navBlock}>
                <NavLink
                    to={`/catalog/${item.id}/features`}
                    className={({ isActive }) => isActive ? s.activeLink : undefined}
                >
                    Features
                </NavLink>
                <NavLink
                    to={`/catalog/${item.id}/reviews`}
                    className={({ isActive }) => isActive ? s.activeLink : undefined}
                >
                    Reviews
                </NavLink>
            </div>

            <hr className={s.underline} />
            <div className={s.bottomContainer}>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>

                <FormComtainer />
            </div>
            

        </div>
    );
}
