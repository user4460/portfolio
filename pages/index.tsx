// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import * as React from "react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";

export default function Home({ blog }) {
  return (
    <div>
      <UnorderedList>
        {/* ここでブログのタイトルとidを取得しています blog*/}
        {blog.map((blog) => (
          <ListItem key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
//getStaticPropsは、ビルド時に実行される関数です
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};