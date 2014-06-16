class User < ActiveRecord::Base
  has_many :trails
  has_many :favorites
  authenticates_with_sorcery!
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, email: true
  validates :password, presence: true, length: {minimum: 5, maximum: 10}
  has_many :notes
end
