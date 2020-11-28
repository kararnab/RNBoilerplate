import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import SearchComponent from '../components/SearchComponent';
import RecipeCard from '../components/RecipeCard';
import API from '../api/MyService';

const dummy = [
  {
    id: '1',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '2',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '3',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '4',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '5',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '6',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '7',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '8',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '9',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '10',
    name: 'Dummy Title1',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    price: '1231.00',
  },
  {
    id: '11',
    name: 'Dummy Title2',
    image:
      'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png',
    description: 'ConFusion experience, is it a vada or is it a donut?',
    price: '2314.00',
  },
];

const SearchScreen = (props: any) => {
  const [resultList, setResultList] = useState(Array()); // [] or Array() are same
  const [resultListFiltered, setResultListFiltered] = useState(Array());
  const [searchTerm, setSearchTerm] = useState('');

  const performFilter = (filterText: string) => {
    setSearchTerm(filterText);
    let filteredListData = resultList.filter(({ name, description }) => {
      return name.includes(filterText);
    });
    if (filterText === '') {
      filteredListData = resultList;
    }
    setResultListFiltered([...filteredListData]);
  };

  const searchApi = async () => {
    try {
      const response = await API.get('/reciped9d7b8c.json');
      setResultList([...response.data]);
      setResultListFiltered([...response.data]);
    } catch (e) {
      alert('Check your Internet connection');
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SearchComponent
          term={searchTerm}
          onTermChange={setSearchTerm}
          onSubmit={performFilter}
        />
      </SafeAreaView>
      <View style={{ marginHorizontal: 16, flex: 1, marginBottom: 5 }}>
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={resultListFiltered}
          renderItem={({ item }, rowMap) => (
            // return a component using that data
            <View style={{ paddingTop: 5 }}>
              <RecipeCard
                title={item.name}
                uri={item.image}
                description={item.description}
                price={item.price}
              />
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backLeftBtn]}
                onPress={() => closeRow(rowMap, data.item.id)}>
                <Text style={styles.backTextWhite}>LeftBtn</Text>
              </TouchableOpacity>
              {/*<TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
              >
                <Text style={styles.backTextWhite}>Close</Text>
              </TouchableOpacity>*/}
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.id)}>
                <Text style={styles.backTextWhite}>RightBtn</Text>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          keyExtractor={(item) => item.id + ''}
        />
      </View>
    </>
  );
};

const closeRow = (rowMap, rowKey) => {
  if (rowMap[rowKey]) {
    rowMap[rowKey].closeRow();
  }
};
const deleteRow = (rowMap, rowKey) => {
  //TODO:
};

const styles = StyleSheet.create({
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    //backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    marginTop: 5,
    borderRadius: 5,
  },
  backLeftBtn: {
    backgroundColor: 'blue',
    left: 0,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});

export default SearchScreen;
