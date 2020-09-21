import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {editTodo, deleteTodo} from '../../src/actions/todo_actions';

const DetailTodo = ({navigation}) => {
  const [editMode, setEditMode] = useState(false);
  const [editStatus, setEditStatus] = useState('');
  let meterialData = navigation.state.params; //객체 형태로 네비게이션 후 정보 받아오기
  const dispatch = useDispatch();

  const editFunc = () => {
    const body = {
      id: meterialData.id,
      content: editStatus,
    };
    if (editStatus) {
      dispatch(editTodo(body));
      alert('수정하였습니다!');
      navigation.navigate('Home');
    } else {
      alert('수정사항을 입력해주세요!');
    }
  };

  const deleteFunc = () => {
    dispatch(deleteTodo(meterialData.id));
    alert('삭제하였습니다!');
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Title>
        <TitleText>상세보기</TitleText>
      </Title>
      {editMode ? (
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.TextInput}
            value={editStatus}
            placeholder={meterialData.content}
            onChangeText={(text) => setEditStatus(text)}
          />
          <Icon
            onPress={() => editFunc()}
            style={{fontSize: 30, marginLeft: 20}}
            name="ios-create-outline"
          />
        </View>
      ) : (
        <Discription>
          <DiscriptionText>{meterialData.content}</DiscriptionText>
        </Discription>
      )}

      <View style={{flexDirection: 'row', flex: 1}}>
        <TouchableOpacity onPress={() => setEditMode(true)}>
          <Icon style={{fontSize: 28, margin: 20}} name="ios-pencil" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteFunc()}>
          <Icon style={{fontSize: 28, margin: 20}} name="ios-trash-outline" />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    width: '60%',
    height: 40,
    borderWidth: 0.8,
  },
});

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const Title = Styled.View`
  margin: 100px auto;
`;

const TitleText = Styled.Text`
  font-size: 24px;
`;

const Discription = Styled.View`
  flex: 1;
`;

const DiscriptionText = Styled.Text`
  font-size: 16px;
`;

export default DetailTodo;
