
import { icons } from "feather-icons"
export function PostForm() {
  return (
    <div className="flex flex-col gap-2 p-4 pb-2 md:max-w-2xl w-full rounded bg-slate-800 divide-y divide-slate-700">
      <textarea className="bg-inherit w-full resize-none focus:border-none focus:outline-none text-white" placeholder="Write a post..." rows={5}>
      </textarea>
      <div className="pt-2 flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <button
            className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
            dangerouslySetInnerHTML={{ __html: icons.paperclip.toSvg({ stroke: "white", width: 20, height: 20 }) }}
          />
          <button
            className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
            dangerouslySetInnerHTML={{ __html: icons.smile.toSvg({ stroke: "white", width: 20, height: 20 }) }}
          />
          <button
            className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
            dangerouslySetInnerHTML={{ __html: icons["map-pin"].toSvg({ stroke: "white", width: 20, height: 20 }) }}
          />
          <button
            className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
            dangerouslySetInnerHTML={{ __html: icons["more-horizontal"].toSvg({ stroke: "white", width: 20, height: 20 }) }}
          />
        </div>
          <button
            className="p-1.5 rounded-full hover:bg-slate-700 w-auto"
            dangerouslySetInnerHTML={{ __html: icons.send.toSvg({ stroke: "white", width: 20, height: 20 }) }}
          />
      </div>
    </div>
  )
}