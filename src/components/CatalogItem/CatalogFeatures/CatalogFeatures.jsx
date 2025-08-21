import s from './CatalogFeatures.module.css';

import sprite from '../../../assets/icons/symbol-defs.svg';

const featuresIcons = [
    {
        id: 1,
        key: "AC",
        title: "AC",
        icon: (
            <svg width="20" height="20" >
                <use href={`${sprite}#icon-wind`} />
            </svg>),
    },
    {
        id: 2,
        key: "bathroom",
        title: "Bathroom",
        icon: (
            <svg width="20" height="20" >
                <use href={`${sprite}#icon-ph_shower`} />
            </svg>
            ),
    },
    {
        id: 3,
        key: "kitchen",
        title: "Kitchen",
        icon: (
            <svg width="20" height="20"  >
                <use href={`${sprite}#icon-cup-hot`} />
            </svg>
        ),
    },
    {
        id: 4,
        key: "TV",
        title: "TV",
        icon: (
            <svg width="20" height="20" >
                <use href={`${sprite}#icon-tv`} />
            </svg>
        ),
    },
    {
        id: 5,
        key: "radio",
        title: "Radio",
        icon: (
            <svg width="20" height="20" className={s.icon}>
                <use href={`${sprite}#icon-hugeicons_gas-stove`} />
            </svg>
        ),
    },
    {
        id: 6,
        key: "refrigerator",
        title: "Refrigerator",
        icon: (
            <svg width="20" height="20" className={s.icon}>
                <use href={`${sprite}#icon-solar_fridge-outline`} />
            </svg>
        ),
    },
    {
        id: 7,
        key: "microwave",
        title: "Microwave",
        icon: (
            <svg width="20" height="20" className={s.icon}>
                <use href={`${sprite}#icon-lucide_microwave`} />
            </svg>
        ),
    },
    {
        id: 8,
        key: "gas",
        title: "Gas",
        icon: (
            <svg width="20" height="20" className={s.icon} >
                <use href={`${sprite}#icon-fuel-pump`} />
            </svg>
        ),
    },
    {
        id: 9,
        key: "water",
        title: "Water",
        icon: (
            <svg width="20" height="20" className={s.icon}>
                <use href={`${sprite}#icon-ion_water-outline`} />
            </svg>
        ),
    },
    {
        id: 10, title: 'Automatic',
        key: "automatic",
        icon: (
            <svg width="20" height="20" >
                <use href={`${sprite}#icon-diagram`} />
        </svg>)
    },
];

export default function CatalogFeatures(props) {

    return (
        <ul className={s.list}>
            {featuresIcons
                .filter(item => props[item.key]) 
                .map(item => (
                    <li key={item.id} className={s.listItem}>
                        <span>{item.icon}</span>
                        <p>{item.title}</p>
                    </li>
                ))}
        </ul>
    );
}
