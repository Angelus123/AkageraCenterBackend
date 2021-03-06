import express from "express";
import * as articleControl from "../controllers/ProfileController";
import * as authControl from "../controllers/AuthController"


const articleRoute = express.Router()

articleRoute.route("/")
                   .post( articleControl.createArticle)
                   .get(authControl.protect, articleControl.getAllArticles)
                

articleRoute.route('/:id')
                   .delete(authControl.protect ,
                    authControl.restrictTo('admin', 'developer'),
                    articleControl.deleteArticle)
                   .patch(authControl.protect, articleControl.updateArticle)
                   .get(authControl.protect,  articleControl.getArticle)


export default articleRoute;