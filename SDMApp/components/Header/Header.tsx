import {useStyles, createStyleSheet} from 'styles';
import {View} from 'react-native';

export interface HeaderProps {
  testID?: string,
}

export function Header(props: HeaderProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.header} testID="15:3"/>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    flexDirection: 'row',
    width: 390,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  header: {
    width: 390,
    height: 80,
    flexShrink: 0,
    backgroundColor: theme.colors.background100,
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 8,
    shadowOffset: {"width":0,"height":5},
  },
}));

