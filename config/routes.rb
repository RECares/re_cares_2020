Rails.application.routes.draw do
  resources :answers
  resources :questions
  resources :site_modules
  get 'static_pages/home'
  get 'static_pages/faq'
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
