import React, { useState } from 'react';

type Nav = {
  id: number;
  name: string;
};

const navs: Nav[] = [
  {
    id: 1,
    name: "Trang chủ"
  },
  {
    id: 2,
    name: "Sản phẩm"
  },
  {
    id: 3,
    name: "Giới thiệu"
  },
  {
    id: 4,
    name: "Liên hệ"
  },
];

export default function Bt3() {
  const [active, setActive] = useState<number>(1);

  return (
    <div style={{ paddingTop: 30 }}>
      Bài tập 3
      <div className="nav">
        {navs.map((item: Nav) => (
          <button
            key={item.id}
            className={`${active === item.id ? "act" : ""}`}
            onClick={() => setActive(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

