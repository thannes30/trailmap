class Note < ActiveRecord::Base
  belongs_to :trail
  belongs_to :user
end
