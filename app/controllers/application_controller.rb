class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def sign_in!(user)
    @current_user = user
    @current_user.reset_session_token!
    self.session[:session_token] = @current_user.session_token
  end

  def sign_out!
    current_user.try(:reset_session_token!)
    self.session[:session_token] = nil
  end

end
