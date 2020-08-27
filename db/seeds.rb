# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

site_modules = JSON.parse(File.read('db/site_modules.json'))["site_modules"]
site_modules.each do |site_module|
  the_site_module = SiteModule.create(name: site_module["name"])
  site_module["questions"].each do |question|
    the_question = Question.create(site_module: the_site_module, body: question["body"])
    question["answers"].each do |answer|
      the_answer = Answer.create(question: the_question, body: answer["body"])
    end
  end
end
