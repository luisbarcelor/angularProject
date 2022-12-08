"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({
            msg: 'THE API IS AT /api/calculator',
            author: 'Luis Barcelo'
        });
    }
}
exports.indexController = new IndexController();
