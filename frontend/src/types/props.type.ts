// Importing packages
import React from 'react';

interface IRecordButton {
  ref?: any;
  type?: any;
  textColor?: string;
  label?: string;
  htmlType?: any;
  shape?: any;
  loading?: boolean;
  size?: any;
  sx?: object;
  block?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

interface IRecordInput {
  label?: string;
  placeholder?: string;
  type?: string;
  height?: number;
  size?: any;
  value?: string;
  sx?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IRecordCard {
  title?: string;
  sx?: object;
  size?: any;
  extra?: any;
  bordered?: boolean;
  bodyStyle?: object;
  children: React.ReactNode;
}

export type { IRecordButton, IRecordInput, IRecordCard };
