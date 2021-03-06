import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from "./Page/admin/product/product";
import AddProductForm from "./Page/admin/product/add";
import Signup from "./Page/website/Signup";
import EditProductForm from "./Page/admin/product/edit";
import "./dashboard.css";
import Signin from './Page/website/Signin';
import Category from './Page/admin/category';
import AddCategory from './Page/admin/category/add';
import EditCate from './Page/admin/category/edit';
import AdminLayout from "./layouts/adminLayout";
import WebsiteLayout from "./layouts/websiteLayout";
import Website from './Page/website';
import SanPham from './Page/website/product';
import SanPhamCT from './Page/website/productDetail';
import Contact from './Page/website/contact';
import Dashboard from './Page/admin/dashboard';
import PrivateAdmin from './auth/privateAdmin';
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateAdmin exact path="/admin/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
            <PrivateAdmin exact path="/admin">
              <Dashboard {...props} />
              </PrivateAdmin>
              <PrivateAdmin exact path="/admin/products">
                <Product {...props} />
              </PrivateAdmin>
              <PrivateAdmin exact path="/admin/products/add">
                <AddProductForm {...props} />
              </PrivateAdmin>
              <PrivateAdmin exact path="/admin/products/:id/edit">
                <EditProductForm {...props} />
              </PrivateAdmin>
              <PrivateAdmin exact path="/admin/category">
                <Category {...props} />
              </PrivateAdmin>
              <PrivateAdmin exact path="/admin/category/add">
                <AddCategory {...props} />
              </PrivateAdmin>
              <PrivateAdmin exact path="/admin/category/:id/edit">
                <EditCate {...props} />
              </PrivateAdmin>
            </Switch>
          </AdminLayout>
        </PrivateAdmin>

        <Route>
          <WebsiteLayout>
            <Switch>
              <Route path="/trangchu">
                <Website {...props}/>
              </Route>
              <Route exact path="/sanpham">
                <SanPham {...props}/>
              </Route>
              <Route exact path="/sanphamchitiet/:id">
                <SanPhamCT {...props}/>
              </Route>              
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  )
};
export default Routes;