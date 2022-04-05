import { Wrapper } from "../styles/Styles";
import Login from "../components/Login";
import Photo from "../components/Photo";
import Fotter from "../components/Fotter";

function Home() {
  return (
    <>
      <Wrapper>
        <Login />
        <Photo />
      </Wrapper>
      <Fotter />
    </>
  );
}

export default Home;
