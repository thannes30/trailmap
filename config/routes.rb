Rails.application.routes.draw do
  root 'welcome#index'

  post '/sessions' => 'sessions#create', as: 'sessions'
  delete '/logout' => 'sessions#destroy', as: 'logout'

  post '/users' => 'users#create', as: 'users'
  get '/profile' => 'users#profile', as: 'profile'

  get '/trails' => 'trails#index'
  post '/trails' => 'trails#create'
  post '/trails/favorite' => 'trails#favorite'

  get '/notes' => 'notes#index'
  post '/notes' => 'notes#create'


end
