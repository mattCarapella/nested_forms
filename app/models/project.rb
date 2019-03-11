class Project < ApplicationRecord

	has_many :tasks, inverse_of: :project 		# inverse_of stores association in memory to avoid database lookup
	accepts_nested_attributes_for :tasks, reject_if: :all_blank, allow_destroy: true
	
end
