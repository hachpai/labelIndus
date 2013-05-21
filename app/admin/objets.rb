ActiveAdmin.register Objet do

  index do
    column :reference
    column :image do |objet|
      image_tag objet.image.url(:small) 
    end
    default_actions
  end
  filter :categorie, :as => :select, :collection => proc { Objet.categories }

  form do |f|
    f.semantic_errors *f.object.errors.keys
    f.inputs "Objet" do
      f.input :reference
      f.input :image
      f.input :categorie, :as => "select", :collection => Objet.categories
    end
    f.buttons
  end  
end
