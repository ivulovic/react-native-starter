import React from 'react';
import { View, Button, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { FriendsContext } from 'containers/pages/Friends/FriendsContext';
import P from 'components/p';
import { test } from 'utils/test';
import { testHook } from 'hooks/test';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
import useTranslations from 'hooks/useTranslations';
import { chartHeight, initialOptions, demoSeries, demoSeries1 } from './data';

function HomeScreen(props: any): JSX.Element {
  const { translate } = useTranslations();
  const context = React.useContext(FriendsContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [chartOptions, setChartOptions] = React.useState({});
  if (!context) return <></>;
  React.useEffect(() => {
    test();
    testHook();
    setIsLoading(false);
    setChartOptions({
      ...initialOptions,
      series: demoSeries
    })
  }, [])
  return (
    <View>
      <View>
        <Text>{translate('hello', { value: 'TEST' })}</Text>
        <P>You have {context.currentFriends.length} friends!</P>

        {context.currentFriends.map((friend: string, index: number): JSX.Element => (
          <P key={friend + "." + index}>{index + 1}. {friend}</P>
        ))}

        <Button
          title="Add some friedadafnds"
          onPress={() =>
            props.navigation.navigate('Friends')
          }
        />
      </View>

      <View style={styles.container}>
        {isLoading ?
          <ActivityIndicator animating={isLoading} color="#0000ff" /> :
          <HighchartsReactNative loader={false} styles={styles.container} webviewStyles={styles.container} options={chartOptions} />}
      </View>


      <Button
        title="Reload chart"
        onPress={() => {
          // setIsLoading(true);
          // setTimeout(() => {
          // setIsLoading(false);
          setChartOptions({
            ...initialOptions,
            series: Math.random() * 100 > 50 ? demoSeries1 : demoSeries
          })
          // }, 500);
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: chartHeight,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: "center",
  },
});

export default HomeScreen;