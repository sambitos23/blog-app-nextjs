import Link from "next/link";
// import { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

// step 1: collect all the files from blogdata directory
// step 2: iterate through them and display them
const Blog = (props) => {
  // console.log(props);
  const blogs = props.allBlogs;
  // const [blogs, setBlogs] = useState([]);
  // useEffect(() => {
  //   // console.log("useEffect is running");
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => a.json())
  //     .then((parsed) => {
  //       // console.log(parsed);
  //       setBlogs(parsed);
  //     });
  // }, []);
  return (
    <div className={styles.container}>
      <div className="blogs">
        <main className={styles.main}>
          {blogs.map((blogitem, key) => (
            <div key={key} className={styles.blogItem}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p>{blogitem.content.substr(0, 140)}....</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
export default Blog;
