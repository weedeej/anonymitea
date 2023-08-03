import { Post } from "@/Types"
import { icons } from "feather-icons"

type PostContentProps = {
  post: Post
}

const DUMMY_POSTER = {
  "123321": {
    _id: "123321",
    postCount: 1,
  }
}
export function PostContent(props: PostContentProps) {
  const { post } = props;
  const { _id, posterId, title, description, imagesPath, commentsId, reputation } = post;

  return (
    <div id={_id} className="flex flex-row gap-2 rounded p-4 md:max-w-2xl overflow-hidden relative hover:bg-slate-800 cursor-pointer">
      <button className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-700">
        <div dangerouslySetInnerHTML={{ __html: icons.x.toSvg({ stroke: "white", width: 16, height: 16 }) }} />
      </button>
      <div id={`poster_${posterId}_${_id}`} className="flex flex-col h-auto bg-slate-800 rounded-full">
        <div className="rounded-full bg-white p-1">
          <div dangerouslySetInnerHTML={{ __html: icons.user.toSvg() }} />
        </div>
        <div className={`divide`} />
      </div>
      <div className="flex flex-col text-white gap-2">
        <div>
          <h1 className="font-bold">{title}</h1>
          <div className="flex flex-col">
            <small className="text-gray-500">Anon#{posterId}, 8/3/2023 - 11:59AM</small>
            <small className="italic text-gray-500">{reputation} Post Reputation</small>
          </div>
        </div>
        <div className="flex flex-col text-white gap-2 divide-y divide-slate-700">
          <p className="text-white break-words">{description}</p>
          <div className="flex flex-row gap-2 justify-between pt-2 divide-x divide-slate-700">
            <div className="flex flex-row justify-center w-full items-center">
              <button
                className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
                dangerouslySetInnerHTML={{ __html: icons.plus.toSvg({ stroke: "white", width: 20, height: 20 }) }}
              />
            </div>
            <div className="flex flex-row justify-center w-full">
              <button
                className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
                dangerouslySetInnerHTML={{ __html: icons["message-circle"].toSvg({ stroke: "white", width: 20, height: 20 }) }}
              />
            </div>
            <div className="flex flex-row justify-center w-full">
              <button
                className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
                dangerouslySetInnerHTML={{ __html: icons["share-2"].toSvg({ stroke: "white", width: 20, height: 20 }) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}