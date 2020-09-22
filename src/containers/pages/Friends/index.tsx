import React from 'react';
import { View, Button } from 'react-native';
import { FriendsContext } from 'containers/pages/Friends/FriendsContext';
import P from 'components/p';

interface Props {
  navigation: {
    navigate: Function;
  };
  route: any;
}

function FriendsScreen(props: Props): JSX.Element {
  const context = React.useContext(FriendsContext);
  if (!context) return <></>;
  return (
    <View>
      <P>Add fsffsfsfs here!sffsfs</P>

      {context.possibleFriends.map((friend: string, index: number): JSX.Element => (
        <Button
          key={friend}
          title={`Add ${friend}`}
          onPress={() => {
            context.addFriend(index)
          }}
        />
      ))}

      <Button
        title="Back to home"
        onPress={() =>
          props.navigation.navigate('Home')
        }
      />
    </View>
  );
}

export default FriendsScreen;