module ApplicationHelper
  def color_class(page_name)
    if ["events", "contact"].include?(page_name)
      (params[:categorie] != page_name) ? "uncoloured "+page_name : page_name
    else
      (params[:categorie] != page_name && params[:categorie] != "all") ? "uncoloured "+page_name : page_name 
    end
  end

  def menu_objets_link(section)
    link_to raw("<li>"+section+"</li>"), '/'+section, :class => color_class(section)
  end

  def thumbnailColorCode(category)
    #"luminaires" => 1, "assises" => 2, "tables" => 3, "horloges" => 4, "autres" => 5, "accueil" => 6
    case category
    when 1
      "rgb(224,248,131);"
    when 2
      "rgb(115,96,90);"
    when 3
      "rgb(191,163,152);"
    when 4
      "rgb(241,226,219);"
    when 5
      "rgb(242,141,119);"
    else "black;"
    end
  end
end
