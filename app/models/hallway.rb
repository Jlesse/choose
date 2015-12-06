class Hallway < ActiveRecord::Base
  belongs_to :child,  class_name: "Room"
  belongs_to :parent, class_name: "Room"
end
