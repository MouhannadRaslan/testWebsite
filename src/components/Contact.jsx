import ContactStyle from './Contact.module.css';

function Contact(){
    return(
        <>
            <section className={ContactStyle.contact}>
                <h1 className={ContactStyle.contactHeader}>Contact Us</h1>
                <p className={ContactStyle.contactPrg}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div className={ContactStyle.boxes}>
                    <div className={ContactStyle.box1}>
                        <h1>Call today</h1>
                        <h3>+1 234 567 8910</h3>
                    </div>
                    <div className={ContactStyle.box2}>
                        <h1>Address</h1>
                        <h3>Alexandria, 32 Washingtorn</h3>
                    </div>
                    <div className={ContactStyle.box3}>
                        <h1>Email Us</h1>
                        <h3>info@simple.com</h3>
                    </div>
                    <div className={ContactStyle.box4}>
                        <h1>Opening hours</h1>
                        <h3>Mon — Fri 10:00 – 23:00
                        Sut-Sun- 10:00 – 19:00</h3>
                    </div>
                </div>
                <div className={ContactStyle.contactImg}></div>
            </section>
        </>
    );
}

export default Contact ;