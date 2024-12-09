
const page = {
    template: `
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>SQLite コンソール</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
                <v-list-item to="/">Home</v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="3">
                        <v-form ref="connectionForm" @submit="connect($event)">
                            <v-select
                                v-model="environment"
                                :items="environments"
                                label="環境"
                                :rules="[$validate.required]"
                            ></v-select>
                            <v-select
                                v-model="db"
                                :items="dbs"
                                label="データベース"
                                :rules="[$validate.required]"
                            ></v-select>
                            <v-btn type="submit">接続</v-btn>
                        </v-form>
                        <v-divider></v-divider>
                        <v-list selectable :items="tables" @update:selected="tableSelected" />
                    </v-col>
                    <v-col cols="9">
                        <h2>{{ table }}</h2>
                        <v-data-table
                            :items="tableData"
                        ></v-data-table>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    `,
    data() {
        return {
            drawer: false,
            environment: "development",
            environments: [
                { title: '開発', value: 'development' },
                { title: 'ステージング', value: 'staging' },
                { title: '本番', value: 'production' },
            ],
            db: null,
            dbs: [],
            table: "未選択",
            tables: [],
            tableData: [],
        };
    },
    methods: {
        async getDBList() {
            this.dbs = (await this.$api.Db.getDBList(this.environment)).data;
        },
        async connect(event) {
            event.preventDefault();

            const valid = await this.$refs.connectionForm.validate();

            if (!valid.valid) {
                return;
            }

            this.tables = (await this.$api.Db.getTableList(this.environment, this.db)).data.map(table => {
                return {
                    title: table.name,
                    value: table.name,
                };
            });
        },
        async tableSelected(event) {
            this.table = event[0];

            const data = (await this.$api.Db.getTableData(this.environment, this.db, this.table)).data;

            this.tableData = data;
        },
    },
    watch: {
        environment() {
            this.getDBList();
        },
    },
    mounted() {
        this.getDBList();
    },
}

export default page;