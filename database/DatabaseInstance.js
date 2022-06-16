import * as SQLite from 'expo-sqlite';
//import {openDatabase} from 'react-native-sqlite-storage';

let database = SQLite.openDatabase({name: 'UserDatabase.database'});

export default database;