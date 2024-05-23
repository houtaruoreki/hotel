// src/MainContent.js
import React from 'react';
const Main = () => {
  return (
    <div className="flex flex-col">
      <div className="search-bar">
        <input type="text" placeholder="ძიება დასახელება ან გვარი" />
        <button>ძიების განახლება</button>
      </div>
      <table className=''>
        <thead>
          <tr>
            <th>სახელი და გვარი</th>
            <th>ელ. ფოსტა</th>
            <th>ტელეფონი</th>
            <th>სტატუსი</th>
            <th>დარეგისტრირების თარიღი</th>
            <th>განახლების თარიღი</th>
            <th>სტატუსის კომენტარი</th>
          </tr>
        </thead>
        <tbody>
          {/* Repeat this row as needed */}
          <tr>
            <td>ანაო დიეგო</td>
            <td>anadio@gmail.com</td>
            <td>+995 599 333 333</td>
            <td>3</td>
            <td>23/04/24</td>
            <td>24/05/24</td>
            <td>ნაკლებად მოწონ...</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button>წინა</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>შემდეგ</button>
      </div>
    </div>
  );
};

export default Main;
