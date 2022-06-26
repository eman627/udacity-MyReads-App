import React from "react";
import { Link } from "react-router-dom";
import Bookcomp from "./book_comp"; 

 
const bookSearch=({searched_books_result,serachKeyUpdating,update_shelf_book,searchKey})=>{  

 
    return (  

        <div className="search-books">
        <div className="search-books-bar"> 
           <Link className="close-search" to={"/"}   > 
             
           </Link> 
          <div className="search-books-input-wrapper"> 
          
            <input
              type="text"
              onChange={serachKeyUpdating}
            />
          </div>
        </div>  
        { searchKey===""?( 
          <div className="startsearch">
          <h1 >please enter your required book </h1> 
          </div>
        ):(

       <div className="search-books-results">
          <ol className="books-grid">  
        { searched_books_result.length > 0 ? (
        searched_books_result.map((book)=>( 
         
         <Bookcomp  key={book.id}  book_data={book}   update_shelf_book={update_shelf_book} />
         ))  ):(
         <div className="notfound">
         <h1>Not found Book </h1>
         </div>
        )
        }
        </ol>
         </div>
        ) 

        }
       
      </div>
       )
          } 
       
         
export default bookSearch;
