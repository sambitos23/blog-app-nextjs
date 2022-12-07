import Link from "next/link";
import styles from "../styles/Blog.module.css";

// step 1: collect all the files from blogdata directory
// step 2: iterate through them and display them
const Blog = () => {
  return (
    <div className={styles.container}>
      <div className="blogs">
        <main className={styles.main}>
          <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-js"}>
              <h3>How to learn JS in 2022?</h3>
            </Link>
            <p>
              Js is the language for hdghft ghfgty gfbghuk jgghcftre uiyjgmhs
              erfhg ytrghhmgyu...............
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
