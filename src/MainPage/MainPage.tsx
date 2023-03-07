import { useEffect, useState } from "react";
import { getAllHotData } from "../api";
import { fetchedData } from "../types/types";
import HotRightNowSection from "./HotSection/HotRightNowSection";
import PopularTracksSection from "./PopularTracks/PopularTracksSection";

function MainPage() {
    const [data, setData] = useState<fetchedData>();

    useEffect(() => {
        getAllHotData().then((result) => setData(result));
    }, []);

    return (
        <div>
            <main className="content">
                <div className="content_top">
                    <h1 className="content_top_header">Music</h1>
                </div>
                <div className="hot_rn_section">
                    <HotRightNowSection data={data?.hotArtists} />

                    <PopularTracksSection data={data?.hotTracks} />
                </div>
            </main>
        </div>
    );
}

export default MainPage;