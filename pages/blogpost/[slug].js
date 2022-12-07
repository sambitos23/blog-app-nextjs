import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// step 1: find the file corresponding to the slug
// step 2: populate them inside the page
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          deleniti expedita, quaerat velit, reprehenderit consequatur labore,
          ullam aliquam hic voluptates quas numquam. Facere. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Libero consequuntur recusandae
          ipsam veritatis at eius voluptatibus esse reprehenderit delectus iusto
          laboriosam, error voluptatem mollitia magni facere officia odio?
          Deleniti alias minima quod, architecto delectus corrupti perferendis
          dolorem voluptatibus tempora aliquid aspernatur ea facilis eaque quo!
        </div>
      </main>
    </div>
  );
};

export default slug;
