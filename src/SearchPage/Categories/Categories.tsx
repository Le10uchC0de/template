import { useState } from "react";
import Category from "./Category";

const categoriesData: string[] = ["Top results", "Artists", "Albums", "Tracks"];


function Categories() {
    return (
        <div className="search_nav">
            <div className="search_nav_list">
                {categoriesData.map((text, index) => {
                    return (
                        <Category
                            key={index}
                            text={text}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Categories;