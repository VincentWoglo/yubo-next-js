import "../../styles/global/search.css"

export default function SearchFiled() {
    return (
        <div className="searchWrapper">
            <form action="">
                <input type="text" className="navSearchInput" placeholder="Search for headlines" />
                <input type="submit" className="navSearchBtn" value="search" />
            </form>
        </div>
    )
  }
  