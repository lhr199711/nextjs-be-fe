import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
  extra?: React.ReactNode;
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '24px'
};

export default function PageHeader({ title, onBack, extra }: PageHeaderProps) {
  const router = useRouter();
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div style={headerStyle}>
      <ArrowLeftOutlined
        onClick={handleBack}
        style={{ fontSize: 20, cursor: 'pointer' }}
        aria-label="返回"
      />
      <div>{title}</div>
      {extra && <div>{extra}</div>}
    </div>
  );
}
