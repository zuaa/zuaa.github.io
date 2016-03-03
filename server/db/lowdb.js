/**
 * Created by xuping on 2016/2/28.
 */
const low = require('lowdb')
const storage = require('lowdb/file-sync')

const db = low('db.json',{storage: storage})

db('posts').push({ title: 'lowdb is awesome'})

db('posts').find({ title: 'lowdb is awesome' })


