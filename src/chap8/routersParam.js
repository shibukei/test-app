import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import TopPage from './TopPage';
import BookPage from './BookPage';
import RouterNav from './RouterNav';
import BookQueryPage from "./BookQueryPage";

const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterNav />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/book/:isbn" element={<BookPage />} />
            <Route path="/book/query" element={<BookQueryPage />} />
        </Route>
    )
);

export default routesParam;