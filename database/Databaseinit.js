import DataManager from './DataManager';
import database from './DatabaseInstance';
export default class DatabaseInit {

    constructor() {
        this.initDb();
    }

    initDb() {
        const sql = [
            DataManager.createTableUser(),
        ];
        database.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}