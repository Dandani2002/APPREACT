import database from './DatabaseInstance';
import {useState} from "react";

const sqlCreate = 'CREATE TABLE IF NOT EXISTS USER (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR (200), password VARCHAR (200))';

const sqlInsert = 'INSERT INTO USER (email, password) VALUES (?,?)';

const sqlSelect = 'SELECT * FROM USER WHERE email = ?';

const sqlUpdate = 'UPDATE USER SET email = ?, password = ? WHERE email = ?';

const sqlDelete = 'DELETE FROM USER WHERE email = ?';

export default class Datamanager {
    static async createTableUser() {
        (await database).transaction(tx => {
            tx.executeSql(sqlCreate);
        });
    } 
    
    static async openDatabase() {
        return await database;
    }
    static async createUser(user) {
        (await database).transaction(tx => {
            tx.executeSql(sqlInsert, [user.email, user.password]);
        });
    }

   
    static async getUser(email) {
        let user = await new Promise((resolved, reject ) => {
            db.transaction((tx) => {
                tx.executeSql(sqlSelect, [email], async (_, { rows }) => {
                    resolved(await rows);
                });
            }, (err) => user = null );
        })
        
        return user;
 
   }
   static async deleteUser(id) {
       (await database).transaction(tx => {
           tx.executeSql(sqlDelete, [id]);
       });
   }
    static async updateUser(user) {
       (await db).transaction(tx => {
           tx.executeSql(sqlUpdate, [user.email, user.password]);
       });
   }
}