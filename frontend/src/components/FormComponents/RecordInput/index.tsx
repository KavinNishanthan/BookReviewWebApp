// Importin packages
import { Input, ConfigProvider } from 'antd';

// Importing assets
import './style.scss';

// Importing types
import { IRecordInput } from '../../../types/props.type';

export default function RecordInput({ placeholder, height, label, type, sx, size = 'normal' }: IRecordInput) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 5,
          controlHeight: height || 35
        }
      }}
    >
      <div className="record-input">
        {label && <p className="record-input-label">{label}</p>}
        {type === 'password' ? (
          <Input.Password
            placeholder={placeholder}
            size={size}
            type={type}
            style={{
              ...sx
            }}
          />
        ) : (
          <Input
            placeholder={placeholder}
            size={size}
            type={type}
            style={{
              ...sx
            }}
          />
        )}
      </div>
    </ConfigProvider>
  );
}
