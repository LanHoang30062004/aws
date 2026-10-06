import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState("Đang tải dữ liệu từ Backend...");

  // Đổi URL này thành DNS của Application Load Balancer sau khi tạo xong ở bước dưới
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then(res => res.json())
      .then(result => setData(result.message))
      .catch(err => setData("Lỗi kết nối Backend hoặc chưa cập nhật ALB URL!"));
  }, [API_URL]);

  return (
    <div style={{ textAlign: 'center', marginTop: '60px', fontFamily: 'sans-serif' }}>
      <h1>Mô hình VPC: React + Spring Boot</h1>
      <div style={{ padding: '20px', border: '1px solid #ddd', display: 'inline-block', borderRadius: '8px' }}>
        <h3>Kết quả từ Backend:</h3>
        <p style={{ color: 'green', fontWeight: 'bold' }}>{data}</p>
      </div>
    </div>
  );
}

export default App;