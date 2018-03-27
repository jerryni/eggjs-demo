const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const page = this.ctx.query.page || 1;
        const newsList = await this.ctx.service.news.list(page);
        await this.ctx.render('news/list.tpl', {list: newsList});
    }
}

module.exports = NewsController;
