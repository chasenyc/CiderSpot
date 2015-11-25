class Api::PostsController < ApplicationController


  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

  def ensure_admin_is_poster

  end

end
