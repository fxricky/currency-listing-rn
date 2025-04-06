import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  title: string;
}

export default function Header({title}: Props): React.ReactElement {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
