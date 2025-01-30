import "../../public/css/task.css";

function Button(props) {
  return (
    <button className="interativeButton" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
