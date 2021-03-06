export default function Product(props) {

    // onRemove = (id) => {
    //     if (confirm('Bạn có muốn xóa ?')) { //eslint-disable-line
    //         console.log(id;)
    //     }
    // }
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản Lý Sản Phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        Thêm Sản Phẩm
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td width="150">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => props.onRemove(item.id)}
                                    >
                                        Xóa sản phẩm
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></>
    )
}