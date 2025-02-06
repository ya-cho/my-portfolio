/**
 * Button.jsx
 * © 2025 yoona. All rights reserved.
 */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ to, children, className }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate 함수로 전달받은 경로로 이동
    navigate(to);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
