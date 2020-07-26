Rails.application.routes.draw do
  resources :products
  mount_devise_token_auth_for 'User', at: 'auth'

end
