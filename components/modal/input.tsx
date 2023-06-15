interface Props {
  id: string;
}

export default function Input({ id }: Props)  {
  return (
    <input
      type="number"
      id={id}
      name={id}
      className="bg-[rgb(239,239,239)] w-full p-2 rounded focus:outline-none"
    />
  );
};
