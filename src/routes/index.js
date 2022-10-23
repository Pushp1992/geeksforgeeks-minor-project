// All Page routes will go here.

import { Routes, Route, Navigate } from 'react-router-dom';

import FunctionalComponent from '../component/practice/functional-component';
import BootstrapComponent from '../component/bootstrap';
import ResumeBuilder from '../component/resume/resume';
import ImageListComponent from '../component/media-list/image-list'
import PageNotFound from '../template/page-not-found';

import ProfilePage from '../template/profile';
import PostPage from '../template/post';

// neted route logic
import NestedRouteTemplate from '../template/nested-route-template';
import Template1 from '../template/nested-template/template-1';
import Template2 from '../template/nested-template/template-2';
import Template3 from '../template/nested-template/template-3';

// Migration
import Migration from '../component/migration/class-to-function';

const RouteList = () => {
    return (
        <Routes>
            <Route path='/' element={<ResumeBuilder />} />
            <Route path='/functional-component' element={<FunctionalComponent />} />
            <Route path='/bootstrap' element={<BootstrapComponent />} />
            <Route path='/image-list' element={<ImageListComponent />} />
            <Route path='/page-not-found' element={<PageNotFound />} />

            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/post' element={<PostPage />} />

            {/* Migration */}
            <Route path='/migration' element={<Migration />} />

            {/* Nested Route */}
            <Route path='/nested-route' element={<NestedRouteTemplate />} />
            <Route path='/template-1' element={<Template1 />} />
            <Route path='/template-2' element={<Template2 />} />
            <Route path='/template-3' element={<Template3 />} />

            {/* default route */}
            {/* <Route path='*' element={<ResumeBuilder/>} replace /> */}

            {/* Page Not Found Route */}
            <Route path='*' element={<Navigate to='/page-not-found' replace />} />
        </Routes>
    )
}

export default RouteList;
