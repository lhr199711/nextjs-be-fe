'use client';
import { useEffect } from 'react';
import bookApi from '@/api/book';
export default function Home() {
  useEffect(() => {
    bookApi.getBookList().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="scroll-h">
      <div>我是list</div>
    </div>
  );
}
