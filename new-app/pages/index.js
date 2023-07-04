

import Link from "next/link";
import styles from "@/styles/Home.module.css"
import Head from "next/head";
export default function Home() {
    return (
      <>

      <Head>
        <title> Friends List | Home</title>
        <meta name ="keywords" content ="Home"></meta>
      </Head>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/friends/" className={styles.btn}>
         See Friends Listing
        </Link>
      </>
    )
  }