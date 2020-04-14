import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'
import Artists from '../pages/artists'
import Listcate from '../pages/listcate'
import Ucenter from '../pages/ucenter'
import Search from '../pages/search'
import Hotlist from '../pages/musiclist/hot_list'
import Newslist from '../pages/musiclist/news_list'
import Kinglist from '../pages/musiclist/king_list'
import Rocklist from '../pages/musiclist/rock_list'
import Popularlist from '../pages/musiclist/popular_list'
import Netlist from '../pages/musiclist/net_list'
import Lovelist from '../pages/musiclist/love_list'
import Oldlist from '../pages/musiclist/old_list'
import Westernlist from '../pages/musiclist/western_list'
import Filmlist from '../pages/musiclist/film_list'
import MoreList from '../pages/morelist'
import MusicPlay from '../pages/musicplay'
import ArtistsDetails from '../pages/artistsdetails/artistsdetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musicplay',
      name: "MusicPlay",
      component: MusicPlay
    },
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
      component: Index,
      children:[
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'more',
          name: 'MoreList',
          component: MoreList
        },
        {
          path: 'artists',
          component: Artists,
        },
        {
          path: 'listcate',
          redirect: '/listcate/news',
          component: Listcate,
          children:[
            {
              path: 'hot',
              component: Hotlist
            },
            {
              path: 'news',
              component: Newslist
            },
            {
              path: 'king',
              component: Kinglist
            },
            {
              path: 'rock',
              component: Rocklist
            },
            {
              path: 'popular',
              component: Popularlist
            },
            {
              path: 'old',
              component: Oldlist
            },
            {
              path: 'western',
              component: Westernlist
            },
            {
              path: 'love',
              component: Lovelist
            },
            {
              path: 'net',
              component: Netlist
            },
            {
              path: 'film',
              component: Filmlist
            }
          ]
        },
        {
          path: 'ucenter',
          component: Ucenter
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: '/artistsdetails',
          name: "ArtistsDetails",
          component: ArtistsDetails
        }
      ]
    }
  ]
})
