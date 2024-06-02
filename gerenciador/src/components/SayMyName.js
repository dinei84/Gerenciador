import styles from './SayMyName.modules.css'

function SayMyName (props){
    return(
        <div className={styles.SayMyNameContainer}>
        <p className={styles.fraseContent}>Fala ai {props.name}, beleza?</p>
        </div>
    )
}

export default SayMyName