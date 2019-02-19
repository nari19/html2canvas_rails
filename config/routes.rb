Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # トップ画面に設定したビューを表示させる
  root 'tasks#index'

  # RESTfulなリソースにするために必要なマッピングを定義
  resources :tasks
end