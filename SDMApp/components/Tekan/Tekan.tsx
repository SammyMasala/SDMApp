import { useStyles, createStyleSheet } from 'react-native-unistyles';
import { View, Text } from 'react-native';

export interface TekanProps {
  testID?: string,
}

export function Tekan(props: TekanProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <Text style={styles.tekan} testID="28:43">
        {`Tekan!!`}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    width: 205,
    height: 77,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  tekan: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Irish Grover',
    fontSize: 64,
    fontStyle: 'normal',
    fontWeight: '400',
  },
}));

