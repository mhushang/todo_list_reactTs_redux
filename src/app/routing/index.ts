import { renderRoutes, RouteConfig } from 'react-router-config';

import { Routes } from '../shared/constants/routes';
import { Todos } from '../components/Todos';
import { User } from '../components/User';

const routesConfig: RouteConfig[] = [
    {
        path: Routes.empty,
        component: Todos,
        exact: true,
    },
    {
        path: Routes.todos,
        component: Todos,
        exact: true,
    },
    {
        path: Routes.user,
        component: User,
        exact: true,
    },

];

export const Content = renderRoutes(routesConfig);
