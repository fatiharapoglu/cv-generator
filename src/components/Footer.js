import github from "../assets/GitHub-Mark-Light-120px-plus.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="about">
                <span>
                    <a href="https://www.theodinproject.com/" id="odin" target="_blank" rel="noreferrer">
                        The Odin Project{" "}
                    </a>
                    |{" "}
                    <a href="https://fatiharapoglu.dev" target="_blank" rel="noreferrer">
                        Fatih Arapoğlu
                    </a>
                </span>
                <a href="https://github.com/fatiharapoglu/cv-generator" target="_blank" rel="noreferrer">
                    <img className="github-icon" src={github} alt="github-logo" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
