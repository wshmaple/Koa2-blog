const mysql_query = require('./../utils/query')
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  
  await mysql_query.selectData("").then(result=>{
	  console.log("--------",result);
	  ctx.body = {
			title: 'koa2 json',
			code:1,
			data:result
		}
  }).catch(err=>{
	  console.log(err);
	  ctx.body = {
			title: 'koa2 json',
			code: 0,
			data:err
		}
  });
})

module.exports = router
