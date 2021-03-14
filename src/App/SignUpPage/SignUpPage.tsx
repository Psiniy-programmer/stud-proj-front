import React from 'react';
import FormPageTemplate from '@components/templates/FormPageTemplate';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AccountType from './AccountType';
import Parent from './Parent';
import Child from './Child';
import Specialist from './Specialist';

function SignUpPage() {
    const { path } = useRouteMatch();

    return (
        <FormPageTemplate>
            <Switch>
                <Route exact path={path}>
                    <AccountType />
                </Route>
                <Route path={`${path}/parent`}>
                    <Parent />
                </Route>
                <Route path={`${path}/child`}>
                    <Child />
                </Route>
                <Route path={`${path}/specialist`}>
                    <Specialist />
                </Route>
            </Switch>
        </FormPageTemplate>
    );
}

export default SignUpPage;