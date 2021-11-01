import React from "react";

const Books = () => {
  return (
    <div>
       <ul className='Book-list'>
           <li>
               <h2>Book 1</h2>
               <button>Remove</button>
           </li>
           <li>
               <h2>Book 2</h2>
               <button>Remove</button>
           </li>
       </ul>
      <form>
        <label>
          ADD NEW BOOK:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Books;
