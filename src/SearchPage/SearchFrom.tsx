import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context";

function SearchField() {
    const { searchRequest, handleSearchRequest } = useContext(SearchContext);
    const searchField = useRef<HTMLInputElement>(null);

    useEffect(() => {
        searchField.current!.value = searchRequest;
    }, [searchRequest]);

    const handleRequest = () => {
        handleSearchRequest(searchField.current!.value);
    };

    const handleKeyPress = (key: React.KeyboardEvent) => {
        if (key.code == "Enter") {
            handleSearchRequest(searchField.current!.value);
        }
    };

    const onClear = () => {
        searchField.current!.value = "";
    };
    return (
        <div className="search_form">
            <input
                type="text"
                className="search_input"
                ref={searchField}
                onKeyPress={handleKeyPress}
            />
            <button type="button" className="clear_btn btn16" onClick={onClear}></button>
            <button
                type="button"
                className="form_search_btn btn16"
                onClick={handleRequest}
            ></button>
        </div>
    );
}

export default SearchField;