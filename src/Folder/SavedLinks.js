import { useEffect, useState } from "react";
import { getUserFolderData } from "../api";
import FolderCardList from "./FolderCardList";

function SavedLinks() {
  const [link, setLink] = useState([]);

  const handleLoadUserFolderData = async () => {
    let result;
    try {
      result = await getUserFolderData();
    } catch (error) {
      console.error();
      return;
    }

    const { folder } = result;
    setLink(folder.link);
  };

  useEffect(() => {
    handleLoadUserFolderData();
  })

  return(
    <>
      {link.length ? (
        <FolderCardList />
      ) : (
          // <h1 id="no-links">저장된 링크가 없습니다.</h1>
          <FolderCardList />
      )}
    </>
  );
}

export default SavedLinks;