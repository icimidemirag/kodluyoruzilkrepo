const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>'
})

router.get('/about' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>'
})

router.get('/contact' , ctx =>{
    ctx.status = 200
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>'
})

app.use((ctx) => {
    ctx.status = 404
    ctx.body = '404 sayfa bulunamadı'
})

app.use(router.routes())

const port = 3000;

app.listen(port, ()=> {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})