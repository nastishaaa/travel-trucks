import s from './FeaturesUI.module.css';
import CatalogFeatures from '../../CatalogItem/CatalogFeatures/CatalogFeatures';
import { useSelector } from 'react-redux';
import { selectItem } from '../../../redux/selectors';

export default function FeaturesUI() {
    const item = useSelector(selectItem);
    const itemDetails = [
        {
            name: 'Form',
            val: item.form
        }, {
            name: 'Length',
            val: item.length
        }, {
            name: 'Width',
            val: item.width
        }, {
            name: 'Height',
            val: item.height
        }, {
            name: 'Tank',
            val: item.tank
        }, {
            name: 'Consumption',
            val: item.consumption
        },
    ];

    return (
        <div className={s.container}>
            <div className={s.featuresContainer}>
                <CatalogFeatures c={item.AC} bathroom={item.bathroom}
                        kitchen={item.kitchen} tv={item.TV} radio={item.radio}
                        refrigerator={item.refrigerator} microwave={item.microwave}
                        gas={item.gas} water={item.water} />
            </div>

            <div className={s.details}>
                <h3 className={s.detailTitle}>
                    Vehicle details
                </h3>

                <svg width="527" height="2" viewBox="0 0 527 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H527" stroke="#DADDE1" />
                </svg>

                <ul className={s.detailsList}>
                    {itemDetails.map(i => (
                        <li key={i.name} className={s.listItem}>
                            <div>{i.name}</div><div>{i.val}</div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}
