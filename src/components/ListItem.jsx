import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ item, onMarkClick }) => {
  const { text, marked } = item;

  return (
    <div className='text-semibold text-gray-300 ml-2 mr-2'>
      <div className='mt-4 flex items-center'>
        {marked ? (
          <FontAwesomeIcon
            className='cursor-pointer hover:text-white mr-2'
            icon={solid}
            size='lg'
            onClick={() => onMarkClick(item)}
          />
        ) : (
          <FontAwesomeIcon
            className='cursor-pointer hover:text-white mr-2'
            icon={regular}
            size='lg'
            onClick={() => onMarkClick(item)}
          />
        )}
        {text}
      </div>
    </div>
  );
};

export default ListItem;
