import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import routes from "../routes";
import {HOME_ROUTE} from "../utils/constants";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) =>
                <Route
                    key={route.name}
                    path={route.path}
                    element={<route.component />}
                >
                    {route.nested
                        ? <Route
                            key={route.nested.path}
                            path={route.nested.path}
                            element={<route.nested.component />}
                        />
                        : null
                    }
                </Route>
            )}
            <Route path={'*'} element={<Navigate to={HOME_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;