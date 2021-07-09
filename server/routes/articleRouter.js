import express from "express";
import * as articleControl from "../controllers/ArticleController";
import * as authControl from "../controllers/AuthController"


const articleRoute = express.Router()

articleRoute.route("/")
                   .post(authControl.protect, articleControl.createArticle)
                   .get(authControl.protect, articleControl.getAllArticles)
                

articleRoute.route('/:id')
                   .delete(authControl.protect ,
                    authControl.restrictTo('admin', 'developer'),
                    articleControl.deleteArticle)
                   .patch(authControl.protect, articleControl.updateArticle)
                   .get(authControl.protect,  articleControl.getArticle)


export default articleRoute;