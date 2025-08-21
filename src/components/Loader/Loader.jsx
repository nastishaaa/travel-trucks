import s from './Loader.module.css'

export default function Loader() {
    return (
        <div className={s.loaderContainer}>
            <div className={s.spinner}></div>
            <p className={s.loadingText}>Loading...</p>
        </div>
    );
}
