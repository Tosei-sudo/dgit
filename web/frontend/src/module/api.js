
class DbAPI {
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://localhost:9001',
        });
    }

    async getDBList(environment) {
        return this.axios.get(`/api/db/list`, {
            params: {
                env: environment,
            },
        });
    };

    async getTableList(environment, db) {
        return this.axios.get(`/api/db/tables`, {
            params: {
                env: environment,
                db: db,
            },
        });
    }

    async getTableData(environment, db, table) {
        return this.axios.get(`/api/db/tables/all`, {
            params: {
                env: environment,
                db: db,
                table: table,
            },
        });
    }
}

class Api {
    constructor() {
        this.Db = new DbAPI();
    }
}

const plugin = {
    install(app, options) {
        app.config.globalProperties.$api = new Api;
    }
};

export default plugin;