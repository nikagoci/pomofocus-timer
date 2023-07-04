interface Props {
  point: number
}

export default function FocusTime({point}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h5 className="opacity-60">#{point}</h5>
      <h4 className="text-lg">Time to focus!</h4>
    </div>
  );
}
