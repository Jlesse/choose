class Room < ActiveRecord::Base
  has_many :child_hallways, class_name: "Hallway", foreign_key: "child_id"
  has_many :parent_hallways, class_name: "Hallway", foreign_key: "parent_id"
  has_many :parents, through: :child_hallways, source: :parent
  has_many :children, through: :parent_hallways, source: :child
end
