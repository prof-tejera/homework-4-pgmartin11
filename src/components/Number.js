const Number = ({ value, onClick }) => {
  return (
    <div
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

export default Number;
