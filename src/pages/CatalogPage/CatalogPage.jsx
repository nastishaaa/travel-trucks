import { lazy, Suspense } from 'react';

import ToolBar from '../../components/ToolBar/ToolBar';
const CatalogList = lazy(() => import('../../components/CatalogList/CatalogList'));

import s from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader';

export default function CatalogPage() {
    return (
        <div className={s.container}>
            <ToolBar />
            <Suspense
                fallback={<Loader/>}>
                <CatalogList />
            </Suspense>
        </div>
    );
}
