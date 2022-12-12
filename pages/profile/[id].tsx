import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Base from "../../layout/Base";
import styles from "../../styles/Profile.module.sass";

import Banner from "../../assets/global/backgrounds/wallpaperflare.com_wallpaper.jpg";

const Profile = () => {
  return (
    <Base>
      {/* <Navbar position="absolute" /> */}
      <main className={styles.root}>
        <section className={styles.profileData}>
          <Image className={styles.banner} src={Banner} alt="" fill />
          <div className={styles.content}></div>
        </section>
      </main>
    </Base>
  );
};

export default Profile;
