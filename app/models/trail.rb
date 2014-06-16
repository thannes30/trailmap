class Trail < ActiveRecord::Base
  has_many :notes
  belongs_to :user
  validates_presence_of :coords, :on => :create
  validates_presence_of :description, :on => :create
  validates_presence_of :title, :on => :create
  validates_presence_of :state, :on => :create
end
