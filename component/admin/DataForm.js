import AddUser from './UserForm'
import AddGenre from './GenreForm'
import AddBook from './BookForm'

export default function DataForm({dbName}){
    
    if (!dbName){ 
        return "..."
    }
    if (dbName == "book"){
        return <AddBook />
    }
    if (dbName == "genre"){
        return <AddGenre />
    }
    if (dbName == "user"){
        return <AddUser />
    }
    return(
        <h1> {dbName} </h1>
    )
}