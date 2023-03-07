function Footer() {
    return (
        <footer className="footer footer_main">
            <div className="footer_content">
                <div className="footer_top">
                    <div className="footer_top_col">
                        <h2 className="footer_header">COMPANY</h2>
                        <ul className="footer_links">
                            <li><a href="#" className="footer_link">About Last.fm</a></li>
                            <li><a href="#" className="footer_link">Contact Us</a></li>
                            <li><a href="#" className="footer_link">Jobs</a></li>
                        </ul>
                    </div>
                    <div className="footer_top_col">
                        <h2 className="footer_header">HELP</h2>
                        <ul className="footer_links">
                            <li><a href="#" className="footer_link">Track My Music</a></li>
                            <li><a href="#" className="footer_link">Community Support</a></li>
                            <li><a href="#" className="footer_link">Community Guidelines</a></li>
                            <li><a href="#" className="footer_link">Help</a></li>
                        </ul>
                    </div>
                    <div className="footer_top_col">
                        <h2 className="footer_header">GOODIES</h2>
                        <ul className="footer_links">
                            <li><a href="#" className="footer_link">Download Scrobbler</a></li>
                            <li><a href="#" className="footer_link">Developer API</a></li>
                            <li><a href="#" className="footer_link">Free Music Downloads</a></li>
                            <li><a href="#" className="footer_link">Merchandise</a></li>
                        </ul>
                    </div>
                    <div className="footer_top_col">
                        <h2 className="footer_header">ACCOUNT</h2>
                        <ul className="footer_links">
                            <li><a href="#" className="footer_link">Inbox</a></li>
                            <li><a href="#" className="footer_link">Settings</a></li>
                            <li><a href="#" className="footer_link">Last.fm Pro</a></li>
                            <li><a href="#" className="footer_link">Logout</a></li>
                        </ul>
                    </div>
                    <div className="footer_top_col">
                        <h2 className="footer_header">FOLLOW US</h2>
                        <ul className="footer_links">
                            <li><a href="#" className="footer_link">Facebook</a></li>
                            <li><a href="#" className="footer_link">Twitter</a></li>
                            <li><a href="#" className="footer_link">Instagram</a></li>
                            <li><a href="#" className="footer_link">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div>
                        <div className="languages">
                            <ul className="footer_bottom_list">
                                <li className="footer_li">English</li>
                                <li className="footer_li">Deutsch</li>
                                <li className="footer_li">Español</li>
                                <li className="footer_li">Français</li>
                                <li className="footer_li">Italiano</li>
                                <li className="footer_li">日本語</li>
                                <li className="footer_li">Polski</li>
                                <li className="footer_li">Português</li>
                                <li className="footer_li">Русский</li>
                                <li className="footer_li">Svenska</li>
                                <li className="footer_li">Türkçe</li>
                                <li className="footer_li">简体中文</li>
                            </ul>
                        </div>
                        <div>
                            <p className="timezone">Time zone: Europe/Moscow</p>
                        </div>
                        <ul className="footer_bottom_list">
                            <li className="footer_li copyright"><a className="footer_link_c">CBS Interactive</a></li>
                            <li className="footer_li copyright">© 2022 Last.fm Ltd. All rights reserved</li>
                            <li className="footer_li copyright"><a className="footer_link_c">Terms of User</a></li>
                            <li className="footer_li copyright"><a className="footer_link_c">Privacy Policy</a></li>
                            <li className="footer_li copyright"><a className="footer_link_c">Legal Policies</a></li>
                            <li className="footer_li copyright"><a className="footer_link_c">Cookies Policy</a></li>
                            <li className="footer_li copyright"><a className="footer_link_c">Cookies Information</a></li>
                            <li className="footer_li copyright"><a className="footer_link_c">Jobs at ViacomCBS</a></li>
                            <li className="footer_li copyright"><a className="footer_link_c">Last.fm Music</a></li>
                        </ul>
                    </div>
                    <div className="scrobbler">
                        <p>Audioscrobbler</p>
                        <img src="https://www.last.fm/static/images/footer_logo@2x.49ca51948b0a.png" height="20px" width="37px" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;