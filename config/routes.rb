Rails.application.routes.draw do
  root 'welcome#index'
  get '/login' => 'sessions#new', as: 'login'
  post '/sessions' => 'sessions#create', as: 'sessions'
  delete '/logout' => 'sessions#destroy', as: 'logout'

  get '/signup' => 'users#new', as: 'signup'
  post '/users' => 'users#create', as: 'users'

  get '/profile' => 'users#profile', as: 'profile'
  get '/trails/new/:user_id' => 'trails#new'
  post '/trails' => 'trails#create'


end
