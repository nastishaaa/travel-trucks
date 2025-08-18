import s from './Types.module.css';

import sprite from '../../../assets/icons/types-equipment.svg';
import FilterItem from '../FilterItem/FilterItem';

const typeIcons = [
    {
        id: 1, title: 'Van', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-bi_grid-1x2`} />
            </svg>)
    },
    {
        id: 2, title: 'Fully Integrated', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-bi_grid`} />
            </svg>)
    },
    {
        id: 3, title: 'Alcove', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-bi_grid-3x3-gap`} />
            </svg>)
    },
];

export default function Types() {
    return (
        <div className={s.equipConteiner}>
                    <p className={s.mainText}>Vehicle type</p>
                    <div className={s.line}></div>
                    <ul className={s.equipmentList}>
                        {typeIcons.map(item => (
                            <li key={item.id} className={s.equipmentItem}>
                                <FilterItem item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
    );
}
