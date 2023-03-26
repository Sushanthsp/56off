import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartButton } from '../cart';
import LocationPicker from '../LocationPicker';
import SearchBox from '../SearchBox';

const Header = () => {
  return (
    <header className="_nav px-2 sm:px-0 flex justify-center items-center">
    <div className="_header sm:flex h-full items-center">
      <div className="sm:flex md:max-w-[178px] cursor-pointer sm:hover:bg-gray-50 items-center justify-center border-r _border-light">
        <Link to={'/'}>
          <span className="font-black text-[28px] md:text-[38px] text-yellow-400 tracking-tight">
            56off<strong className="text-green-600">.com</strong>
          </span>
        </Link>
      </div>
      
    </div>
  </header>
  
  
  
  );
};

export default Header;
