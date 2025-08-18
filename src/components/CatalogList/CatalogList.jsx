import { useDispatch, useSelector } from 'react-redux';
import s from './CatalogList.module.css';
import { selectData } from '../../redux/selectors';
import { getCampers } from '../../redux/operations';
import { useEffect } from 'react';
import CatalogItem from '../CatalogItem/CatalogItem';

export default function CatalogList() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);

    useEffect(() => {
        console.log("Dispatching getCampers");
        dispatch(getCampers());
    }, [dispatch]);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <CatalogItem item={item} />
                </li>
            ))}
        </ul>
    );
}
