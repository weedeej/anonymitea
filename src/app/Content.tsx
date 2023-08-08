"use client"

import { PostContent, PostForm } from "@/Components";
import { Post } from "@/Types";

const DUMMY_POSTS: Post[] = [
  {
    _id: "12333",
    posterId: "696969",
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lacus vitae ex tincidunt fringilla. Integer hendrerit lacus in lorem hendrerit dictum. Integer semper lectus eu tortor efficitur mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In accumsan gravida maximus. Sed ullamcorper massa lorem, ac auctor nulla mollis id. In sed sodales arcu. Donec eget neque id est condimentum euismod. Phasellus venenatis sem nec ipsum sodales dignissim. Nullam mattis eros et orci volutpat viverra. Ut eu venenatis ipsum, a malesuada dolor. Nullam fermentum, odio vel imperdiet mattis, leo dolor consectetur ante, at accumsan nisi purus sed nisi.",
    imagesPath: [],
    commentsId: [],
    reputation: 569
  },
  {
    _id: "123",
    posterId: "123321",
    title: "Lorem Ipsum 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lacus vitae ex tincidunt fringilla. Integer hendrerit lacus in lorem hendrerit dictum. Integer semper lectus eu tortor efficitur mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In accumsan gravida maximus. Sed ullamcorper massa lorem, ac auctor nulla mollis id. In sed sodales arcu. Donec eget neque id est condimentum euismod. Phasellus venenatis sem nec ipsum sodales dignissim. Nullam mattis eros et orci volutpat viverra. Ut eu venenatis ipsum, a malesuada dolor. Nullam fermentum, odio vel imperdiet mattis, leo dolor consectetur ante, at accumsan nisi purus sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lacus vitae ex tincidunt fringilla. Integer hendrerit lacus in lorem hendrerit dictum. Integer semper lectus eu tortor efficitur mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In accumsan gravida maximus. Sed ullamcorper massa lorem, ac auctor nulla mollis id. In sed sodales arcu. Donec eget neque id est condimentum euismod. Phasellus venenatis sem nec ipsum sodales dignissim. Nullam mattis eros et orci volutpat viverra. Ut eu venenatis ipsum, a malesuada dolor. Nullam fermentum, odio vel imperdiet mattis, leo dolor consectetur ante, at accumsan nisi purus sed nisi",
    imagesPath: [],
    commentsId: [],
    reputation: 0
  }
]
export function Content() {
  return (
    <div className="flex flex-col w-full flex-1 pt-4 gap-4 items-center md:px-0">
      <PostForm/>
      {
        DUMMY_POSTS.map((post) => (
          <PostContent key={post._id} post={post}/>
        ))
      }
    </div>
  )
}