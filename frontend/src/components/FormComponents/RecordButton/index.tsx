// Importing packages
import { Button, ConfigProvider } from 'antd';

// Importing types
import { IRecordButton } from '../../../types/props.type';

export default function RecordButton({
  ref,
  htmlType,
  block,
  size,
  label,
  shape,
  onClick,
  children,
  disabled,
  loading,
  type = 'primary',
  sx
}: IRecordButton) {
  return (
    <ConfigProvider>
      <Button
        style={{
          ...sx,
          boxShadow: 'none'
        }}
        ref={ref}
        size={size}
        htmlType={htmlType}
        disabled={disabled}
        type={type}
        loading={loading}
        shape={shape}
        block={block}
        onClick={onClick}
      >
        {label || children}
      </Button>
    </ConfigProvider>
  );
}
