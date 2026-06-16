import { View, Text } from '@tarojs/components';
import './index.scss';

export default function IndexPage() {
  return (
    <View className="minicook-home">
      <Text className="minicook-home__title">MiniCook</Text>
      <Text className="minicook-home__subtitle">家的味道，轻松整理。</Text>
    </View>
  );
}
