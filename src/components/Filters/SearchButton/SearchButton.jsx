import { useDispatch, useSelector } from 'react-redux';
import s from './SearchButton.module.css';
import { selectData, selectFilteredData } from '../../../redux/selectors';
import { setFilteredCampers } from '../../../redux/slice';

export default function SearchButton() {
    const filters = useSelector(selectFilteredData);
    const campers = useSelector(selectData);

    const dispatch = useDispatch();

    
    const handleClick = () => {
        let filteredCampers = campers;
        
        if (typeof filters.location === 'string' && filters.location.trim() !== '') {
            const normalize = str =>
                (str || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

            const locationFilter = normalize(filters.location);

            filteredCampers = filteredCampers.filter(camp =>
                normalize(camp.location).includes(locationFilter)
            );

        }

        if (Array.isArray(filters.equipment) && filters.equipment.length > 0) {
            filteredCampers = filteredCampers.filter(camp =>
                filters.equipment.every(key => camp[key] === true)
            );
        }

        if (Array.isArray(filters.form) && filters.form.length > 0) {
            filteredCampers = filteredCampers.filter(camp =>
                filters.form.includes(camp.form)
            );
        }

        dispatch(setFilteredCampers(filteredCampers))
    }


    return <button
        type='button'
        onClick={handleClick}
        className={s.btnSearch}>
            Search
        </button>
}
