Rails.application.routes.draw do

  root 'application#index'

  # Gear Routes
  get '/gear' => 'gears#index'

  # Users Routes
  get '/register' => 'users#index' 
  post '/register' => 'users#create'
  get '/:id/profile', to: 'users#show', as: 'user'
  patch '/:id/profile' => 'users#update'

  # Session Routes

  get '/login' => 'sessions#index'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
end
