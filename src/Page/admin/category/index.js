import {Link} from 'react-router-dom';
export default function Category(props) {
  console.log(props);
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
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {props.category.map((items, index) => (
              <tr key={index}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>
                <Link
                    to={`category/${items.id}/edit`}
                    className="btn btn-primary ms-1 btn-sm"
                  >
                    Sửa
                  </Link>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => props.onRemoveCate(items.id)}
                  >
                    Xóa </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
