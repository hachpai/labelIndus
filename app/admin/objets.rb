ActiveAdmin.register Objet do
  index do
    column :reference
    column :image
    default_actions
  end  
  
  form do |f|
    f.inputs "objet" do
      f.input :reference
    end

    f.buttons
  end
  
end
