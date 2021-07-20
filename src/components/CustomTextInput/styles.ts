import { StyleSheet } from 'react-native';
import { LayOutValues } from '../../utils/UtilConstants';

const styles = StyleSheet.create({
  text: {
    fontSize: LayOutValues.fontSize,
    color: LayOutValues.fontColor,
    marginTop: 10,
  },
  placeHolder: {
    color: LayOutValues.placeholderColor,
  },
});

export default styles;
