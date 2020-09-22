import React from 'react';

interface ContextProps {
  possibleFriends: Array<string>;
  currentFriends: Array<string>;
  addFriend(index: number): void;
}
export const FriendsContext = React.createContext<ContextProps | null>(null);