# README

#URL
Rails 環境構築
- https://qiita.com/narikei/items/cd029911597cdc71c516
- https://qiita.com/TAByasu/items/47c6cfbeeafad39eda07

Mysqlセットアップ
- https://qiita.com/itooww/items/13055c8bb1d226ee5844


# command
```
$mysql.server start
$mysql.server stop
$bundle exec rails s

$bundle exec rails generate model Task:string
$rails db:migrate
```


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

|Branch|Detail|
| - | - |
|test1|初期状態|
|test2|練習 タスク管理アプリ https://reasonable-code.com/rails-todo/|
|   (test3)|一番小さなRailsアプリ http://igarashikuniaki.net/rails_textbook/smallest-app.html|
|   (test4)|scaffold機能によるRails開発の基礎 http://natsuking.hatenablog.com/entry/2018/04/01/015336 |
|     | http://natsuking.hatenablog.com/entry/2018/04/03/012146 |
|test2=>test5|Bootstrap導入 https://qiita.com/Matteneko3/items/4dae9e55054e4a4affb4 |
|test6|html2canvas 導入|


url
- [rails html2canvas](https://qiita.com/tonishi/items/91ad735c9fac6e77fd22)
- [ruby 基礎文法](https://qiita.com/Fendo181/items/eb2cb17f32d99aa01f59)


  # gem 'bootsnap', '>= 1.1.0', require: false

 *= require_tree .