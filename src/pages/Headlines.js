import React, { useState, useEffect } from 'react';
import { Text ,FlatList,View,Image,TouchableHighlight,StatusBar} from 'react-native';
import Time from './Time';
 const Headlines = ({ navigation }) => {
 const [headlines, setHeadlines] = useState({});
 
 
  const query = navigation.state.params && navigation.state.params.category;
  const country = 'tr';
  const API_KEY = '6389120e35cd4bf3bf09ae14878710a6';
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${query}&apiKey=${API_KEY}`;
 
  useEffect(() => {
    fetchData();
  }, []);
 
  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res))
  }
    function renderItem({ item }) {
    return (
      <TouchableHighlight onPress={() => { navigation.navigate('NewsWebView', { url: item.url, title: item.title })}}>
      <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={{ flexWrap: 'wrap' }}>{item.title}</Text>
          <Text style={{color:'#660000', marginTop:15, marginLeft:100 }}>Detay için tıklayınız...</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Text>{item.source.name}</Text>
            
            <View style={{ flexDirection: 'row', alignItems:'center' }}>
                 <Text>{Time(item.publishedAt)}</Text>
                
        </View>
          </View>
          
        </View>
      </View></TouchableHighlight>
      );
  }
   
  return (
    
      <FlatList
        data={headlines.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    
  );
};
 
Headlines.navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params && navigation.state.params.category} Haberleri`,
});
 
StatusBar.setBarStyle('light-content', true);

export default Headlines;