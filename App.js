import React from 'react';
import { Text,Platform,StatusBar , FlatList, ImageBackground, Dimensions, TouchableHighlight } from 'react-native';

const App  = ({navigation}) => {
  const numColumns = 2;
  const tileWidth = Dimensions.get('window').width / numColumns;
  
  const dataSource = [
    { category: 'Teknoloji', imageId: '' },
    { category: 'Spor', imageId: '' },
    { category: 'Sağlık', imageId: '' },
    { category: 'İş ', imageId: '' },
    { category: 'Eğlence', imageId: '' },
    { category: 'Bilim', imageId: '' },
    { category: 'Hava Durumu', imageId: '' },
  ];

  function renderItem({ item }) {
    return (
      <TouchableHighlight onPress={() => navigation.navigate('Headlines', { category: item.category })}>
          <ImageBackground
          source={{ uri:  item.imageId }}
          style={{
            width: tileWidth,
            height: tileWidth,
            justifyContent: 'center'
          }}>
          <Text style={{
            textAlign: 'center',
            color: '#6666CC',
            fontSize: 17
          }}>{item.category}</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }


  return (
    
      <FlatList
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item) => item.category}
        numColumns={numColumns}
      />
   
  );
};

App.navigationOptions = ({navigation}) => ({
  title: 'Uygulamaya Hoşgeldiniz.',
  headerStyle: {
    backgroundColor:'#6666CC',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
  },
});
 
StatusBar.setBarStyle('light-content', true);
 
export default App ;