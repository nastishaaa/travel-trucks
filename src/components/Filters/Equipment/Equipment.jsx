import s from './Equipment.module.css';

import sprite from '../../../assets/icons/symbol-defs.svg';
import FilterItem from '../FilterItem/FilterItem';

const equipIcons = [
    {
        id: 1, title: 'AC', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-wind`} />
            </svg>)
    },
    {
        id: 2, title: 'Automatic', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-diagram`} />
            </svg>)
    },
    {
        id: 3, title: 'Kitchen', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-cup-hot`} />
            </svg>)
    },
    {
        id: 4, title: 'TV', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-tv`} />
            </svg>)
    },
    {
        id: 5, title: 'Bathroom', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-ph_shower`} />
            </svg>)
    },
];

export default function Equipment() {
    return (
        <div className={s.equipConteiner}>
            <p className={s.mainText}>Vehicle equipment</p>
            <div className={s.line}></div>
            <ul className={s.equipmentList}>
                {equipIcons.map(item => (
                    <li key={item.id} className={s.equipmentItem}>
                        <FilterItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
