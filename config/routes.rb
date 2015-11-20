Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource  :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :destroy, :show]
    resources :ciders, only: [:index, :create, :show, :update] do
      resources :wants, only: [:create]
      resources :gots, only: [:create]
      resources :reviews, only: [:create, :update, :destroy]
    end
    post 'reviews/:review_id/likes', to: 'likes#create'
    resources :likes, only: [:destroy]
    resources :wants, only: [:destroy]
    resources :gots, only: [:destroy]
  end
end
