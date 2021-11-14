import styles from './staticCard.module.css';
const CreateStaticCard = () =>{
    return <>
    <div className={styles.card}>
        <h1>Mobile Operating System</h1>
        <div className={styles.list}>
        <ul>
            <li>Anriod</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>
        </div>
    </div>

    <div className={styles.card}>
        <h1>Mobile Manufacturers</h1>
        <div className={styles.list}>
        <ul>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
        </ul>
        </div>
    </div>
    </>
}

export default CreateStaticCard;