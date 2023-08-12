import { SearchInput } from "@/Components";
import { icons } from "feather-icons";

type Channel = { label: string, participants: number } // TODO: Move to types

export function Channels() {
  const date = new Date();

  const activeChannels: Channel[] = [
    {
      label: "kwentuhan",
      participants: 1
    },
    {
      label: "career toks",
      participants: 4
    },
    {
      label: "marites ng pinas",
      participants: 6
    }
  ]
  return (
    <div className="fixed right-0 w-96 h-full max-h-max text-white hidden xl:flex flex-col p-4 pt-20 gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-bold">Active Channels</span>
          <SearchInput placeholder="Search Channel" icon="radio" />
        </div>
        <div className="flex flex-col gap-2">
          {
            activeChannels.map((channel) => <Channel key={`nav_${channel.label}`} {...channel} />)
          }
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 justify-center">
          <button className="w-full rounded bg-slate-800 py-2 px-4 flex flex-row gap-2 justify-center items-center">
            <div dangerouslySetInnerHTML={{ __html: icons.plus.toSvg({ width: 16, height: 16 }) }} />
            Create a room
          </button>
          <button className="w-full rounded bg-slate-800 py-2 px-4 flex flex-row gap-2 justify-center items-center">
            <div dangerouslySetInnerHTML={{ __html: icons.headphones.toSvg({ width: 16, height: 16 }) }} />
            Join Random
          </button>
        </div>
      </div>
    </div>
  )
}

function Channel({ label, participants }: Channel) {
  return (
    <div className="flex flex-row gap-2 items-center justify-between cursor-pointer bg-slate-800 rounded-full p-3 hover:bg-slate-700">
      <div className="flex flex-row gap-2 items-center">
        <div dangerouslySetInnerHTML={{ __html: icons["volume-2"].toSvg() }} />
        <span>{label}</span>
      </div>
      <div className="flex flex-row pl-2 rounded-full hover:bg-slate-800 items-center">
        <span>{participants}</span>
        <div dangerouslySetInnerHTML={{ __html: icons["mic"].toSvg({ width: 16, height: 16 }) }} />
      </div>
    </div>
  )
}