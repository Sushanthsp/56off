import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartButton } from '../cart';
import LocationPicker from '../LocationPicker';
import SearchBox from '../SearchBox';
import { useEffect } from 'react';
import db from '../../firebase';

const Header = () => {

  useEffect(() => {

    const countRef = db.collection('count').doc('count');

    db.runTransaction((transaction: any) => {
      return transaction.get(countRef)
        .then((doc: any) => {
          if (!doc.exists) {
            transaction.set(countRef, { count: 1 });
            console.log("Count initialized to 1");
            return;
          }

          const countData = doc.data();
          if (countData) {
            const currCount = countData.count;
            const newCount = currCount + 1;
            transaction.update(countRef, { count: newCount });
            console.log("Count incremented to ", newCount);
          }
        });
    })
      .catch((error: any) => {
        console.log("Transaction failed: ", error);
      });



  }, []);

  useEffect(() => {
    const functionIpAddress = async () => {
      const ipAddressCollectionRef = db.collection('ipAddress');

      // get user's IP address
      const ipAddress = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip)
        .catch(error => console.log(error));

      // check if the IP address already exists in the collection
      const ipAddressDocRef = ipAddressCollectionRef.doc(ipAddress);
      const ipAddressDoc = await ipAddressDocRef.get();

      if (!ipAddressDoc.exists) {
        // create a new document with the IP address if it doesn't exist
        await ipAddressDocRef.set({ count: 1 });
        console.log("New IP address added to collection with count 1.");
      } else {
        // increment the count if the IP address already exists
        const count = ipAddressDoc.data()?.count || 0;
        await ipAddressDocRef.update({ count: count + 1 });
        console.log("IP address count incremented to ", count + 1);
      }
    }
    functionIpAddress()

  }, [])



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
