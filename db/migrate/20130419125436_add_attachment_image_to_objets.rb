class AddAttachmentImageToObjets < ActiveRecord::Migration
  def self.up
    change_table :objets do |t|
      t.has_attached_file :image
    end
  end

  def self.down
    drop_attached_file :objets, :image
  end
end
