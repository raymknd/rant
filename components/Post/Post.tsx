import { Favorite, HeartBroken, Send } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import styles from "./Post.module.sass";

const Post = () => {
  const [liked, setLiked] = useState(false);
  return (
    <Card component="li" className={styles.root} elevation={3}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia debitis,
        quo temporibus, reprehenderit molestias impedit in beatae voluptas illum
        magni sunt fugiat dolor velit. Culpa quaerat placeat alias excepturi
        repellendus.
      </p>
      <section className={styles.bottom}>
        <section className={styles.profile}>
          <div className={styles.image}>
            <Image
              src="https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
              alt="Foto de perfil"
              fill
            />
          </div>
          <div className={styles.data}>
            <div className={styles.username}>@raymknd</div>
            <small>13/12/2022</small>
          </div>
        </section>
        <section className={styles.actions}>
          <IconButton>
            <Send />
          </IconButton>
          <IconButton
            onClick={() => setLiked(!liked)}
            color={liked ? "error" : undefined}
          >
            <Favorite />
          </IconButton>
        </section>
      </section>
    </Card>
  );
};

export default Post;
