import { useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import s from './CatalogPageUI.module.css';
import Loader from '../Loader/Loader';
const MainInfo = lazy(() => import('./MainInfo/MainInfo'));
const PhotoCatalog = lazy(() => import('./PhotoCatalog/PhotoCatalog'));
const Description = lazy(() => import('./Description/Description'));
const FeaturesReviews = lazy(() => import('../FeaturesReviews/FeaturesReviews'));

export default function CatalogPageUI() {
    
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={s.mainContainer}>
            <button 
                onClick={() => navigate('/catalog')} 
                className={s.backButton}
            >
                ← Back
            </button>
            <Suspense fallback={<Loader/>}>
                <MainInfo />
                <PhotoCatalog />
                <Description />
                <FeaturesReviews />
            </Suspense>
        </div>
    );
}
