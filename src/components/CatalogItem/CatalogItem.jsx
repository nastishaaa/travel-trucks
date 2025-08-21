import s from './CatalogItem.module.css';
import sprite from '../../assets/icons/types-equipment.svg'

import CatalogFeatures from './CatalogFeatures/CatalogFeatures';
import Button from '../Button/Button';
import { addToFavorites, removeFromFavorites } from '../../redux/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSavedData } from '../../redux/selectors';

export default function CatalogItem({ item }) {
    const dispatch = useDispatch();
    const savedData = useSelector(selectSavedData);

    const isSaved = savedData.some(i => i.id === item.id);

    return (
        <div className={s.container}>
            <div className={s.photoContainer}>
                <img src={item.gallery[0].thumb} alt="Camp photo"
                    className={s.photoCatalog} width="292" height="320" />
            </div>
            <div className={s.infoContainer}>
                <div className={s.titleContainer}>
                    <h2 className={s.title}>{item.name}</h2>
                    <div className={s.priceFavContainer}>
                        <p className={s.title}>€{item.price.toFixed(2)}</p>
                        {isSaved ? <button type="button" className={s.addToFavBtn}
                            onClick={() => dispatch(removeFromFavorites(item.id))}>
                            <span>
                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 7.854L10.659 5.1705C10.326 4.506 9.7485 3.5505 8.931 2.778C8.127 2.0175 7.164 1.5 6 1.5C3.486 1.5 1.5 3.489 1.5 5.88C1.5 7.6965 2.331 8.979 4.302 10.935C4.8075 11.436 5.3835 11.9775 6.021 12.5745C7.683 14.1345 9.75 16.0755 12 18.6705C14.25 16.0755 16.317 14.1345 17.979 12.5745C18.6165 11.9775 19.194 11.4345 19.698 10.935C21.669 8.979 22.5 7.6965 22.5 5.88C22.5 3.489 20.514 1.5 18 1.5C16.8345 1.5 15.873 2.0175 15.069 2.778C14.2515 3.5505 13.674 4.506 13.341 5.1705L12 7.854ZM12.588 20.292C12.5158 20.3776 12.4257 20.4463 12.3242 20.4935C12.2226 20.5407 12.112 20.5651 12 20.5651C11.888 20.5651 11.7774 20.5407 11.6758 20.4935C11.5743 20.4463 11.4842 20.3776 11.412 20.292C9.0105 17.439 6.837 15.399 5.0475 13.7205C1.95 10.812 0 8.9835 0 5.88C0 2.6325 2.685 0 6 0C8.4 0 10.0785 1.575 11.106 3.012C11.496 3.5595 11.793 4.086 12 4.5C12.2597 3.982 12.5586 3.48456 12.894 3.012C13.9215 1.5735 15.6 0 18 0C21.315 0 24 2.6325 24 5.88C24 8.9835 22.05 10.812 18.9525 13.7205C17.163 15.4005 14.9895 17.442 12.588 20.292Z" fill="#E44848" />
                                </svg>
                            </span>
                        </button> :
                            <button type="button" className={s.addToFavBtn}
                                onClick={() => dispatch(addToFavorites(item.id))}>
                                <span>
                                    <svg width="26" height="24">
                                        <use href={`${sprite}#icon-heart`} />
                                    </svg>
                                </span>
                            </button>}
                        
                        
                    </div>
                </div>

                <div className={s.detailInfo}>
                    <div className={s.reviews}>
                        <span>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.55778 0.838169C7.74538 0.482595 8.25462 0.482596 8.44222 0.838169L10.3305 4.41705C10.4028 4.55417 10.5347 4.64997 10.6874 4.67641L14.6747 5.36629C15.0708 5.43484 15.2282 5.91915 14.948 6.20745L12.1277 9.10921C12.0197 9.22039 11.9693 9.3754 11.9914 9.52886L12.5674 13.5341C12.6246 13.932 12.2126 14.2314 11.8519 14.054L8.22062 12.2685C8.0815 12.2001 7.9185 12.2001 7.77938 12.2685L4.14815 14.054C3.78737 14.2314 3.37539 13.932 3.43262 13.5341L4.00861 9.52886C4.03068 9.3754 3.98031 9.22039 3.87226 9.10921L1.05204 6.20745C0.771841 5.91915 0.929206 5.43484 1.32535 5.36629L5.31256 4.67641C5.46533 4.64997 5.59719 4.55417 5.66954 4.41705L7.55778 0.838169Z" fill="#FFC531" />
                            </svg>
                        </span>
                        <p className={s.reviewsText}>{item.rating} ({item.reviews.length} Reviews)</p>
                    </div>
                    <div className={s.locationInfo}>
                        <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_12164_424)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.817 0.112823C15.8743 0.159759 15.9204 0.218822 15.952 0.285748C15.9837 0.352674 16 0.425792 16 0.499823V14.4998C15.9999 14.6154 15.9598 14.7273 15.8866 14.8167C15.8133 14.906 15.7113 14.9672 15.598 14.9898L10.598 15.9898C10.5333 16.0028 10.4667 16.0028 10.402 15.9898L5.5 15.0098L0.598 15.9898C0.525489 16.0043 0.450665 16.0025 0.378921 15.9846C0.307176 15.9667 0.240296 15.9331 0.183099 15.8863C0.125903 15.8394 0.0798134 15.7804 0.0481518 15.7136C0.0164902 15.6468 4.46527e-05 15.5738 0 15.4998L0 1.49982C6.9782e-05 1.38428 0.0401561 1.27232 0.113443 1.18299C0.186731 1.09366 0.288695 1.03247 0.402 1.00982L5.402 0.00982311C5.46669 -0.00310763 5.53331 -0.00310763 5.598 0.00982311L10.5 0.989823L15.402 0.00982311C15.4745 -0.00476108 15.5493 -0.00308756 15.6211 0.0147231C15.6928 0.0325338 15.7597 0.0660382 15.817 0.112823ZM10 1.90982L6 1.10982V14.0898L10 14.8898V1.90982ZM11 14.8898L15 14.0898V1.10982L11 1.90982V14.8898ZM5 14.0898V1.10982L1 1.90982V14.8898L5 14.0898Z" fill="#101828" />
                            </g>
                            <defs>
                                <clipPath id="clip0_12164_424">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></span>
                        <p>{item.location}</p>
                    </div>
                </div>

                <div className={s.catalogDesc}>
                    <p className={s.descText}>{item.description}</p>
                </div>
                <div className={s.featuresContainer}>
                    <CatalogFeatures ac={item.AC} bathroom={item.bathroom}
                        kitchen={item.kitchen} tv={item.TV} radio={item.radio}
                        refrigerator={item.refrigerator} microwave={item.microwave}
                        gas={item.gas} water={item.water} />
                </div>
                <div className={s.btnContainer}>
                    <Button link={`/catalog/${item.id}`} text={'Show more'} />
                </div>
            </div>
        </div>
    );
}