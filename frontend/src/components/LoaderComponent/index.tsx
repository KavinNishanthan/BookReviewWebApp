// Importing packages
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Importing styles
import './style.scss';

export default function LoaderComponent() {
  return (
    <div className="loader-component">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} size="large" />
    </div>
  );
}
