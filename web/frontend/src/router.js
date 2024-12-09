
class Route {
    constructor(path, title, pageUrl) {
        this.path = path;
        this.meta = { title: title };
        this.component = () => import(`./pages/${pageUrl}`);
    }
}

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        new Route('/', 'Home', 'index.js'),
        new Route('/tool/sqlite-console', 'SqliteConsole', 'tool/sqlite-console.js'),
    ],
});

export default router;