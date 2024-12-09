
const page = {
    template: `
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>開発ツール</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list>
                <v-list-item to="/">Home</v-list-item>
                <v-list-item to="/about">About</v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card to="/tool/sqlite-console">
                            <v-card-title>SQLITEコンソール</v-card-title>
                            <v-card-text>
                                <p>Sqlite DBコンソール</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-card-title>Httpリクエストツール</v-card-title>
                            <v-card-text>
                                <p>Httpクライアントとしてリクエストを送信するツール</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-card-title>キーワード走査</v-card-title>
                            <v-card-text>
                                <p>プロジェクト内の指定キーワードを検索します</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>プル</v-card-title>
                            <v-card-text>
                                <p>マスターデータをローカル環境に複製します</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-card-title>Httpリクエストツール</v-card-title>
                            <v-card-text>
                                <p>Httpクライアントとしてリクエストを送信するツール</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-card-title>キーワード走査</v-card-title>
                            <v-card-text>
                                <p>プロジェクト内の指定キーワードを検索します</p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    `,
    data() {
        return {
            drawer: false,
        };
    },
}

export default page;