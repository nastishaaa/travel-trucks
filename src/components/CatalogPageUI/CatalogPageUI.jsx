import { useNavigate } from 'react-router-dom';

import s from './CatalogPageUI.module.css';
import MainInfo from './MainInfo/MainInfo';
import PhotoCatalog from './PhotoCatalog/PhotoCatalog';
import Description from './Description/Description';
import FeaturesReviews from '../FeaturesReviews/FeaturesReviews';
import { useEffect } from 'react';

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
            <MainInfo />
            <PhotoCatalog />
            <Description />
            <FeaturesReviews />
        </div>
    );
}
