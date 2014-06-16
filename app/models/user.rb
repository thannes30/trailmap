class User < ActiveRecord::Base
  has_many :trails
  authenticates_with_sorcery!
  validates_presence_of :username, :on => :create
  validates_presence_of :password, :on => :create
  validates_presence_of :email, :on => :create
  validates_uniqueness_of :email
end
