// All Page routes will go here.

import { Routes, Route, Navigate } from 'react-router-dom';

import FunctionalComponent from '../component/practice/functional-component';
import BootstrapComponent from '../component/bootstrap';
import ResumeBuilder from '../component/resume/resume';
import ImageListComponent from '../component/media-list/image-list'
import PageNotFound from '../template/page-not-found';

const RouteList = () => {
    return (
        <Routes>
            <Route path='/' element={<ResumeBuilder />} />
            <Route path='/functional-component' element={<FunctionalComponent />} />
            <Route path='/bootstrap' element={<BootstrapComponent />} />
            <Route path='/image-list' element={<ImageListComponent />} />
            <Route path='/page-not-found' element={<PageNotFound />} />

            {/* default route */}
            {/* <Route path='*' element={<ResumeBuilder/>} replace /> */}

            {/* Page Not Found Route */}
            <Route path='*' element={<Navigate to='/page-not-found' replace /> } />
        </Routes>
    )
}

export default RouteList;
