// Importing packages
import { Card, ConfigProvider } from 'antd';

// Importing interfaces
import { IRecordCard } from '../../../types/props.type';

export default function RecordCard({ title, size, children, bordered, bodyStyle, sx, extra, ...props }: IRecordCard) {
  return (
    <ConfigProvider>
      <Card
        title={title}
        size={size}
        bordered={bordered}
        bodyStyle={bodyStyle}
        style={{ ...sx }}
        extra={extra}
        {...props}
      >
        {children}
      </Card>
    </ConfigProvider>
  );
}
