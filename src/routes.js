import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/header";
import Nav from "./components/nav";
import Product from "./Page/admin/product/product";
import AddProductForm from "./Page/admin/product/add";
import Signup from "./Page/website/Signup";
import EditProductForm from "./Page/admin/product/edit";
import "./dashboard.css";
import Dashboard from "./Page/admin/dashboard";
import NotFound from "./Page/404";
import Signin from './Page/website/Signin';
import Category from './Page/admin/category';
import AddCategory from './Page/admin/category/add';
const Routes = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div>
                    {/* show header */}
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                            {/* show menu left */}
                            <Nav />
                            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                                <Switch>
                                    <Route exact path="/">
                                        <Dashboard />
                                    </Route>
                                    <Route exact path="/products">
                                        <Product {...props} />
                                    </Route>
                                    <Route exact path="/products/add">
                                        <AddProductForm {...props} />
                                    </Route>
                                    <Route exact path="/signup">
                                        <Signup {...props}/>
                                    </Route>
                                    <Route exact path="/signin">
                                        <Signin {...props}/>
                                    </Route>
                                    <Route exact path="/products/:id/edit">
                                        <EditProductForm {...props} />
                                    </Route>
                                    <Route exact path="/category">
                                        <Category {...props} />
                                    </Route>
                                    <Route exact path="/category/add">
                                        <AddCategory {...props} />
                                    </Route>
                                    <Route path="*">
                                        <NotFound />
                                    </Route>
                                </Switch>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
};
export default Routes;