import s from './ToolBar.module.css';

import Location from '../Location/Location';
import Filters from '../Filters/Filters';

export default function ToolBar() {

    return (

        <div className={s.containerTools}>
            <Location />
            <Filters />
        </div>
    );
}
