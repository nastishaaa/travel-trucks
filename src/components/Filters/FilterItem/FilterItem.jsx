import s from './FilterItem.module.css';

export default function FilterItem({item}) {
    return (
        <div className={s.container}>
            <div>{item.icon}</div>
            <p className={ s.text }>{item.title }</p>
        </div>
    );
}
