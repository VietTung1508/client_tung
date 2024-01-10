import { useEffect, useState } from "react";
import axiosClient from "../../../../api/axiosClient";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminOrder.scss";

function AdminOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const res = await axiosClient.get("order/orders");
      setOrders(res.data);
    }

    getOrders();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "products", headerName: "Sản Phẩm", flex: 3 },
    { field: "user", headerName: "Người Dùng", flex: 2 },
    { field: "payment", headerName: "Thanh Toán", flex: 2 },
    { field: "total", headerName: "Tổng Tiền", flex: 1 },
  ];

  return (
    <div className="orderPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Đơn Hàng</h2>
          <h3 className="desc">
            Website này có <span>{orders.length} </span> đơn hàng
          </h3>
        </div>
      </div>
      <Datatable columns={columns} rows={orders} />
    </div>
  );
}

export default AdminOrder;
