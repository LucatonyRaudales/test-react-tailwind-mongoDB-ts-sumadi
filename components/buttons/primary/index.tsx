export default function PrimaryButton(props: PrimaryBtnInterface) {
  return (
    <button className="bg-gray-500 hover:bg-gray-400 text-white font-italic px-4 rounded items-center">
      <span className="px-5">{props.name}</span>
    </button>
  );
}

export interface PrimaryBtnInterface {
  name: string;
  onClick?: void;
}