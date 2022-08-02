import React, {Suspense} from 'react';
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';

import Home from '@/Modules/Home/Home';
import ProductInfo from '@/Modules/ProductInfo/ProductInfo';
import CreateProduct from '@/Modules/CreateProduct/CreateProduct';

type Props = RouteComponentProps;
const AppRouter: React.FC<Props> = () => {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`/productInfo/:productID`} component={ProductInfo} />
        <Route path={'/createProduct'} component={CreateProduct} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default withRouter(AppRouter);
