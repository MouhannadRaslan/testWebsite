import FooterStyle from './Footer.module.css';

function Footer(){
    return(
        <>
            <footer>
                <div className={FooterStyle.footerContent}>
                    <h1>Headline</h1>
                    <p>Sample footer text Click to select the text box. Click <br /> again or double click to start editing the text.</p>
                </div>
                <div className={FooterStyle.footerContent}>
                    <h1>Headline</h1>
                    <p>Sample footer text</p>
                </div>
                <div className={FooterStyle.footerContent}>
                    <h1>Headline</h1>
                    <p>Sample footer text</p>
                </div>
            </footer>
        </>
    );
}

export default Footer ;