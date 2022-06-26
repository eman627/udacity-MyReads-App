import React from "react";

 

const bookcomp=({book_data,update_shelf_book})=>{ 
     const changing_shelf_book=(event)=>{
       update_shelf_book(book_data,event.target.value) 
     } 
     let  sorceImage;
     if(book_data.imageLinks)  sorceImage=book_data.imageLinks.smallThumbnail; 
     else sorceImage="https://ibb.co/NLyMyBf"
    return (
        <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage : `url(${sorceImage})`
            }} 
          ></div>
          <div className="book-shelf-changer">
            <select  onChange={changing_shelf_book} value={book_data.shelf?book_data.shelf:"none"}>
              <option  disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book_data.title?book_data.title:"not available title"}</div>
        <div className="book-authors">{book_data.authors?book_data.title:"not available author"}</div>
      </div>
    )

} 
 export default bookcomp;