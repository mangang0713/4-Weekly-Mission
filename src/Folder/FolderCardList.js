

const FolderItem = ({ data, onFolderClick, isSelected }) => {
  const { name, id } = data;
  const handleFolderClick = () => {
    onFolderClick({ id, name });
  };
  return (
    <div
      className={`folder-button ${isSelected ? "selected" : ""}`}
      onClick={handleFolderClick}
    >
      {name}
    </div>
  );
};

function FolderCardList({ data, onFolderClick, isSelected }) {
  const { name, id } = data;
  const handleFolderClick = () => {
    onFolderClick({ id, name });
  };
  return (
    <div
      className={`folder-button ${isSelected ? "selected" : ""}`}
      onClick={handleFolderClick}
    >
      {name}
    </div>
  );
};

const FolderList = ({ folderData }) => {
  const [selectedFolder, setSelectedFolder] = useState({ id: "", name: "전체" });

  const selectFolder = ({ id, name }) => {
    setSelectedFolder({ id, name });
  };


  return(
    <div className="main">
      <div className="select">
        <div className="sorting">
          <div
            className={`folder-button ${selectedFolder.name === "전체" ? "selected" : ""}`}
            onClick={() => selectFolder({ id: "", name: "전체" })}
          >
            전체
          </div>
          {folderData.map((item) => (
              <FolderItem
                key={item.id}
                data={item}
                onFolderClick={selectFolder}
                isSelected={selectedFolder && selectedFolder.id === item.id}
              />
            ))}          
        </div>
        <div className="add-folder">
          폴더 추가
          <img className="add-icon" src={addIcon} alt="add-icon"></img>
        </div>
      </div>
    </div>
  );
}

export default FolderCardList;