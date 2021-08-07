import {Link} from 'react-router-dom';
import { PaginatedList } from 'react-paginated-list';
export default function Category(props) {
  console.log(props);
  let category = props.category;

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý danh mục</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link className="btn btn-sm btn-outline-primary" to="category/add">
            Thêm Danh mục
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">

          <tbody>
          <PaginatedList
              list={category}
              itemsPerPage={4}
              renderList={(list) => (
                <>          <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
                  {list.map((item, id) => {
                    return (
                    <tr >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><img src={item.image} class="img-responsive" style={{width: '200px', height: 'auto'}} /></td>
                      <td>
                      <Link
                          to={`category/${item.id}/edit`}
                          className="btn btn-primary ms-1 btn-sm"
                        >
                          Sửa
                        </Link>
                        <button className="btn btn-danger btn-sm"
                          onClick={() => props.onRemoveCate(item.id)}
                        >
                          Xóa </button>
      
                      </td>
                    </tr>
                    );
                  })}
                </>
              )}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}
