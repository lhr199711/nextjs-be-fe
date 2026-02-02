'use client';
import bookApi from '@/api/book';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
export default function UpdateBook() {
  const { bookid } = useParams();
  const pageType = bookid === 'null' ? 'add' : 'update';
  return (
    <div>
      <PageHeader title={pageType === 'add' ? '新建书籍' : '编辑书籍'} />
    </div>
  );
}
