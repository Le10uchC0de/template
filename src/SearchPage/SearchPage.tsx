import { useContext, useEffect, useState } from "react";
import { getAllSearchData } from "../api";
import { SearchContext } from "../context";
import { fetchedSearchData } from "../types/types";
import SearchForm from "./SearchForm";
import Categories from "./Categories/Categories";

import SearchResults from "./SearchResults";

function SearchPage() {
    let { searchRequest, handleSearchRequest } = useContext(SearchContext);
    let [data, setData] = useState<fetchedSearchData>();
    useEffect(() => {
        if (searchRequest != "")
            getAllSearchData(searchRequest).then((result) => setData(result));
    }, [searchRequest]);
    if (searchRequest == "")
        return (
            <main className="search_content">
                <div className="content_search">
                    <SearchForm></SearchForm>
                </div>
            </main>
        )
    return (
        <div>
            <main className="search_content">
                <div className="content_search">
                    <div className="search_content_top">
                        <div className="search_nav_top">
                            <h2 className="content_top_header" id="search">Search results for "{searchRequest}"</h2>
                        </div>
                        <Categories />
                    </div>
                    <SearchForm></SearchForm>
                    <div className="search_results">
                        <SearchResults
                            data={data}
                        />
                    </div>
                </div>
            </main>
        </div>
    );        
}

export default SearchPage;