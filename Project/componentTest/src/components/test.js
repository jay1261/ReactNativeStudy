import AsyncStorage from "@react-native-community/async-storage";
import { createCipheriv } from "crypto";
import { useState } from "react";

const[ tasks, setTasks ] = useState({});
const _saveTasks = async tasks =>{
    try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        setTasks(tasks);
    }
    catch(e){
        console.error(e);
    }
};

