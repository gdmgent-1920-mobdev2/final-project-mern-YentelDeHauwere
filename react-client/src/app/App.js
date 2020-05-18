import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { ContactPage, HomePage, NotFoundPage, WelcomePage, SignInPage, SignUpPage, PostsPage, PostDetailPage, TestPage, TestPage2 } from './pages';
import { AdminPage } from './admin/pages';
import { BackofficeLayout, PageLayout, ErrorLayout, AuthLayout, MapboxLayout } from './layouts';
import { AuthRouteWithLayout, RouteWithLayout } from './utilities';
import * as Routes from './routes';
import { ApiProvider, AuthProvider } from './services';

import './app.scss';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <ApiProvider>
          <Router basename='/'>
            <Switch>
				<RouteWithLayout exact path={Routes.TEST} component={TestPage} layout={PageLayout} />
				<RouteWithLayout exact path={Routes.TEST2} component={TestPage2} layout={PageLayout} />

				<RouteWithLayout exact path={Routes.WELCOME} component={WelcomePage} layout={PageLayout} />

					// Authentication
				<RouteWithLayout exact path={Routes.AUTH_SIGN_IN} component={SignInPage} layout={AuthLayout} />
				<RouteWithLayout exact path={Routes.AUTH_SIGN_UP} component={SignUpPage} layout={AuthLayout} />

					// Home with a redirect
				<RouteWithLayout exact path={Routes.LANDING} component={HomePage} layout={MapboxLayout} />
				<Redirect from={Routes.HOME} to={Routes.LANDING} />

				<RouteWithLayout exact path={Routes.CONTACT} component={ContactPage} layout={PageLayout} />
				<RouteWithLayout exact path={Routes.POSTS} component={PostsPage} layout={PageLayout} />
				<RouteWithLayout exact path={Routes.POST_DETAIL} component={PostDetailPage} layout={PageLayout} />
				<AuthRouteWithLayout path={Routes.BACKOFFICE_LANDING} component={AdminPage} layout={BackofficeLayout} />

				// Hier mag geen enkele route achter komen
				<RouteWithLayout component={NotFoundPage} layout={ErrorLayout} />
            </Switch>
          </Router>
        </ApiProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
