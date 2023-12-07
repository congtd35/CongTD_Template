import {Navigate, Route, Routes} from "react-router-dom";
import getRoutes from "../constants/routes.js";

const Router = () => {

    const routes = getRoutes();

    return <Routes>
        {routes.map(route => (<Route
                key={route.key}
                path={route.path}
                exact={route.exact || false}
                render={props => route.component ? (<route.layout
                        {...props}
                        breadcrumb={route.breadcrumb}
                        path={history.location.pathname}
                        contextHolder={contextHolder}
                    >
                        {strPermission.includes(route.code) || pathname.startsWith('/login') || route.code === 'notfound' ? (
                            <route.component {...props} />) : (<PermissionDenied/>)}
                    </route.layout>) : (<Navigate to={route.redirect}/>)}
            />))}
    </Routes>
};

export default Router;