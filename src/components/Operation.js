import "./Operation.css";

const Operation = ({ value, onClick }) => {
  return (
    <div
      className="operation-btn"
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        marginBottom: 3,
        textAlign: "center"
      }}
      onClick={() => onClick(value)} 
    >
      {value}
    </div>
  );
};

export default Operation;
