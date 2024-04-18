import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { View, Text } from 'react-native';

export interface SdmButtonProps {
  testID?: string,
}

export function SdmButton(props: SdmButtonProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <Text style={styles.sedapDekatMurah} testID="15:18">
        {`Sedap! Dekat! Murah!`}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 300,
    height: 300,
    flexShrink: 0,
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 4,
    shadowOffset: { "width": 0, "height": 4 },
  },
  sedapDekatMurah: {
    width: 195.26199,
    height: 176.55901,
    flexShrink: 0,
    // color: theme.colors.hungry100,
    textAlign: 'center',
    fontFamily: 'Irish Grover',
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: '400',
  },
}));

