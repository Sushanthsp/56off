import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartButton } from '../cart';
import LocationPicker from '../LocationPicker';
import SearchBox from '../SearchBox';
import { useEffect } from 'react';
import db from '../../firebase';
import firebase from 'firebase/compat/app';

const Header = () => {

  useEffect(() => {

    // create 'count' collection if it does not exist
    db.collection('count').get()
      .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
        if (querySnapshot.empty) {
          db.collection('count').add({ count: 0 });
        }
      })
      .catch((error: any) => console.log(error));

    // increase count by one if this is the first time useEffect is triggered
    const countRef = db.collection('count').doc('count');

    db.runTransaction((transaction: firebase.firestore.Transaction) => {
      return transaction.get(countRef)
        .then((doc: firebase.firestore.DocumentSnapshot) => {
          if (!doc.exists) {
            throw new Error("Document does not exist!");
          }

          const countData = doc.data();
          if (countData) {
            const currCount = countData.count;
            const newCount = currCount + 1;
            transaction.update(countRef, { count: newCount });
          }
        });
    })
      .then(() => console.log("Count incremented successfully!"))
      .catch((error:any) => console.log("Transaction failed: ", error));

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
