class User < ApplicationRecord
	require "securerandom"

	# Adds virtual attributes for authentication
	has_secure_password
	# validates email
	validates :email, presence: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
	validates :password, presence: true
	validates :username, presence: true, uniqueness: true
end
