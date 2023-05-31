import { data } from "../../../data"
import styles from './style.module.css'
export default function Home() {

    return <>
        <img src="src/imgs/home_img.jpg" className={styles.img} />
        {/* <div className={styles.img}> </div> */}
        <ul>  {data.map((e) => <li> {e.title}<li /></li>)} </ul>
    </>
}