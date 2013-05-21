class ObjetsController < InheritedResources::Base
  
  def index
    categorie = params[:categorie] 
    cat_number = Objet.categories[categorie]
    params[:categorie] = "all" if cat_number.nil? && ! ["events", "contact"].include?(categorie)
    @objets = Objet.where(:categorie => cat_number)
    @objets = Objet.where("categorie != ?", Objet.categories["accueil"]) if @objets.empty? && params[:categorie] == "all"

  end
  
  def accueil
     @objets = Objet.where(:categorie => Objet.categories["accueil"])
  end
end
