import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import TodoList from '../TodoList/TodoList';

const HomeComponent2 = ({ navigation, tasks, saveTask, deleteTask, checkTask, name }) => {
  const [value, setValue] = useState([]);

  const handleSaveTask = (e) => {
    saveTask(value);
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
            Todo App 2
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
                  Atrás
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View
                style={{
                  backgroundColor: '#D9C3E1',
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
                  Home
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Another')}>
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
                  Another Page
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
      <View>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default HomeComponent2;
