json.extract! question, :id, :site_module_id, :body, :created_at, :updated_at
json.url question_url(question, format: :json)
