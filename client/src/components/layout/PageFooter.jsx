import './pageFooter.css' ;
function PageFooter({ theme }) {

    return (
        <footer
            className={`container-fluid py-4 rgb-border-top page-footer
                theme-${theme}`}>

            <div className="container">

                <div className="row align-items-center g-3">

                    {/* Copyright / Web Development */}
                    <div className="col-12 col-md-6 text-center text-md-start">

                        <span>
                            © {new Date().getFullYear()}{" "}

                            <span role="button" tabIndex={0} className="footer-link"
                                onClick={() =>
                                    window.open(
                                        "https://www.w3schools.com/whatis/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    )
                                }
                            >
                                Web Development
                            </span>

                        </span>

                    </div>


                    {/* MERN */}
                    <div className="col-12 col-md-6 text-center text-md-end">

                        <span>
                            Built with{" "}

                            <span role="button" tabIndex={0} className="footer-link"
                                onClick={() =>
                                    window.open(
                                        "https://www.geeksforgeeks.org/mern/understand-mern-stack/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    )
                                }
                            >
                                MERN Stack
                            </span>

                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default PageFooter;

// ---------------------------------------------------------
// function PageFooter({theme}) {
//     return (
//         <footer
//             className={`container-fluid py-4 rgb-border-top theme-${theme}`}>
//             <div className="container">

//                 <div className="row align-items-center g-3">

//                     <div className="col-md-6 text-center text-md-start">
//                         <span>
//                             © {new Date().getFullYear()}
//                             <span role="button" onClick={()=> window.open("https://www.w3schools.com/whatis/")} 
//                                 target='_blank' rel="noopener noreferrer"> Web Development</span>
//                         </span>
//                     </div>

//                     <div className="col-md-6 text-center text-md-end">
//                         <span>
//                             Built with <span role="button" onClick={()=> window.open("https://www.geeksforgeeks.org/mern/understand-mern-stack/")}
//                             target='_blank' rel="noopener noreferrer">MERN Stack</span>
//                         </span>
//                     </div>

//                 </div>

//             </div>
//         </footer>
//     );
// }

// export default PageFooter;