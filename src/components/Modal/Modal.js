import '../../assets/styles/Modal.css';
import FolderAddModal from './FolderAddModal';
import FolderNamingModal from './FolderNamingModal';
import FolderDeleteModal from './FolderDeleteModal';
import LinkDeleteModal from './LinkDeleteModal';
import FolderShareModal from './FolderShareModal';
import LinkAddModal from './LinkAddModal';

const Modal = ({ action, closeModal, data = {} }) => {
  const renderModal = () => {
    switch (action) {
      case 'add-link':
        return <LinkAddModal data={data} closeModal={closeModal} />;

      case 'add-folder':
        return <FolderAddModal closeModal={closeModal} />;

      case 'rename':
        return <FolderNamingModal closeModal={closeModal} />;

      case 'delete-folder':
        return <FolderDeleteModal data={data} closeModal={closeModal} />;

      case 'delete-link':
        return <LinkDeleteModal data={data} closeModal={closeModal} />;

      case 'share':
        return <FolderShareModal data={data} closeModal={closeModal} />;

      default:
        return;
    }
  };

  return (
    <div className="modal">
      <div className="modal-box">{renderModal()}</div>
    </div>
  );
};

export default Modal;