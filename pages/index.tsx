import Navbar from "../components/Navbar/Navbar";
import Post from "../components/Post/Post";
import Base from "../layout/Base";
import styles from "../styles/Home.module.sass";

const Home = () => {
  return (
    <Base>
      <Navbar position="absolute" />
      <main className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </Base>
  );
};

export default Home;
