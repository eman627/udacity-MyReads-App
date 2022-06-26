import "./App.css";
import React  from "react"; 
import {
  BrowserRouter  ,
  Route,
  Routes
} from "react-router-dom" ; 
import BookSearch  from "./components/bookSearch_comp"; 
import HomeComp from "./components/home_page"; 
import * as BooksAPI from "./BooksAPI"; 


function App() { 

  const [requiredBooks, set_required_books] = React.useState([]);  
   const [searchKey, setserachKey] = React.useState(""); 
  const [searched_books_result,setsearched_books]=React.useState([]); 

  const getAllBooks= async ()=>{
   await BooksAPI.getAll().then((response)=>set_required_books(response)); 
  } ;
  React.useEffect(() => {
    getAllBooks();
  },[searchKey]);  
  const update_shelf_book=async(book,shelf)=>{ 
    await BooksAPI.update(book,shelf);
    getAllBooks(); 
    Search_result_get(searchKey);
  }; 
 
    const Search_result_get= async (searchKey)=>{
    await BooksAPI.search(searchKey).then((response)=>{ 
    if (response && response.length>0) {
     setsearched_books(response.map((search_book)=>{
      requiredBooks.forEach((shelf_book)=>{
        if (search_book.id===shelf_book.id){
          search_book.shelf=shelf_book.shelf
        }
      }) 
      return search_book
     }));
    }
    else{
      setsearched_books([])
    }
    });};
    const serachKeyUpdating=(event)=>{ 
       setserachKey(event.target.value)
       if(event.target.value)   Search_result_get(event.target.value) 
      
    }
 
  
  return ( 
   <BrowserRouter> 
        <Routes> 
       
              <Route  path={"/"} 
              element={ <HomeComp  
                all_books ={requiredBooks} 
                update_shelf_book = {update_shelf_book}
              /> } 

              /> 
              <Route  path={"/search" }
              element={ <BookSearch
                searched_books_result={searched_books_result}
                serachKeyUpdating={serachKeyUpdating }
                update_shelf_book={update_shelf_book} 
                searchKey={searchKey}
                /> }      
              /> 
        </Routes>
     
    </BrowserRouter>

  )
              }
export default App;
