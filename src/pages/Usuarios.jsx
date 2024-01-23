import Container from "../components/Container/container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UsersList from "../components/UserList/Userlist";

export default function Usuarios () {
  return (
    <>
    <Header />
    <Container>
      <UsersList />
    </Container>
    <Footer />
  </>
  )
}