class CreateObjets < ActiveRecord::Migration
  def change
    create_table :objets do |t|
      t.string :reference

      t.timestamps
    end
  end
end
