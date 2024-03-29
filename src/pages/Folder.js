import { getUserFolderData } from '../api';
import SearchBar from '../common/SearchBar';
import useAsync from '../components/hooks/useAsync';
import AddLinkBar from '../Folder/AddLinkBar';
import FolderList from '../Folder/FolderList';
import Nav from '../common/Navbar';

const FolderPage = () => {
  const { result } = useAsync(getUserFolderData);
  const { data } = result || {};

  return (
    <>
      <Nav style={{ position: 'relative' }} />
      <AddLinkBar folderData={data} />
      <main>
        <SearchBar />
        {data ? <FolderList folderData={data} /> : null}
      </main>
    </>
  );
};
export default FolderPage;
