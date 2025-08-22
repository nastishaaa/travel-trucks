// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import s from './CatalogList.module.css';
// import { selectData, selectFilteredCampers } from '../../redux/selectors';
// import { getCampers } from '../../redux/operations';
// import CatalogItem from '../CatalogItem/CatalogItem';

// export default function CatalogList() {
//     const dispatch = useDispatch();
//     const data = useSelector(selectData);
//     const filteredCampers = useSelector(selectFilteredCampers);
    
//     const [visibleCount, setVisibleCount] = useState(() => {
//         const saved = localStorage.getItem('visibleCount');
//         return saved ? Number(saved) : 4;
//     });

//     useEffect(() => {
//         if (data.length === 0) {
//             dispatch(getCampers());
//         }
//         localStorage.setItem('visibleCount', visibleCount);
//     }, [dispatch, visibleCount, data.length, filteredCampers]);

//     const handleLoadMore = () => {
//         const prevCount = visibleCount;
//         setVisibleCount(prev => prev + 4);

//         setTimeout(() => {
//             const lastItem = document.getElementById(`item-${prevCount}`);
//             if (lastItem) {
//                 lastItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             }
//         }, 100);
//     }

//     const campersToRender = filteredCampers.length > 0 ? filteredCampers : data;

//     return (
//         <div>
//             <ul className={s.listCatalog}>
//                 {(filteredCampers.length > 0 ? filteredCampers : data)
//                     .slice(0, visibleCount)
//                     .map(item => (
//                         <li key={item.id} className={s.catalogItem}>
//                             <CatalogItem item={item} />
//                         </li>
//                     ))}
//             </ul>

//             {visibleCount < campersToRender.length && (
//                 <div className={s.loadMoreWrapper}>
//                     <button onClick={handleLoadMore} className={s.loadMoreButton}>
//                         Load More
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import s from './CatalogList.module.css';
import { selectData, selectFilteredCampers } from '../../redux/selectors';
import { getCampers } from '../../redux/operations';
import CatalogItem from '../CatalogItem/CatalogItem';

export default function CatalogList() {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const filteredCampers = useSelector(selectFilteredCampers);

    const [visibleCount, setVisibleCount] = useState(4); // показуємо перші 4 елементи

    const campersToRender = filteredCampers.length > 0 ? filteredCampers : data;

    // Завантажуємо дані при першому рендері
    useEffect(() => {
        if (data.length === 0) {
            dispatch(getCampers());
        }
    }, [dispatch, data.length]);

    // Скидаємо лічильник при зміні фільтру
    useEffect(() => {
        setVisibleCount(4);
    }, [filteredCampers]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4);

        setTimeout(() => {
            const lastItem = document.getElementById(`item-${visibleCount}`);
            if (lastItem) {
                lastItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <div>
            <ul className={s.listCatalog}>
                {campersToRender.slice(0, visibleCount).map((item, index) => (
                    <li key={item.id} id={`item-${index}`} className={s.catalogItem}>
                        <CatalogItem item={item} />
                    </li>
                ))}
            </ul>

            {visibleCount < campersToRender.length && (
                <div className={s.loadMoreWrapper}>
                    <button onClick={handleLoadMore} className={s.loadMoreButton}>
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
