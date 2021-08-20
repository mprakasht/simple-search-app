import InputSearchBox from "./inputSearchBox";

const SearchInput = (props) => {
  return (
    <div className="ui container">
      <h3 className="ui header"> </h3>
      <InputSearchBox {...props} />
    </div>
  );
};

export default SearchInput;
