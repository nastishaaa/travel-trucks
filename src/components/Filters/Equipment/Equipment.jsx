import s from './Equipment.module.css';

import sprite from '../../../assets/icons/symbol-defs.svg';
import FilterItem from '../FilterItem/FilterItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredData } from '../../../redux/slice';
import { selectFilteredData } from '../../../redux/selectors';

const equipIcons = [
    {
        id: 1, title: 'AC', key: 'AC', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-wind`} />
            </svg>)
    },
    {
        id: 2, title: 'Automatic', key: 'gas', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-diagram`} />
            </svg>)
    },
    {
        id: 3, title: 'Kitchen', key: 'kitchen', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-cup-hot`} />
            </svg>)
    },
    {
        id: 4, title: 'TV', key: 'TV', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-tv`} />
            </svg>)
    },
    {
        id: 5, title: 'Bathroom', key: 'bathroom', icon: (
            <svg width="32" height="32">
                <use href={`${sprite}#icon-ph_shower`} />
            </svg>)
    },
];

export default function Equipment() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredData);

    const onClick = (payload) => {
        dispatch(setFilteredData({category: 'equipment', value: payload}));
    }

    return (
        <div className={s.equipConteiner}>
            <p className={s.mainText}>Vehicle equipment</p>
            <div className={s.line}></div>
            <ul className={s.equipmentList}>
                {equipIcons.map(item => {
                    const isActive = filter.equipment?.includes(item.key) || false;

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
