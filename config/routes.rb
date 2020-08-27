Rails.application.routes.draw do
  resources :site_modules
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  devise_scope :user do
    authenticated :user do
      root 'site_modules#index', as: :authenticated_root
    end
    unauthenticated do
      root 'users/registrations#new', as: :unauthenticated_root
    end
  end
end
