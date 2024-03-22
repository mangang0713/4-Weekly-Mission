import { useState, useEffect } from 'react';
import Nav from "../components/Navbar";
import { getFirstUserInfo, getUserFolderData } from "../api";
import LinkAdd from '../Folder/LinkAdd';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import SavedLinks from '../Folder/SavedLinks';


function Folder(){

  const [email, setEmail] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [link, setLink] = useState([]);

  const handleLoadUserInfo = async () => {
    let result;
    try {
      result = await getFirstUserInfo();
    } catch (error) {
      console.error();
      return;
    }

    setEmail(result.email);
    setImgSrc(result.profileImageSource);
  };

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
    handleLoadUserInfo();
    handleLoadUserFolderData();
  })

  return (
    <div className='body'>
      <Nav email={email} imgSrc={imgSrc} />
      <LinkAdd />
      <SearchBar />
      <SavedLinks link={link} />
      <Footer />
    </div>
  );
}

export default Folder;