module ApplicationHelper
  def color_class(page_name)
    (params[:categorie] != page_name && params[:categorie] != "all") ? "uncoloured "+page_name : page_name
  end
  
  def menu_objets_link(section)
    link_to raw("<li>"+section+"</li>"), '/'+section, :class => color_class(section)
  end
end
