import s from './Types.module.css';

import sprite from '../../../assets/icons/types-equipment.svg';
import FilterItem from '../FilterItem/FilterItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredData } from '../../../redux/selectors';
import { setFilteredData } from '../../../redux/slice';

const typeIcons = [
    {
        id: 1, title: 'Van', key: 'panelTruck',  icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-bi_grid-1x2`} />
            </svg>)
    },
    {
        id: 2, title: 'Fully Integrated', key: 'fullyIntegrated', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-bi_grid`} />
            </svg>)
    },
    {
        id: 3, title: 'Alcove', key: 'alcove', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-bi_grid-3x3-gap`} />
            </svg>)
    },
];

export default function Types() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredData);

    const onClick = (payload) => {
        dispatch(setFilteredData({category: 'form', value: payload}));
    }
    return (
        <div className={s.equipConteiner}>
            <p className={s.mainText}>Vehicle type</p>
            <div className={s.line}></div>
            <ul className={s.equipmentList}>
                {typeIcons.map(item => {
                    const isActive = filter.form?.includes(item.key) || false;

                    return (
                        <li key={item.id} className={`${s.equipmentItem} ${isActive ? s.active : ''}`}>
                            <button
                                onClick={() => onClick(item.key)}
                                className={s.equipCheckbox}
                            >
                                <FilterItem item={item} />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
