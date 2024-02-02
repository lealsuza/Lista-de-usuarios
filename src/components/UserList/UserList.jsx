import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import styles from './UserList.module.css'



export default function UserList () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const searchUsers = async () => {
      try {
        const response = await fetch("https://fakerapi.it/api/v1/users?_quantity=21");
        const data = await response.json();
        setUsers(data.data);
        console.log("Users data:", data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };
    searchUsers()
  }, []);

  return (
    <section className={styles.users}>
      <div className={styles.subheader}>
        <hr className={styles.hr}/>
      </div>
      <div className={styles.subtitle}>
        <h2>Lista de usuários</h2>
      </div>
      {
        users.length > 0 ? (
          <section className={styles.container}>
            {
              users
              .slice().sort((a, b) => (a.firstname + ' ' + a.lastname)
              .localeCompare(b.firstname + ' ' + b.lastname))
              .map((user) => (
                <Card 
                  key={user.id} 
                  firstname={user.firstname} 
                  lastname={user.lastname}
                  username={user.username} 
                  email={user.email} 
                  website={user.website} 
                />
              ))
            }
          </section>
        ) : (
          <p className={styles.loading}>Carregando lista de usuários...</p>
        )
      }
    </section>
  )
};

