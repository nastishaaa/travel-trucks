import { useSelector } from "react-redux";
import { selectItem } from "../../../redux/selectors";

export default function Description() {
    const item = useSelector(selectItem);
    return (
        <p style={{
            fontWeight: '400', fontSize: '16px', 
            lineHeight: '1.5', color: '#475467', margin: '0'
            , marginBottom: '60px'
        }}>{item.description }</p>
    );
}
