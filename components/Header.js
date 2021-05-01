import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Content title="Foreign Exchange App" />
    </Appbar.Header>
  );
};

export default Header;
