const InputSearchBox = ({ onChangeHandler }) => {
  return (
    <div className="ui massive icon input">
      <input type="text" placeholder="Search..." onChange={onChangeHandler} />
      <i className="search icon"></i>
    </div>
  );
};

export default InputSearchBox;
