ActiveAdmin.register Objet do

  controller do
    
    after_filter :reprocess_image, :if => :cropping?, :only => :update
    
    def cropping?
      @objet.cropping?
    end
    
    def reprocess_image
      @objet.crop_image
    end
    
    def create
      @objet = Objet.new(params[:objet])
      if @objet.save
        flash[:notice] = "Objet bien ajout."
        if params[:objet][:image].blank?
          redirect_to admin_objet_path(@objet)
        else
          redirect_to admin_objet_path(@objet)
        end
      else
        render :action => 'new'
      end
    end
    
    def update
      @objet = Objet.find(params[:id])
      if @objet.update_attributes(params[:objet])
        flash[:notice] = "Objet mis a jour."
        if params[:objet][:image].blank?
          redirect_to admin_objet_path(@objet)
        else
          render :action => 'crop', :layout => 'admin/layouts/crop_layout'
        end
      else
        render :action => 'edit'
      end
    end
  end
  
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
