class AddCategories < ActiveRecord::Migration
  def up
    add_column :objets, :categorie, :integer
  end
 
  def down
    remove_column :objets, :categorie
  end
end