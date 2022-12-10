// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";

// step 1: find the file corresponding to the slug
// step 2: populate them inside the page
const slug = (props) => {
  const blog = props.myBlog;
  // const [blog, setBlog] = useState();

  // const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return;

  //   const { slug } = router.query;
  //   // console.log("useEffect is running");
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => a.json())
  //     .then((parsed) => {
  //       // console.log(parsed);
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query);
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog }, // will be passed to the page component as props
  };
}

export default slug;
