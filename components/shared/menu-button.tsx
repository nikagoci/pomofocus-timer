import { ReactNode } from "react"

interface Props {
    icon: ReactNode;
    content?: string;
}

export default function MenuButton({icon, content}: Props) {
    return (
        <div className="space-x-1 p-2 rounded bg-transparent-black cursor-pointer text-white flex items-center">
            {icon}
            {content && <h5 className='text-sm hidden sm:block'>{content}</h5>}
        </div>
    )
}