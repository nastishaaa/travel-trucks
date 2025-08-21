import { useSelector } from 'react-redux'
import s from './PhotoCatalog.module.css'
import { selectItem } from '../../../redux/selectors'

export default function PhotoCatalog() {
  const item = useSelector(selectItem);
  const imgArr = item.gallery || [];
  return (
    <ul className={s.photoList}>
      {imgArr.map(i => (
        <li key={i.thumb}>
          <img src={i.original} alt="Camp photo" className={s.photoItem}
          width="292" height="312" />
        </li>
      ))}
    </ul>
  )
}
