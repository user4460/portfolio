// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import * as React from "react";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {/* ここでブログのタイトルとidを取得しています*/}
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};