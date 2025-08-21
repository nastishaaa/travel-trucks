import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Loader from "../Loader/Loader";

export default function Layout() {

    const style = {
        display: "flex",
        flexDirection: "column",
        minHeight: "95vh",
    }
    const mainContentStyle = {
        flexGrow: 1,
    }

    return (
        <>
            <div style={style}>
                <Header />
                <main style={mainContentStyle}>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </>
    );
}