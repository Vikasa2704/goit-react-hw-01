import styles from './FriendListItem.module.css'

const FriendListItem =({avatar, name, isOnline}) => {
    return (
        <div className={styles.card}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.cardTitle}>{name}</p>
        {isOnline ?
       (<p className={styles.online}>online</p>) :
       (<p className={styles.ofline}>ofline</p>) 
    }
      </div>
    
    )
}

export default FriendListItem;