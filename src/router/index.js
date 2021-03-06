import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const random = () => import('@/views/randomMsg/app')
const randomQuestion = () => import('@/views/randomMsg/components/question')
const randomNews = () => import('@/views/randomMsg/components/news')
const randomMusic = () => import('@/views/randomMsg/components/music')
const randomBook = () => import('@/views/randomMsg/components/book')
const randomMovie = () => import('@/views/randomMsg/components/movie')
const myCenter = () => import('@/views/randomMsg/components/myCenter')
const loveList = () => import('@/views/randomMsg/components/loveList')

// blog
const admin = () => import('@/views/blog/admin')
const blog = () => import('@/views/blog/app')

const article = () => import('@/views/blog/components/user/article')
const blogList = () => import('@/views/blog/components/user/list')
const searchList = () => import('@/views/blog/components/user/searchList')

const editArticle = () => import('@/views/blog/components/admin/article')
const articleList = () => import('@/views/blog/components/admin/list')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/random',
      component: random,
      children: [
        {
          path: 'question',
          name: 'question',
          component: randomQuestion
        },
        {
          path: 'news',
          name: 'news',
          component: randomNews
        },
        {
          path: 'music',
          name: 'music',
          component: randomMusic
        },
        {
          path: 'book',
          name: 'book',
          component: randomBook
        },
        {
          path: 'movie',
          name: 'movie',
          component: randomMovie
        },
        {
          path: 'center',
          name: 'center',
          component: myCenter
        },
        {
          path: 'love_list',
          name: 'loveList',
          component: loveList
        }
      ]
    },
    {
      path: '/blog/admin',
      component: admin,
      children: [
        {
          path: '',
          name: 'adminHome',
          component: articleList
        },
        {
          path: 'list/:id',
          name: 'list',
          component: articleList
        },
        {
          path: ':id/edit',
          name: 'editArticle',
          component: editArticle
        },
        {
          path: 'article/add',
          name: 'addArticle',
          component: editArticle
        }
      ]
    },
    {
      path:  '/blog',
      component: blog,
      children: [
        {
          path: '',
          name: 'home',
          component: blogList
        },
        {
          path: 'list/:id',
          name: 'articleList',
          component: blogList
        },
        {
          path: 'article/:id',
          name: 'articleDetail',
          component: article
        },
        {
          path: 'tag/:tag',
          name: 'tagSearch',
          component: searchList
        },
        {
          path: 'search/:query',
          name: 'querySearch',
          component: searchList
        }
      ]
    }
  ]
})