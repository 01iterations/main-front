import "./teaser.css";
function Teaser() {
    return (
        <div className="teaser">
            <div className="teaser-content">
                <h1>Coming Soon...</h1>
                <p>Check our instagram for more updates</p>
                <section id="instagram-section">
                    <i className="fab fa-instagram"></i>
                    <a href="https://www.instagram.com/01iters/">
                        01iterations
                    </a>
                </section>
            </div>
        </div>
    );
}
export default Teaser;
