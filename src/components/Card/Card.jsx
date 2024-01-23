import styles from './Card.module.css'

export function Card ({ firstname, lastname, username, email, website }) {
  return (
    <section className={styles.card}>
      <div className={styles.userImg}>
      <img className={styles.cardImg} src="userIcon.png" alt={`${firstname} ${lastname}`} />
      </div>
      <section className={styles.userInfo}>
        <h3>{`${firstname} ${lastname}`}</h3>
        <p>Usuário: <b>{username}</b></p>
        <p>E-mail: <b>{email}</b></p>
        <br />
        <a href="#">{website}</a>
      </section>
    </section>
  )
}

