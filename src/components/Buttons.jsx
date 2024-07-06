export default function Buttons(props) {
  return (
    <button>
      <div>{props.icon}</div>
      <div>{props.name}</div>
    </button>
  );
}
