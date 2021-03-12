import React from 'react';
import FormPageTemplate from '@components/form/FormPageTemplate';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AccountType from './AccountType';

function SignUpPage() {
    const { path } = useRouteMatch();

    return (
        <FormPageTemplate>
            <Switch>
                <Route exact path={path}>
                    <AccountType />
                </Route>
                <Route path={`${path}/parent`}>

                </Route>
                <Route path={`${path}/child`}>

                </Route>
                <Route path={`${path}/specialist`}>

                </Route>
            </Switch>
        </FormPageTemplate>
    );
}

export default SignUpPage;