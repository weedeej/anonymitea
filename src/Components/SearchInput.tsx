import { icons } from "feather-icons";

type SearchInputProps = {
  icon: keyof typeof icons;
  placeholder: string;
}
export function SearchInput(props: SearchInputProps) {
  const {icon, placeholder} = props;

  return (
    <div className="flex flex-row gap-2 justify-start items-center border rounded-full h-12 md:w-auto w-full px-4">
      <div dangerouslySetInnerHTML={{ __html: icons[icon].toSvg({ stroke: "white", width: 20, height: 20 }) }} />
      <input placeholder={placeholder} className="flex flex-none bg-inherit text-white focus:border-none focus:outline-none" />
    </div>
  )
}