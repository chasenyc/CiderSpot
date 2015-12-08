Rails.application.routes.draw do
  root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource  :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :destroy, :update, :show]
    resources :ciders, only: [:index, :create, :show, :update] do
      resources :wants, only: [:create]
      resources :gots, only: [:create]
      resources :reviews, only: [:create]
    end
    resources :breweries, only: [:index]
    resources :reviews, only: [:update, :destroy]
    post 'reviews/:review_id/likes', to: 'likes#create'
    get 'search', to: 'search#index'
    resources :likes, only: [:destroy]
    resources :wants, only: [:destroy]
    resources :gots, only: [:destroy]
  end
end
