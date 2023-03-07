function Header() {
    return (
        <header className="header vsmall">
            <div className="header_div">
                <div className="cur_track">
                    <img className="small_width" src="https://www.last.fm/static/images/icons/hamburger_mobile@2x.ed0163a23020.png" />
                    <img className="huge_width disc" src="https://www.last.fm/static/images/defaults/player_default_album.430223706b14.png" />
                    <div className="header_track_buttons huge_width">
                        <button className="prev_btn btn"></button>
                        <button className="play_btn btn"></button>
                        <button className="next_btn btn"></button>
                        <button className="like_btn btn"></button>
                    </div>
                </div>
                <a className="logo" href="/"></a>

                <div className="header_nav_div">
                    <a href="search" className="search_btn header_list huge_width"></a>
                    <ul className="header_list huge_width">
                        <li className="header_list_item"><a href="#" className="header_link">Live</a></li>
                        <li className="header_list_item"><a href="#" className="header_link">Music</a></li>
                        <li className="header_list_item"><a href="#" className="header_link">Charts</a></li>
                        <li className="header_list_item"><a href="#" className="header_link">Events</a></li>
                        <li className="header_list_item"><a href="#" className="header_link">Features</a></li>
                    </ul>
                    <a href="#" className="profile_link"></a>
                </div>
            </div>
        </header>
    )
}

export default Header;