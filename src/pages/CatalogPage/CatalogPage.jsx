import CatalogList from '../../components/CatalogList/CatalogList';
import ToolBar from '../../components/ToolBar/ToolBar';

import s from './CatalogPage.module.css';

export default function CatalogPage() {
    return (
        <div className={s.container}>
            <ToolBar />
            <CatalogList />
        </div>
    );
}
