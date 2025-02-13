import { Suspense } from "react";
import { Route, Routes } from "react-router";
import Valentine from "./page/Valentine";
import Home from "./page/Home";

const routes = ()=>(<Suspense fallback="Loading... meanwhile don't forget I love you">
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-valentine" element={<Valentine/>} />
    </Routes>
</Suspense>)


export default routes;