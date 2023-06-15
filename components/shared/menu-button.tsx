import { ReactNode } from "react"

interface Props {
    icon: ReactNode;
    content?: string;
    handleClick?: () => void;
}

export default function MenuButton({icon, content, handleClick}: Props) {
    return (
        <button onClick={handleClick} className="flex items-center p-2 space-x-1 text-white rounded cursor-pointer opacity-90 hover:opacity-100 bg-transparent-black">
            {icon}
            {content && <h5 className='hidden text-sm sm:block'>{content}</h5>}
        </button>
    )
}