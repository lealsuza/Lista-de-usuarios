import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserList from "../components/UserList/Userlist";

export default function Usuarios () {
  return (
    <>
    <Header />
    <Container>
      <UserList />
    </Container>
    <Footer />
  </>
  )
}