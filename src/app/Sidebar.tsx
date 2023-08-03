import { icons } from "feather-icons";

const userId = "321355"

export function Sidebar() {

  const navlinks: { label: string, icon: keyof typeof icons }[] = [
    {
      label: "Messages",
      icon: "message-square"
    },
    {
      label: "Channels",
      icon: "radio"
    },
    {
      label: "My Content",
      icon: "layers"
    }
  ]
  return (
    <div className="fixed left bg-slate-950 w-80 h-full max-h-max text-white hidden md:flex flex-col p-4 pt-20 gap-4 justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-2">
          <div id={`user_${userId}`} className="flex flex-row p-2 flex-1 items-center bg-slate-800 rounded-full gap-2">
            <div className="rounded-full p-1 bg-slate-950">
              <div dangerouslySetInnerHTML={{ __html: icons.user.toSvg() }} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Anonymous User</span>
              <span className="font-bold text-xs">#{userId}</span>
            </div>
            <div className={`divide`} />
          </div>
        </div>
        {
          navlinks.map((link) => <NavLink key={`nav_${link.label}`} {...link} />)
        }
        <div className="flex flex-col gap-2">
          <small>Content Summary:</small>
          <div className="flex flex-col p-4 bg-slate-800 rounded">
            <small className="text-slate-400">Session ID: <b>1208y31028d</b></small>
            <small className="text-slate-400">Content Size: 12MB</small>
            <small className="text-slate-400">Posts: 412</small>
            <small className="text-slate-400">Reputation: 505.1k</small>
            <small className="text-slate-400">Messages: 1,341</small>
            <small className="text-slate-400">Channels: 4</small>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 justify-center">
          <button className="w-full rounded bg-green-700 py-2 px-4 flex flex-row gap-2 justify-center items-center">
            <div dangerouslySetInnerHTML={{ __html: icons.download.toSvg({ width: 16, height: 16 }) }} />
            Save Data
          </button>
          <button className="w-full rounded bg-indigo-800 py-2 px-4 flex flex-row gap-2 justify-center items-center">
            <div dangerouslySetInnerHTML={{ __html: icons.upload.toSvg({ width: 16, height: 16 }) }} />
            Load Data
          </button>
        </div>
        <button className="rounded bg-red-700 py-2 px-4 flex flex-row gap-2 justify-center items-center">
          <div dangerouslySetInnerHTML={{ __html: icons["trash-2"].toSvg({ width: 16, height: 16 }) }} />
          Delete Data
        </button>
      </div>
    </div>
  )
}

function NavLink({ label, icon }: { label: string, icon: keyof typeof icons }) {
  return (
    <div className="flex flex-row gap-2 items-center justify-between cursor-pointer">
      <div className="flex flex-row gap-2 items-center">
        <div dangerouslySetInnerHTML={{ __html: icons[icon].toSvg() }} />
        <span>{label}</span>
      </div>
      <div className="rounded-full hover:bg-slate-700">
        <div dangerouslySetInnerHTML={{ __html: icons["chevron-right"].toSvg() }} />
      </div>
    </div>
  )
}