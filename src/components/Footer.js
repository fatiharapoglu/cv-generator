import github from "../assets/GitHub-Mark-Light-120px-plus.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="about">
                <span>
                    <a href="https://www.theodinproject.com/" id="odin">
                        The Odin Project{" "}
                    </a>
                    | fatiharapoglu
                </span>
                <a href="https://github.com/fatiharapoglu">
                    <img className="github-icon" src={github} alt="github-logo" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
