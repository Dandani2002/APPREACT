import database from './DatabaseInstance';
import db from './DatabaseInstance';

const sqlCreate = 'CREATE TABLE IF NOT EXISTS USER (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR (200), password VARCHAR (200))';

const sqlInsert = 'INSERT INTO USER (email, password) VALUES (?,?)';

const sqlSelect = 'SELECT * FROM USER WHERE id = ?';

const sqlUpdate = 'UPDATE USER SET email = ?, password = ? WHERE id = ?';

const sqlDelete = 'DELETE FROM USER WHERE id = ?';

export default class Datamanager {
    async createDatabase() {
        (await database).transaction(tx => {
            tx.executeSql(sqlCreate);
        });
    } 
    
    async openDatabase() {
        return await database;
    }
    async createUser(user) {
        (await database).transaction(tx => {
            tx.executeSql(sqlInsert, [user.email, user.password]);
        });
    }

    async getUser(id){
        let user = null;
        (await database).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) =>{
                user = rows._array[0];
            });
        });
        return user;
 
   }
   async deleteSUser(id) {
       (await database).transaction(tx => {
           tx.executeSql(sqlDelete, [id]);
       });
   }
   async updateUser(user) {
       (await db).transaction(tx => {
           tx.executeSql(sqlUpdate, [user.email, user.password]);
       })
   }
}