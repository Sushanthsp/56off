import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartButton } from '../cart';
import LocationPicker from '../LocationPicker';
import SearchBox from '../SearchBox';
import { useEffect } from 'react';
import 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase/app';
import firebaseApp from '../../firebase';


const Header = () => {

  useEffect(() => {
    const db = firebase.firestore(firebaseApp);
    
    // create 'count' collection if it does not exist
    db.collection('count').get()
      .then((querySnapshot:any) => {
        if (querySnapshot.empty) {
          db.collection('count').add({ count: 0 });
        }
      })
      .catch((error:any) => console.log(error));
    
    // increase count by one if this is the first time useEffect is triggered
    db.collection('count').doc('count').get()
      .then((doc:any) => {
        if (doc.exists) {
          const countData = doc.data();
          if (countData) {
            const currCount = countData.count;
            if (currCount === 0) {
              db.collection('count').doc('count').update({ count: 1 });
            }
          }
        }
      })
      .catch((error:any) => console.log(error));
  }, []);
  

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
