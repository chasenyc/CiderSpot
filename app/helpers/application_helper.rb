module ApplicationHelper
  def auth_token
    <<-HTML.html_safe
      <input type="hidden" value="#{form_authenticity_token}"
             name="authenticity_token">
    HTML
  end
end
