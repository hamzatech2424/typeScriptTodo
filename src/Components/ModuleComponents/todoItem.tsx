import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props  {
    item:any,
    removeTodo:(id:string)=>void
}

const TodoItem: React.FC<Props> = ({ item,removeTodo }) => {
    return (
        <View style={styles.viewOne}>
            <View style={styles.viewTwo}>
              <Text>{item.work}</Text>
            </View>

            <View style={styles.viewThree}>
                <TouchableOpacity
                onPress={()=>removeTodo(item._id)}
                style={styles.btnView} >
                    <Text style={styles.btnTxt}>Remove</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnView} >
                    <Text style={styles.btnTxt}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    viewOne: {
        width: '100%',
        height: 50,
        marginVertical:5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#F9DEC9'
    },
    viewTwo: {
        width: '60%',
        height: '100%',
        justifyContent:'center',
        paddingLeft:10
    },
    viewThree: {
        width: '40%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    btnView: {
        backgroundColor: '#E9AFA3',
        padding: 8
    },
    btnTxt: {
        color: 'white'
    }

})