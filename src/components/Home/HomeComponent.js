import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';
import TodoList from '../TodoList/TodoList';
import LoadingScreen from '../LoadingScreen/LoadingScreen';


const HomeComponent = ({ navigation, saveTask, isFetching }) => {
  const [value, setValue] = useState([]);
  const [name, setName] = useState('Pedro');
  const params = {
    name,
  };
  const handleSaveTask = (e) => {
    saveTask(value);
  };

  const taskDetails = (id) => {
    navigation.navigate('Another', {
      id,
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          paddingTop: 48,
          paddingLeft: 16,
          paddingRight: 16,
          backgroundColor: '#f5f5f5',
          elevation: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          shadowColor: '#171717',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          paddingBottom: 16,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 32,
              color: '#333',
              marginBottom: 16,
              fontWeight: 'bold',
            }}
          >
            Todo App
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home2', params)}>
            <View
              style={{
                backgroundColor: '#f5f5f5',
                borderRadius: 10,
                padding: 16,
              }}
            >
              <Text
                style={{
                  color: '#700B97',
                  textAlign: 'center',
                }}
              >
                Home 2
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TextInput
          style={{
            backgroundColor: '#e0e0e0',
            padding: 10,
            marginBottom: 8,
            borderRadius: 10,
          }}
          placeholder="Type here the task..."
          selectionColor="#700B97"
          onChangeText={(text) => setValue(text)}
        />
        <TouchableOpacity onPress={handleSaveTask}>
          <View
            style={{
              backgroundColor: '#700B97',
              borderRadius: 10,
              padding: 16,
            }}
          >
            <Text
              style={{
                color: '#f5f5f5',
                textAlign: 'center',
              }}
            >
              Add Task
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TodoList taskDetails={taskDetails} />
      </KeyboardAvoidingView>
      {isFetching && <LoadingScreen />}
    </View>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.todoReducer.isFetching,
});

export default connect(mapStateToProps)(HomeComponent);
