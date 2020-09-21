import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Styled from 'styled-components/native';
import Textarea from 'react-native-textarea';

import {useDispatch} from 'react-redux';
import {addTodo} from '../../src/actions/todo_actions';
import {loadTodo} from '../../src/actions/todo_actions';
import AddTodo from './AddTodo';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [TodoInput, setTodoInput] = useState('');
  useEffect(() => {
    dispatch(loadTodo());
  }, []);
  const textHandler = () => {
    if (TodoInput) {
      dispatch(addTodo(TodoInput));
    }
    setTodoInput('');
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Title>
        <TitleText>TODO</TitleText>
      </Title>
      <InputAndButton>
        <Textarea
          style={styles.TextInput}
          value={TodoInput}
          placeholder="입력해주세요"
          maxLength={100}
          onChangeText={(text) => setTodoInput(text)}
        />
        <Button onPress={textHandler}>
          <ButtonText>+</ButtonText>
        </Button>
      </InputAndButton>
      <AddTodo
        navigation={navigation} //자식 컴포넌트에 부모 props의 navigation을 전달하여 자식에서 페이지이동가능케함
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    width: 340,
    height: 160,
    borderWidth: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const Title = Styled.View`
  margin: 50px auto;
`;

const TitleText = Styled.Text`
  font-size: 24px;
`;

const InputAndButton = Styled.View`
  justify-content: center;
  align-items: center;
`;

const Button = Styled.TouchableOpacity`
  width: 56px;
  height: 40px;
  background: #ffffff;
  border-width: 0.8px;
  margin-bottom: 20px;
`;

const ButtonText = Styled.Text`
  font-size: 28px;
  text-align: center;
`;

export default Home;
