import { requireNativeComponent, ViewStyle } from 'react-native';

type SpreadsheetProps = {
  color: string;
  style: ViewStyle;
};

export const SpreadsheetViewManager =
  requireNativeComponent<SpreadsheetProps>('SpreadsheetView');

export default SpreadsheetViewManager;
