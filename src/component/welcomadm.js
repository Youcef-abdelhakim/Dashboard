import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";


const Welcomadmin = () => {
    return(
        <Fragment>
            <header>
                <div className="logo">
                    <h1>
                        Admin Dashboard
                    </h1>
                </div>

                <nav>
                    <Link to='/' className="a">Home</Link>
                    <Link className="a" to ='prduct-management'>Products management</Link>
                    <Link className="a">Orders confirmations</Link>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        </Fragment>
    )
}

export default Welcomadmin;