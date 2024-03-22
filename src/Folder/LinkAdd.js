import { useState } from 'react';
import '../assets/styles/LinkAdd.css';
import Link from '../assets/images/link.svg';

function LinkAdd({ folderData }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return(
    <>
      <div id="link-div">
        <form id="add-link" onSubmit={handleSubmit}>
          <div id="insert-link">
            <img src={Link} alt='링크' id='linkImg' />
            <input
              id="input-link"
              type="text"
              name="inputLink"
              placeholder="링크를 추가해 보세요."
              value={value}
              onChange={handleChange}
            />
          </div>
          <button type='button' id='add-button' onClick={() => setIsModalOpen(true)}>추가하기</button>
        </form>
      </div>
      {isModalOpen && (
        <ModalPortal>
          <Modal
            action="add-link"
            data={{ link: value, folderList: folderData }}
            closeModal={() => setIsModalOpen(false)}
          />
        </ModalPortal>
      )}
    </>

  );
} 

export default LinkAdd;