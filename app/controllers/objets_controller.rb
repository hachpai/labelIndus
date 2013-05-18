class ObjetsController < InheritedResources::Base
  
  def index
    categorie = params[:categorie] 
    cat_number = Objet.categories[categorie]
    params[:categorie] = "all" if cat_number.nil? && ! ["events", "contact"].include?(categorie)
    @objets = Objet.where(:categorie => cat_number)
    @objets = Objet.all if @objets.empty? && params[:categorie] == "all"

  end
end
