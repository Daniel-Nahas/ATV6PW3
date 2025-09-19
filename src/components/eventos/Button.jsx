// components/eventos/Button.jsx
function Button(props) {
    return (
      <button
        style={{
          background: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          margin: "5px",
          cursor: "pointer",
        }}
        onClick={props.event}
      >
        {props.text}
      </button>
    );
  }
  
  export default Button;
  