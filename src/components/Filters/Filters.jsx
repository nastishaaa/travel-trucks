import s from './Filters.module.css';

import Equipment from './Equipment/Equipment';
import Types from './Types/Types';
import SearchButton from './SearchButton/SearchButton';

export default function Filters() {
    return (
        <div>
            <p className={s.filtersText}>Filters</p>
            <Equipment />
            <Types />
            <SearchButton />
        </div>
    );
}
