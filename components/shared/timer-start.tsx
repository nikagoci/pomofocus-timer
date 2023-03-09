import { focusEnum } from "@/pages"

interface Props {
    focus: focusEnum
}

export default function PauseButton({focus}: Props){
    return (
        <button className={`px-12 py-3 text-2xl font-semibold bg-white rounded ${focus === focusEnum.pomodoro ? 'text-primary': ''} ${focus === focusEnum.short ? 'text-secondary' : ''} ${focus === focusEnum.long ? 'text-tertiary' : ''}`}>
            START
        </button>
    )
}