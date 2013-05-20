#!/bin/env ruby
# encoding: utf-8
class Objet < ActiveRecord::Base

  @@categories = {"luminaires" => 1, "assises" => 2, "tables" => 3, "horloges" => 4, "autres" => 5, "accueil" => 6}
  #:small => "37x55>", :thumbnail =>  "74x110>", :big => "360x540>", :huge => "642x585>"
  has_attached_file :image, :styles => {:small => "37x", :thumbnail =>  "74x", :crop => "500x500>", :big => "360x", :huge => "642x"}, :processors => [:cropper]
  attr_accessor :crop_x, :crop_y, :crop_w, :crop_h
  attr_accessible :crop_x, :crop_y, :crop_w, :crop_h
  validates_attachment_content_type :image, :content_type => ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'], :message => "Le fichier fourni n'est pas une image."
  validates :reference, :presence => true
  validates :categorie, :inclusion => {:in => @@categories.values, :message => "La catégorie n'est pas valide."}
  attr_accessible :reference, :categorie, :image

  def Objet.categories 
    @@categories
  end

  def cropping?
     !crop_x.blank? && !crop_y.blank? && !crop_w.blank? && !crop_h.blank?
     
  end
  
  def crop_image
    image.reprocess!
  end
  
  def image_geometry(style = :original)
    @geometry ||= {}
    @geometry[style] ||= Paperclip::Geometry.from_file(image.path(style))
  end
end
