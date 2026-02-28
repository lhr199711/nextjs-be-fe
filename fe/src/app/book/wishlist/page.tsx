'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'antd';
export default function Home() {
  console.log('组件渲染');
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <Button
        onClick={() => {
          setCount((oldv) => oldv + 1);
          setCount((oldv) => oldv + 1);
          setCount((oldv) => oldv + 1);
        }}
      >
        点击
      </Button>
    </div>
  );
}
