import React from 'react';
import { FlatList, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const styleUnChecked = {
  padding: 16,
  borderRadius: 10,
  elevation: 10,
  shadowColor: '#171717',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.05,
  shadowRadius: 2,
  backgroundColor: "#f5f5f5",
  marginBottom: 16,
  marginLeft: 16,
  marginRight: 16,
};

const styleChecked = {
  padding: 16,
  borderRadius: 10,
  elevation: 0,
  shadowColor: '#171717',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.05,
  shadowRadius: 2,
  backgroundColor: "#f5f5f5",
  marginBottom: 16,
  marginLeft: 16,
  marginRight: 16,
  opacity: 0.3,
};


const TodoList = ({ tasks, deleteTask, checkTask }) => {
  
  const checked = 0;

  const renderTodoItem = ({ item }) => (
    <View style={item.status == checked ? styleChecked : styleUnChecked}>
      <View style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
      }}>
        <Text style={item.status == checked && ({
          textDecorationLine: 'line-through',
        })}>{item.value}</Text>
        <View style={{
          display: "flex",
          flexDirection: "row"
        }}>
          <TouchableOpacity
            onPress={() => deleteTask(item.id)}
          >
            <View style={{
              width: 40,
              height: 40,
              backgroundColor: "#e0e0e0",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 8
            }}>
              <Text>X</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => checkTask(item.id)}
          >
            <View style={{
              width: 40,
              height: 40,
              backgroundColor: "#e0e0e0",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Text>✓</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
  return (
    <View style={{
    }}>
      <ScrollView style={{
        paddingTop: 16
      }}>
        <FlatList 
          data={tasks}
          renderItem={renderTodoItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  )
}

export default TodoList;