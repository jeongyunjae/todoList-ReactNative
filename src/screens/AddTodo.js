import React from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo} from '../../src/actions/todo_actions';

const AddTodo = (props) => {
  const todoWholeData = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteFunc = (item) => {
    dispatch(deleteTodo(item.id));
  };

  return (
    <FlatList
      style={styles.myFlat}
      keyExtractor={(item, index) => String(index)}
      data={todoWholeData}
      renderItem={({item}) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 30,
              borderBottomWidth: 0.5,
            }}>
            <TodoText
              onPress={() => {
                props.navigation.navigate('DetailTodo', item);
              }}>
              {item.content.length > 13
                ? item.content.substring(0, 13) + ' ...'
                : item.content.indexOf(`\n`) != -1
                ? item.content.split('\n')[0] + ' ...'
                : item.content.length > 13 && item.content.indexOf(`\n`) != -1
                ? item.content.split('\n')[0] + ' ...'
                : item.content}
            </TodoText>

            <TouchableOpacity onPress={() => deleteFunc(item)}>
              <Icon
                name="trash-outline"
                style={{marginLeft: 30, fontSize: 18}}
                value={item.id}
              />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  myFlat: {
    marginTop: 10,
  },
});

const TodoText = Styled.Text`
  width: 60%;
  font-size: 16px;
`;

export default AddTodo;
