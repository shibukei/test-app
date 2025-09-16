import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';

import TopPage from './TopPage';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';
import RouterNav from './RouterNav';

const routesLink = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RouterNav />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    )
)
export default routesLink;